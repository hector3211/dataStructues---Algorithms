// function spits our a reverse value
function reverse(string) {
  // create stack
  let stack = [];
  // for every letter the string has we push to our stack
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  // create an empty string to hold the reverse value
  let reverseString = "";
  while (stack.length > 0) {
    // we remove those characters from the head of the stack
    // then we start adding them to our empty string holder
    reverseString += stack.pop();
  }
  return reverseString;
}

console.log(reverse("hector"));
// end result should be "rotceh"
