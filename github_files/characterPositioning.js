function characterPositioning(str) {
  //initialize empty object
  let uniqueChars = {};

  //loop through input string
  for (i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar == " ") {
      continue;
    }
    if (uniqueChars[currentChar]) {
      uniqueChars[currentChar].push(i);
    }
    else {
      uniqueChars[currentChar] = [];
      uniqueChars[currentChar].push(i);
    }
  }
  return uniqueChars;
}

console.log(characterPositioning("abcdabcd"));