/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
// iterator version //
const powerset = (str) => {
  let result = [''];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0, length = result.length; j < length; j++) {
      result.push(result[j] + str[i]);
    }
  }
  return result;
}

console.log(powerset('abc')) //[ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]

