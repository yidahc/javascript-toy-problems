/*
 * Given two numbers, find all factors of each.
 * Return all of their common factors sorted from highest to lowest.
 *
 * Example 1:
 *  Find all the common factors of 12 and 18.
 *  Factors of 12 are 12, 6, 4, 3, 2, 1
 *  Factors of 18 are 18, 9, 6, 3, 2, 1
 *  The common factors of 12 and 18 are 6, 3, 2, 1
 *  
 * Example 2:
 *  var common = commonFactors(20, 25);
 *  console.log(common); // [5, 1]
 * if commonFactors(25, 20) => commonFactors(20, 25)

 *  [6, 3, 2, 1]
 *
 * /
*/

var commonFactors = function(num1, num2) {
 let results =  [];
  if (num1 > num2) {
    [num1, num2] = [num2, num1]
  } 
  for (var n = num1; n > 0; n-- ) {
    if (num1 % n === 0 && num2 % n === 0) {
      results.push(n)
    }
  }
  return results; 
};



// if (num1 > num2)
// [num1, num2] = [num2, num1]
// for (var n = num1; n > 0; n-- )
// if (num1 % n === 0 && num2 % n === 0)
// results.push(n)