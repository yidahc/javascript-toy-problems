/**
 * Write a function that accepts a number `n` as its input and returns a boolean
 * value representing whether or not `n` is a power of 2.
 *
 * Example:
 *
 * isPowerOfTwo(32) === true
 *
 * If your answer is iterative, try solving it using recursion (and vice versa).
 * Once you've solved the problem both ways, see if you can devise a clever way
 * of solving the problem using bitwise operators.
 */

var isPowerOfTwo = function(n) {
  if (typeof n !== "number") {
    return false
  } else {
  return n == 1 ? true : (n < 1 ? false : isPowerOfTwo(n/2));
  }
};

/*
I- number
O- boolean
E- not a number, not greater than 2
P- to determine whether or not a number is a power of 2
E- check if divided by 2 over and over again it equals 1 at one point
// check for edge cases
  // set base case for when number equals 1 or less
    // divide number by 2 recursively
*/