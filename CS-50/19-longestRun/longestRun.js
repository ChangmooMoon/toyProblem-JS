/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3] 0 1 2 3 4 5
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0] 0 1 2 3
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

const longestRun = (string) => {
  string = string.split('').sort()
  console.log(string)

  let count = 1, start = 0, bestCount = 0, bestStart = 0, bestEnd = 0, i
  for (i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++
      if (count > bestCount) {
        bestCount = count
        bestStart = start
        bestEnd = i
      }
    } else {
      count = 1
      start = i
    }
  }
  return [bestStart, bestEnd];
}
//console.log(longestRun("abbbcc")) // [1, 3] 0 1 2 3 4 5

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

console.log(longestRun("abbbcc")) // [1, 3] 0 1 2 3 4 5
console.log(longestRun("aabbc"))  // [0, 1]
console.log(longestRun("abcd"))   // [0, 0] 0 1 2 3
console.log(longestRun(randomString(10)))