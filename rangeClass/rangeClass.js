/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false

 start - 2
 end - 10
 step - 3

I- Numbers (3)
O- range of numbers

(10, -12, 5) == (10, -10, 5) => 10, 5, 0, -5, -10

(30, 100, 10) => 30, 40, 50, 60, 70, 80, 90, 10

(100, 30, -10) => 100, 90, 80, 70, 60, 50, 40, 30

(30, 100, -10) => 30



50-(-50)
50+50

-50-(-50)
-50+50
50-50

5-(-2)
5+2
-10-(-10)
-10+10
20-(-5)
20+5

(0, 5) => 0, 1, 2, 3, 4, 5

(3, 10, 2) => 3, 5, 7, 9

0

(80, 180, 20) => 80, 100, 120, 140, 160, 180

(5) => 5

var myRange = new Range(3, 12, 3)
myRange.size() = 4

if there is an end:
Math.floor(Math.abs((end-start)/step)))+1
if there is no end
this.size = 1
*/
 

var Range = function(start, end, step) {
  if (arguments.length === 0) {
    return null
  }
  this.start = start;
  if (typeof end === "number"){
    this.end = end;
  } else {
    this.end = start
  }
  this.step = step || (this.start < this.end) ? 1 : -1;
};

// if (this.step === undefined)
// this.step = (this.start < this.end) ? 1 : -1

Range.prototype.size = function () {
  if (this.end) {
   return Math.floor(Math.abs(this.end-this.start)/this.step) +1
 } else {
   return 1
 }
};


Range.prototype.each = function (callback) {
  if (this.start < this.end) {
    for (var i = this.start; i < this.end; i += this.step) {
      callback(i)
    }
  } if (this.start > this.end) {
      for (var i = this.start; i > this.end; i -= Math.abs(this.step)){
        callback(i)
      }
    } 
};

Range.prototype.includes = function (val) {
  /* START SOLUTION */
  /* END SOLUTION */
};


/*


*/