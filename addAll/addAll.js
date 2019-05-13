/*Add up all numbers in the array.
[2,7,8,3,1,4] Returns 25*/



var add = function(array, total) {
  // Your code here.
  /* START SOLUTION */
  var total = 0;
 for (var i = 0; i < array.length; i++) {
   total+=array[i];
 }
 return total;
  /* END SOLUTION */
};
