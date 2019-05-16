/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let firstEven; // placeholder for answer
  arr.forEach(element => { // looping through each element in the array
    occurances = 0; // make an arr for each element, to store its occurances
    arr.forEach(el => { // compare the other elements in the array to the current
      if(element === el) { // element you are looping through in line 16
        occurances++; // push element into occurances to keep track of it
      }
    });
    if (!firstEven) { // if firstEven is still undefined (no even occurance has been found yet)
      if (occurances % 2 === 0) { // check if occurances for this element (in line 16) is even
        firstEven = element; // if occurances for this element is even, make it the firstEven and return it
        return firstEven;
      }
    }
  });
  if (firstEven) { // if firstEven is defined, return it
    return firstEven;
  } else { // else return null
    return null;
  }
};


/*
I- array
O- 1 element in array
E - null if no even-occurrence, 
J - to find the first element in array that appears an even number of times
E - count number of times the elements occur in an array, and return the first one whose number is even
// loop through array
  // create variable to count amount of time each element appears
  // if amount is even, return that element
*/