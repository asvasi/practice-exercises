

function squareDigits(num){
  return +num
    .toString(10)
    .split('')
    .map(digit => digit ** 2)
    .join('');
}