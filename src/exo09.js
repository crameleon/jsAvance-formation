export function parseUserData(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :

  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - using Object.assign
  // 2 - using spread operator on properties
  // 3 - using destructuring and default parameters for parseUserData
  let obj = {};

  // Object.assign(obj, defaults, data);

  // obj = { ...defaults, ...data };

  // return obj;

  const { name = "Anonymous", isAdmin = false, ...reste } = data;
  return { name, isAdmin, ...reste };
}
