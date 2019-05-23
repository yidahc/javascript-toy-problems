/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
/* START SOLUTION */
// Create a convenience function that sorts arrays ascending numerically

/* END SOLUTION */

var sortNumbers = function (array) {
  let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i++) {
      if (array[i-1] > array[i]) {
        done = false;
        [array[i], array[i-1]] = [array[i-1], array[i]]
      }
    }
  }
  return array
}

var largestProductOfThree = function(array) {
  sortNumbers(array);
  return array[array.length-1] * array[array.length-2] * array[array.length-3]
};


/*
I- array
O- number
E- not a number
J- to find the 3 numbers that multiplied by each other equal to the largest ammount
// set placeholder array to first index, second and third
// loop through array, starting at 4th
  // loop through placeholder array
    // check if this number (from input array) is larger than any number in placeholder array
      // if it is, replace that placeholder array number with input array number
// return placeholder array multiplied by each other
*/

/*
// Create a convenience function that sorts arrays ascending numerically
// loop through input array, starting at 1
  // check if it is larger than the one before it
    // if it is not, switch with that element
// run loop again, until fully sorted (using a while loop to determine when you are done looping)

// use sorting function
// return the last three numbers multiplied by each other
*/