/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let edgeCase = "";
  if (typeof string !== "string") {
    return edgeCase
  }
  for (var i=0; i < string.length; i++) {
    let count = 0;
    for (var e=0; e < string.length; e++) {
      if (string[i] === string[e]) {
        count = count+1;
      }
    }
  if (count === 1) {
    return string[i]
  }
  }
  return edgeCase;
};


/*
I- string
O- character
E- not a string, all characters are repeated, capitals
J- to find the first character in a string that only appears once
// check if input is string
// set placeholder to empty string
// loop through string
  // for each character start a counter
    // loop through string again and check if other characters match this character
      // add to counter if it does 
  // if counter equals 1, return that character
// if placeholder is still empty string, return placeholder
    
*/