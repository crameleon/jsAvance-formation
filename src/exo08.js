// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments,
// and the number of times each argument has been received as values
export function count(...legumes) {
  // return legumes.reduce((accu, legume) => {
  //   if (legume in accu) {
  //     accu[legume] += 1;
  //   } else {
  //     accu[legume] = 1;
  //   }
  //   return accu;
  // }, {});
  const count = legumes.reduce((accumulator, legume) => {
    return { ...accumulator, [legume]: (accumulator[legume] || 0) + 1 };
  }, {});
  return count;
}

// example:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot");
// { Carrot: 2, Cabbage: 3, Potato: 1 }

// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...args) {
  // console.log(Object.entries(counters));
  // let maxArray = Object.entries(counters).reduce(
  //   (highestOccurrence, legume) => {
  //     // ["Carrot", 1]
  //     if (highestOccurrence === [] || highestOccurrence[1] < legume[1]) {
  //       highestOccurrence = legume;
  //     }
  //     console.log(highestOccurrence);
  //     return highestOccurrence;
  //   },
  //   []
  // );
  // return maxArray[0];
  let counters = count(...args);
  return Object.keys(counters).reduce((a, b) =>
    counters[a] > counters[b] ? a : b
  );
}

// example:
mostFrequentIn(
  "Carrot",
  "Cabbage",
  "Potato",
  "Cabbage",
  "Cabbage",
  "Carrot"
) === "Cabbage";
