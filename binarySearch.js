// this function takes in a list and a choosen value
// returns false but if function searches and collects choosen number
// wiil return true
function binarySearchFunction(haystack, needle) {
  let lo = 0;
  // [1,2,3,4,5,6,7,8,9,10]
  let hi = haystack.length; // = 10
  while (lo < hi) {
    const m = Math.floor(lo + (hi - lo) / 2); // = 5 from our list
    const v = haystack[m]; // this will be index 5 , number 6
    if (v === needle) {
      // if index 5,number 6 = needle return true
      return console.log(true);
    } else if (v > needle) {
      // if number 6 Greater than needle
      hi = m; // we 1/2 our search and hi becomes index 5 instead of 10
    } else {
      // if number 6 less than needle
      lo = m + 1; // our lo variable becomes index 6,number 7
    }
  }
  return console.log(false);
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let choosenNumber = 8;
binarySearchFunction(list, choosenNumber);
