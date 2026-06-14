function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}


function caesarCipher(plaintext, key) {
  let result = "";
  for (let i = 0; i < plaintext.length; i++) {
    if (isLetter(plaintext[i])) {
      let sub = 0;
      if (plaintext[i] == plaintext[i].toLowerCase()) {
        sub = 97;
      } else {
        sub = 65;
      }
        // lower case condition
      let char = plaintext.charCodeAt(i) - sub;
      let newChar = ((char + key) % 26) + sub;
      let letter = String.fromCharCode(newChar);
      result += letter;
    } else {
      result += plaintext[i];
    }
  }
  return result;
}


export {caesarCipher}