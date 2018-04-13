/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (...theArgs) => {
  if (theArgs.length < 2) throw new Error('At least Two or more parameters are required!')

  let deduplication = {}, result = ''
  theArgs.forEach((current) => {
    for (let i = 0; i < current.length; i++) {
      let char = current[i]
      deduplication[char] = deduplication[char] || 0
      deduplication[char]++
    }
  })
  for (let props in deduplication) {
    if (deduplication[props] === theArgs.length) result += props
  }
  return result
}



console.log(commonCharacters('acexivou', 'aegihobu', 'aeio'))
