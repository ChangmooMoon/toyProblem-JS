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
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  var denom = 1;
  while(1){
    if(Number.isInteger(number*denom) )
    return number*x.toString() + '/' + denom.toString();
    denom++;
  }
};
console.log(toFraction(0.5));
console.log(toFraction(3.0));
console.log(toFraction(2.5));
console.log(toFraction(0.7777777))

var toFraction2 = function(number){

}
