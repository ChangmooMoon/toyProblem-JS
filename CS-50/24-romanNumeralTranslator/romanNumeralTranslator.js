
/**
 * Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60 = 50 + 10
 *
 * When a smaller numeral appears before a larger one,
 * it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4 = -1 + 5
 *
 * You should return `null` on invalid input.
 */
// I, II, III, IV, V, VI, VII, VIII, IX, X

// XX === 20, XL === 40, XLIV === 44, LV === 55

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const translateRomanNumeral = (romanNumeral) => {
  let result = 0
  for (let i = 0; i < romanNumeral.length; i += 2) {
    let
      a = DIGIT_VALUES[romanNumeral[i]],
      b = DIGIT_VALUES[romanNumeral[i + 1]]
    if (b === undefined) result += a
    else if (a < b) result += (b - a)
    else result += (a + b)
  }
  return resultg
}

console.log(translateRomanNumeral("LX")) // 60
console.log(translateRomanNumeral("IV")) // 4
console.log(translateRomanNumeral('XX')) // 20
console.log(translateRomanNumeral('XL')) // 40
console.log(translateRomanNumeral('XLIV')) // 44