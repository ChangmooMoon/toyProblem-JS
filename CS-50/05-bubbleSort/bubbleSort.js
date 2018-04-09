/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope
// so we can test function efficiency
// Feel free to add helper functions if needed.

var bubbleSort = function(array) {
  var flag = false;
  for(var i = 0; i< array.length; i+=1){
    for(var j= 0; j<array.length -i -1; j+=1){
      if(array[j] > array[j+1]){
        flag = true;
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
      if(!flag) return array;
    }
  }
  return array;
};

console.log(bubbleSort([4,3,2,1]));
//
// QUERY: What's the time complexity of your algorithm? If you don't already
// * know, try to intuit this without consulting the Googles.
// ========> T(f) = O(n^2) for loop * for loop
// *
// * Extra credit: Optimization time! During any given pass, if no elements are
// * swapped we can assume the list is sorted and can exit the function early.
// * After this optimization, what is the time complexity of your algorithm?
// * =======> T(f) = Ω(n) for loop * 1번 검사하고 return

// * Moar credits: Do you need to consider every element every time you iterate
// * through the array? Make it happen, boss. Again: Has the time complexity of
// * your algorithm changed?
// ========> T(f) = Ω(n) for loop * 1번 검사하고 return
