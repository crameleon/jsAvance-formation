export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return new Proxy(object, {
    has(obj, prop) {
      return Reflect.has(obj, prop) || alias.hasOwnProperty(prop);
    },
    get(obj, prop) {
      return Reflect.get(obj, alias.hasOwnProperty(prop) ? alias[prop] : prop);
    },
    set(obj, prop, val) {
      return Reflect.set(
        obj,
        alias.hasOwnProperty(prop) ? alias[prop] : prop,
        val
      );
    }
  });
};

// example:
const originalUser = { name: "Sanchez", first: "Rick" };
const user = addAliasForProperties(originalUser, {
  lastName: "name",
  firstName: "first"
});

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  let counter = 0;
  return new Proxy(fn, {
    get(o, key) {
      return key === "count" ? counter : Reflect.get(o, key);
    },
    apply(o, context, args) {
      counter++;
      return Reflect.apply(o, context, args);
    }
  });
};

// example:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
