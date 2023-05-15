export function checkProp(target, prop) {
  if (typeof target[prop] === 'function') { return; }
  if (!target.hasOwnProperty(prop)) {
    throw new Error(`[BAD PROP]:[${prop}]`);
  }
}
