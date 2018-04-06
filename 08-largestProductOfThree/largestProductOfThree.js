/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
// 큰 숫자 3개의 element들의 곱,negative number도 포함

// // 나이 최초 답안
// var largestProductOfThree = function(array) {
//   array.sort(function(a,b){return b-a});
//   return array[0]*array[1]*array[2];
// }
// // =================================================================
// // 시도2
// var largestProductOfThree2 = function(array){
//   var positive = array.forEach(function(x){
//     if(x>=0) return x;
//   })
//   return positive;
// }
// console.log( largestProductOfThree2([-8,-3,1,2,5]) );
// // [5,-8,2,-3,1]

// soultuion 1
var largestProductOfThree = function(array){
  var temp = array.sort(function(a,b){
    return a-b;
  })
  var positive = array[array.length-1]
  *array[array.length-2]
  *array[array.length-3]);

  var negative = array[0]*array[1]*array[array.length-2];
  return positive > negative ? positive : negative;
}

//solution 2
Array.prototype.sortAscending = function(){
  this.sort(function(a,b){
    return a-b;
  });
  return this;
}

var largestProductOfTHree = function(array){
  array = array.slice().sortAscending();

  var secondFromLast = array[array.length-2];
  var thirdFromLast = array[array.length-3];

  return Math.max(array[array.length-1]* secondFromLast*thirdFromLast,
  array[array.length-1]* array.[0]* array[1]);
};
