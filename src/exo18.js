export const range = (start, end) => {
  // return an iterable iterating over all the numbers between two bounds
  return {
    [Symbol.iterator]: function () {
      let iter = start;
      return {
        next() {
          return {
            done: iter > end,
            value: iter++
          };
        }
      };
    }
  };
};

// example:
// [...range(5,10)]
// -> [5,6,7,8,9,10]
