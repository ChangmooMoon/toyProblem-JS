/*
 * Given a sorted array that has been rotated some number of items right or left,
 * i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element?
 * For simplicity, you can assume that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 *  Target time complexity: O(log(array.length)) // no sorting, only binary search
 */

const rotatedArraySearch = (rotated, target) => {
  let start = 0, end = rotated.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (target === rotated[mid]) return mid

    if (rotated[mid] <= rotated[end]) {
      if (target < rotated[mid] || target > rotated[end]) end = mid - 1;
      else start = mid + 1
    }

    else if (rotated[mid] >= rotated[start]) {
      if (target > rotated[mid] || target < rotated[start]) start = mid + 1
      else maxInd = midInd - 1;
    }
  }
  return null;
}
console.log(rotatedArraySearch([5, 6, 7, 8, 9, 0, 1, 2, 3], 2)) //=== 7
// [5, 6, 7, 8,  /9/,  0, 1, 2, 3]  target = 2, start = 0, end = 8 mid = 4
// rotated[mid]=9, rotated[start] =5, rotated[start] = 5,  start = mid + 1, so start = 4+1 = 5
// [5,6,7,8,9,  //0,1,2,3//] start= 5, end = 8, mid = 6
// 1<2, start = mid + 1, start = 7, end = 8, mid = 7
// return 7
console.log(rotatedArraySearch([5, 6, 7, 8, 9, 0, 1, 2, 3], 100)) // === null