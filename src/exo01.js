// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  if (typeof x === "object" && x !== null) {
    return false;
  } else if (typeof x === "function") {
    return false;
  }
  return true;
}
