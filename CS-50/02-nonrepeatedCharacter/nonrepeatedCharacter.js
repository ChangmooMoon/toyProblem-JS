/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = (string) => {
  for (let i = 0; i < string.length; i++) {
    let charAt = string.charAt(i)
    if (string.indexOf(string.charAt(i)) === i & // charAt의 인덱스가 i이고
      string.indexOf(charAt, i + 1) === -1) return charAt // i+1 인덱스 이후로 charAt이 존재하지 않으면 charAt을 return
  }
  return null
}

console.log(firstNonRepeatedCharacter('ABA')) // B
console.log(firstNonRepeatedCharacter('AACBDB')) // C
console.log(firstNonRepeatedCharacter('')) // null
