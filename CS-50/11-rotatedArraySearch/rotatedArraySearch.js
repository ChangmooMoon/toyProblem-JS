/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length)) === O(logN) */




var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  var zeroIndex = binarySearch(rotated,0,0,rotated.length); // 0의 인덱스를 binarySearch로 찾음 ==> O(logN)

  if(target > rotated.length) return null;
  else { // 배열을 0을 기준으로 둘로 쪼개서 binarySearch 함수에 넣는다
    var a = binarySearch(rotated,target,0,zeroIndex-1) // ==> O(logN)
    var b = binarySearch(rotated,target,zeroIndex,rotated.length) // ==> O(logN)
    if (a === -1) return b; // a 파트에서 target을 찾지 못하면 b 파트에서 찾은 target의 인덱스값을 리턴
    else return a
}
};

function binarySearch(array.sort(),value,low,high){  // // ==> O(logN)
  if(low>high) false;

  var mid = Math.floor((low+high) / 2)
  if(array[mid] > value) return binarySearch(array,value,low,mid-1)
  else if(array[mid] < value) return binarySearch(array,value,mid+1,high)
  else return mid
}

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)) // 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5)) // 1
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)) // null
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 0)) // 3
