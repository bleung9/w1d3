function countingLetters (str) {
  //split the string based on spaces, then join the array of substrings back together
  newStr = str.split(' ').join('');
  let uniqueChars = {};

  for (i = 0; i < newStr.length; i++) {
    let currentChar = newStr[i];
    if (uniqueChars[currentChar]) {
      uniqueChars[currentChar]++;
    }
    else {
      uniqueChars[currentChar] = 0;
      uniqueChars[currentChar]++;
    }
  }
  return uniqueChars;
}

console.log(countingLetters("abcdabcdefgh"));