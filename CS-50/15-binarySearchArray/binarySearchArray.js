/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
const binarySearch = (array, target) => {
  let
    start = 0,
    end = array.length - 1

  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (array[mid] === target) return [mid]
    else if (array[mid] > target) end = mid - 1
    else if (array[mid] < target) start = mid + 1
  }
}

var index = binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 11);
console.log(index); // [5]