/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2' // 25,10 10%25 GCD(10,25) , GCD(25,10)

 */

const toFraction = (number) => {
  let
    denominator = 1,
    nowGCD

  while (!Number.isInteger(number)) {
    number *= 10
    denominator *= 10
  }

  const GCD = (big, small) => {
    if (small > big) GCD(small, big)
    let tmp
    while (small) {
      tmp = big % small
      big = small
      small = tmp
    }
    return big
  }

  nowGCD = GCD(number, denominator)
  return `${number / nowGCD}/${denominator / nowGCD}`
}

console.log(toFraction(0.5))
console.log(toFraction(3.0))
console.log(toFraction(2.5))
console.log(toFraction(2.9818))