/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
// = 100p + 50p + 40p + 5p + 2p + 3p = 200p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

const makeChange = (total) => {
  let result = 0
  const coins = [1, 2, 5, 10, 20, 50, 100, 200]
  const changeCount = (index, total) => {
    let current = coins[index]
    if (index === 0) {
      result++
      return
    }
    while (total >= 0) {
      changeCount(index - 1, total)
      total -= current
    }
  }
  changeCount(coins.length - 1, total) // 7,total
  return result
}

console.log(makeChange(1)) // 1
console.log(makeChange(2)) // 11/2 // 2
console.log(makeChange(5)) // 11111,2111,221,5 // 4
console.log(makeChange(8))
console.log(makeChange(200)) // 73682
