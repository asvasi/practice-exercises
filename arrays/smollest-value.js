function min(arr, toReturn) {
  let smallestValue = Math.min.apply(null, arr);
  return toReturn == 'value' ? smallestValue : arr.indexOf(smallestValue);
}

function min(arr, toReturn) {
  return (toReturn == 'value') ? Math.min(...arr) : arr.indexOf( Math.min(...arr) );
}