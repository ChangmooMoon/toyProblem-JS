/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// var testArr = ['A','B',"C","D","B"];
// console.log(testArr.includes(testArr[1],2));

var firstNonRepeatedCharacter = function(string) {
  var myObj = {};
  for(var i in myObj){
    myObj.i = string
  }
}

console.log(firstNonRepeatedCharacter('AACBDB'));
