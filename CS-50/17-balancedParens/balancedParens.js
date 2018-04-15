/*
 * write a function that takes a string of text and returns true if the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
const balancedParens = (input) => {
  const open = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const close = {
    ')': true,
    ']': true,
    '}': true,
  }
  let stack = []

  for (let i = 0; i < input.length; i++) {
    let char = input[i]

    if (open[char]) stack.push(char)
    else if (close[char]) {
      if (open[stack.pop()] !== char) return false
    }
  }
  return stack.length === 0 ? true : false
}
console.log(balancedParens('('))  // false
console.log(balancedParens('()')) // true
console.log(balancedParens(')('))  // false
console.log(balancedParens('(())'))  // true

console.log(balancedParens('[](){}')) // true
console.log(balancedParens('[({})]'))   // true
console.log(balancedParens('[(] {)}')) // false


console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')) // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')) // false
// i think regExp solution might be possible