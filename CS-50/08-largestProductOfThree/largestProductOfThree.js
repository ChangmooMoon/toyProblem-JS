
/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


const largestProductOfThree = (array) => {
  if (array.length < 3) throw new Error('At least need more than 3 arguments')

  array = array.sort((a, b) => { return a - b })
  let length = array.length

  const plusplusplus = array[length - 1] * array[length - 2] * array[length - 3] // case 1 : (+ + +)
  const minusplusplus = array[0] * array[1] * array[length - 1] // case 2 : (- - +)

  return plusplusplus >= minusplusplus ? plusplusplus : minusplusplus
}

console.log(largestProductOfThree([-10, -4, 0, 2, 10, 11])) // 440 > 220
