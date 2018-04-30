/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = (string) => {
  let result = ''
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 3; j <= string.length; j++) {
      if (string.slice(i, j) === string.slice(i, j).split('').reverse().join('') && string.slice(i, j).length > result.length)
        result = string.slice(i, j)
    }
  }
  return result
}
let a = longestPalindrome('My dad is a racecar athlete')
console.log(a) /// 'a racecar a'