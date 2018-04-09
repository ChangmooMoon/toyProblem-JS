/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
 function binarySearch(array,target,start,end){
   if(start>end) return false

   var mid = Math.floor( (start+end) / 2)

   if(array[mid] > target) return binarySearch(array,target,start,mid-1)  // (start,mid-1)
   else if(array[mid] < target) return binarySearch(array,target,mid+1,end) // (mid+1,end)
   else return mid
 }

var index = binarySearch([1, 2, 3, 4, 5],6,0,4);
console.log(index); // [3]
