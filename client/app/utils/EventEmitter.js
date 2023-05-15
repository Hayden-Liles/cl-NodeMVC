import { Pop } from './Pop.js'

export class EventEmitter {
  constructor() {
    this._listeners = {};
  }

  /**
   * @param {string | number | symbol} event
   * @param {function} fn
   * @param {any} thisContext
   */
  on(event, fn, thisContext = null) {
    if (typeof fn !== 'function') {
      return;
    }

    if (!(event in this)) {
      console.error(`Unable to register listener for '${event}'`);
      Pop.error(`Unable to register listener for '${event}'`);
      return;
    }

    this._listeners[event] = this._listeners[event] || [];
    fn.ctx = thisContext;
    this._listeners[event].push(fn);
  }

  /**
   * @param {string | number | symbol} event
   * @param {function} fn
   */
  off(event, fn) {
    const listeners = this._listeners[event];

    if (!Array.isArray(listeners)) {
      return;
    }

    const index = listeners.indexOf(fn);

    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  /**
   * @param {string | number | symbol} event
   * @param {any} [payload]
   */
  emit(event, payload) {
    const listeners = this._listeners[event];

    if (!Array.isArray(listeners)) {
      return;
    }

    listeners.forEach((fn) => {
      fn.ctx ? fn.call(fn.ctx, payload) : fn(payload);
    });
  }

  /**
   * Removes all listeners from a specified event
   * @param {string | number | symbol} event
   */
  clear(event) {
    delete this._listeners[event];
  }

  /**
   * Removes all listeners
   */
  clearAll() {
    this._listeners = {};
  }
}
