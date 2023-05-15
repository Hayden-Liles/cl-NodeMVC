export function generateId(){
  let time = (new Date().getTime() / 1451 | 0).toString(16);
  return time + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (
    Math.random() * 16 | 0).toString(16)).toLowerCase();
}