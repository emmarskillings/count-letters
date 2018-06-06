function countLetters(string) {
  var countedLetters = {};
  var string = string.split(" ").join("");

  for (var i = 0; i < string.length; i++) {
    var singleLetter = string[i];
    if (singleLetter in countedLetters) {
      countedLetters[singleLetter] += 1;
    }
    else {
      countedLetters[singleLetter] = 1;
    }
  }
  return countedLetters;
}

console.log(countLetters("Hello World"));