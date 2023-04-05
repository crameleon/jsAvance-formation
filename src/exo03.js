// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let retObject = {};
  for (let key in obj) {
    retObject[obj[key]] = key;
  }
  return retObject;
}
