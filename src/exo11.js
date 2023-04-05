export function deduplicateArray(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // 1 - with filter and indexOf methods
  // return arr.filter((item, position) => arr.indexOf(item) === position);
  // 2 - with a Set and spread operator
  let set = new Set(arr);
  return [...set];
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods
  // return Object.keys(obj).find((key) => obj[key] === val);
  // 2 - with a Map and Object.entries
  let result = Object.entries(obj).map((item) => item.reverse());
  result = new Map(result);
  return result.get(val);
}
