
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== "string") {
    return null;
  }
  let result = 0;
  for (var i = 0; i < romanNumeral.length; i+2) {
    if (!DIGIT_VALUES[romanNumeral[i]]) {
      return null;
    }
    if (DIGIT_VALUES[romanNumeral[i]] > DIGIT_VALUES[romanNumeral[i+1]]) {
      result += DIGIT_VALUES[romanNumeral[i]] + DIGIT_VALUES[romanNumeral[i+1]]
    } else if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]) {
      result += DIGIT_VALUES[romanNumeral[i+1]] - DIGIT_VALUES[romanNumeral[i]]
    }
  }
  return result;
};

console.log(translateRomanNumeral("IV"))

/*
I- string
O- number
E- invalid input (not a string, not roman numeral letters)
J- to turn a string of roman numeral letters into the number they represent
// loop through string 
  // check if next element's value is larger than this one's
    // if it is, subract this one's value from next one's value 
    // if it is not, add the values together
*/