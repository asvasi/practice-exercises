// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let stringOfNumbers = numbers.join('');
  let firstPart = stringOfNumbers.slice(0, 3);
  let secondPart = stringOfNumbers.slice(3, 6);
  let thirdPart = stringOfNumbers.slice(-4);
  
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}