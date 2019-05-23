/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
//input: string
//output: first last index of run in array
//constraints: 0
//edgecases: return first run if more than one are equal
var longestRun = function (string) {
  var max = [0,0];
  var current = [0,0];
  for (var i = 1; i < string.length; i++){
    if (string[i-1] === string[i]) {
      current [1] = i
      if (current[1] - current[0] > max[1] - max[0]) {
        max = current
      }
    } else {
      current = [i, i];
    } 
  }
  return max;
}
  
  
  //check if input is string
  if(typeof string !== 'string') {
    return 'Not A String!'
  }
  //create result 
  let result = []; 
  //create placeholder object for char count
  let charObj = {};
  //create counter array [0, character]
  let count = {
    A: 0
  };
  //iterate string
  for (let i = 0; i < string.length; i++) {
  //check if string[i] exists in object
    if(charObj.hasOwnProperty(string[i])) {
      //if it does increase count
      charObj[string[i]]++;
    } else {
      //else assign property with a value of 1 
      charObj[string[i]] = 1;
    }
      

      
  }
  //iterate object 
  for (let key in charObj) {
    //find longest character
    if(charObj[key] > count['A']){
      count['A'] = charObj[key]
      console.log(count)
    }
  }
   
  //iterate string
 
   //check lastindexOf 
   
    //push to array

  //return result array  
};
console.log(longestRun('aabbbc'))
// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
; };
