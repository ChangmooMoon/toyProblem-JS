/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
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
var balancedParens = function(input) {
  var result = false;
  var bracket = [
    '{',
    '}',
    '[',
    '(',
    ')',
    ']'
  ];
  var myStr = input.split('').filter(function(x){
    if(bracket.includes(x)) return x;
  });
  while(myStr === '' ){
    if(str.includes('()' || '[]' || '{}' ) 
    }
  }
}
console.log(balancedParens('[]124(){}'));
;
