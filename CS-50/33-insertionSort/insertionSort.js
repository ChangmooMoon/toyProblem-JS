// /**
//  * Insertion sort is a basic sorting algorithm.
//  *
//  * Insertion sort iterates over an array, growing a sorted array behind the current location.
//  * It takes each element from the input and finds the spot, up to the current point,
//  * where that element belongs. It does this until it gets to the end of the array.
//  *
//  * Insertion sort should be implemented as a stable sort. This means that equal elements
//  * should retain their relative order. Numbers, as primitives, give us no way to check this,
//  * so we'll be sorting objects with a value field, on which they will be sorted, like so:
//  *
//  * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
//  *
//  * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
//  *
//  * ---
//  *
//  * EXTRA CREDIT:
//  *
//  * Refactor your sort to (optionally) take an explicit comparator function
//  * as its second argument, so that callers can define arbitrary ways to sort elements.
//  * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
//  * for an example of how this works (excerpt below):
//  *
//  * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
//  * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
//  * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
//  *
//  * If no comparator is given, just sort the elements using `<` or `>`.
//  **/

// // Example usage:
// // insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// // yields [{value: 1}, {value: 2}, {value: 3}]

// // This function is to help you test, and should not be incorporated in your solution.
// // It will transform an array of numbers into an array of valid objects.
// const testingTransform = (array) => {
//   let transform = []

//   for (let i = 0; i < array.length; i++)
//     transform.push({ value: array[i], i: i });

//   return transform
// }
// console.log(testingTransform([13, 1, 3, 5, 7, 9, 11]))

// const insertionSort = (array) => {

// }

// console.log(insertionSort([13, 1, 3, 5, 7, 9, 11]))

// const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
// console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]

const insertionSort = (list) => {
  let tmp, inner
  for (var outer = 1; outer < list.length; outer++) { // outer loop
    tmp = list[outer]
    inner = outer

    while (inner > 0 && (list[inner - 1] >= tmp)) { // inner loop
      list[inner] = list[inner - 1]
      --inner
    }

    list[inner] = tmp // outer loop end
    console.log(list)
  }
}
const list = [9, 7, 5, 3, 1, 8]
insertionSort(list)
console.log(list)
