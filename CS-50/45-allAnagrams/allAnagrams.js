/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ] 3! = 6
  * var anagrams2 = allAnagrams('abcd')
  * consoe.log(anagrams2) // ['abcd',] 4! = 24
  *
  */

const allAnagrams = (string) => {
  let result = {}
  let index = 0
  const finder = (text, option) => {
    if (text.length === string.length) result[text] = true
    for (var i = 0; i < option.length; i++) {
      finder(text + option[i], option.slice(0, i) + option.slice(i + 1))
    }
  }
  finder('', string)
  console.log(result)
  return Object.keys(result)
}

let anagrams = allAnagrams('abc')
console.log(anagrams)
