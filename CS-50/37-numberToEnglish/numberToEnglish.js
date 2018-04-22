/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}
const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
}

Number.prototype.toEnglish = function () {
  const num = this
  let
    result, numLeft, numInPlace, place, rest

  if (!!numbersToWords[num]) result = numbersToWords[num]
  else if (num < 100) {
    numInPlace = Math.floor(num / 10)
    numLeft = num % 10
    result = numbersToWords[numInPlace * 10] + '-' + numbersToWords[numLeft]
  } else {
    if (num < 1000) place = 100
    else {
      place = 1000
      while (place * 1000 <= num) place *= 1000
    }

    numInPlace = Math.floor(num / place)
    numLeft = num % place
    result = numInPlace.toEnglish() + ' ' + numbersToPlace[place]
    rest = numLeft.toEnglish()

    if (rest !== 'zero') result += ' ' + rest
  }
  return result
}


console.log((7).toEnglish()) // > "seven"
console.log((99).toEnglish()) // > "ninety-nine"
console.log((575).toEnglish()) // > "five hundred seventy-five"
console.log((78193512).toEnglish())
console.log((150043.273).toEnglish()) // > "one hundred fifty thousand forty-three and two hundred seventy three thousandth