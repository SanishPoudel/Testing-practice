function capitalize(letter) {
  let upperLetter = letter.toUpperCase();
  let firstUpperLetter = upperLetter[0];
  let remainingLetter = letter.slice(1);
  let capitalLetter = firstUpperLetter + remainingLetter;
  return capitalLetter;
}

export {capitalize}