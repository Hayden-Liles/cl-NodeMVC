import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { checkProp } from './utils/CheckProp.js'

class AppState extends EventEmitter {
  user = {}
  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {}
  socketData = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    checkProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    checkProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.appState = appState
}
