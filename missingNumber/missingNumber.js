/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function(array) {
  let sum = (Math.pow(100, 2) + 100) / 2;
  for (var i in array) {
    sum -= array[i]
  }
  return sum;
};

/**
 * Here's a helpful array with every number between 1 and 100000, excluding one
 * random number.
 * 
 *  I- array of numbers
 *  O- number that is missing from array
 *  // sum all numbers from 1 to 100,000, store to variable
 *  sum = (n^2 + n)/2
 *  // sum all numbers in input array, compare with stored variable
 *
var testArray = _.shuffle(_.range(100000)).slice(1);
