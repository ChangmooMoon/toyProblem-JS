/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 * 1 2 4 4 5 6 6 7 8 9
*/

const evenOccurrence = (arr) => {
  let
    result = null,
    tester = {}

  arr.forEach((element) => {
    !tester[element] ?
      tester[element] = 1 :
      tester[element]++
  })

  for (keys in tester) {
    if (tester[keys] % 2 === 0 && (result === null || result > keys)) result = keys
  }

  return result
}

let onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 11])
console.log(onlyEven) // 4
let a = evenOccurrence([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4])
console.log(a) // 3