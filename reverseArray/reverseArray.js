/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array (ie, without modifying the original array.)
 * Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Reverse in-place (don't use an extra array).
 *
 *
 * Here's a sample input to get you going:
 *
 *   reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0] // should equal => 'bob'
 */

var reverseArray = function(array) {
  //if array.length is an even number(8), then loop stops at index 4 
  //which is 1 index too far (would double swap), so we do -1 
  //and use math.floor for any decimals (odd length array)
  for (var i=0; i <= (Math.floor((array.length-1) / 2)); i++) {
    [array[i], array[array.length-1-i]] = [array[array.length-1-i], array[i]]
  }
  return array
};

/*
input: array
output: array(same, but reversed)
without new array:
//loop through array (starting at beginning, ending at the middle)
  // swap that element with its corresponding last element (first with last, etc etc)
  // using es6, you can replace the elements using desctructuring assignment
  // otherwise it would look like so:
    let elm = array[i]
    array[i]=array[array.length-1-i]
    array[array.length-1-i]=elm
// return array

with new array:
//create placeholder array
  // loop backwards through array
  // push each element into placeholder array
// return placeholder array
*/

var reverseArray = function(array) {
   newArr = [];
   for (var i=array.length-1; i>=0; i--){
      newArr.push(array[i])
  }
  return newArr
}