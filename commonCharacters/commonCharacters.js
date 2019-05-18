/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var commonCharacters = function(string1, string2) {
let obj = {};
let result = "";
if (typeof string1 !== "string" || typeof string2 !== "string") {
  return result
}

};

/*
I- 2 strings
O- 1 string
E- duplicate characters, capitals, not strings
J- to find which characters appear in both strings, and in what order(order according to first string)
// check that both are strings
// create placeholder object
// assign new variables to both strings for lowercase
// loop through first string
  // loop through second string
    // check if character in first string matches any characters in second string
      // if it does, check if that character exists in the placeholder object
        // if it does not, create that key in the object and set it to true
// create placeholder string for result
// loop through object
  // push each key into placeholder string
// return placeholder string for result
*/