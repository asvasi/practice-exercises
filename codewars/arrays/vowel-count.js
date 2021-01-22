function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (char of str) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }
  return vowelsCount;
}
