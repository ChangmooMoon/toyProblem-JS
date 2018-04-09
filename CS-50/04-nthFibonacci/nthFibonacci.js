/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

const nthFibonacci = function (n) {
  let result = [0, 1];
  let count = 1;
  while (count < n) {
    result.push(result[count - 1] + result[count]);
    count++;
  }
  return result[n];
};
console.log(nthFibonacci(7)); // 13

const nthFibonacci2 = function (n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return nthFibonacci2(n - 1) + nthFibonacci2(n - 2);
}
console.log(nthFibonacci2(7)); // 13

// var result = [0,1,1,2,3,5,8,13,.....]
// result[0] 0
// result[1] 1
// result[2] 1
// result[3] 2
// result[4] 3
// result[5] 5
// result[6] 8
