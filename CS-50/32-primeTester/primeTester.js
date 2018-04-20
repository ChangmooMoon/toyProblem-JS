/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = (n) => {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) return false

  if (n === 1) return false

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false //
  }
  return true
}

/* Extra credit:
Write a function that generates a list of all prime numbers in a user-specified range (inclusive).
If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
(And if you're feeling saucy, check out the Sieve of Atkin.)
 */

const primeSieve = (start, end) => {
  let result = []
  for (let i = start; i < end; i++) {
    if (primeTester(i) === true) result.push(i)
  }
  return result
}

console.log(primeSieve(1, 100))
