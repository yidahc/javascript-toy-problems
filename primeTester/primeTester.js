/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  let x = 2;
  while (x < n) {
    if (n % x === 0) {
      return false 
    } else {
      x ++
    }
  }
  return true
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */


 /*
I- number
O- boolean
loop from 1 to n
  divide n by number being looped
  if there is no remainder, return false
  else, continue
return true
 */