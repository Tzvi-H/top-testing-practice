export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
  let reversed = "";
  for (const letter of string) {
    reversed = letter + reversed;
  }
  return reversed;
};

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export const caesarCipher = (word) => {
  let result = "";
  for (const char of word) {
    if (isUpperCaseLetter(char)) {
      const root = char.charCodeAt() - 65;
      const newRoot = (root + 13) % 26;
      result += String.fromCharCode(65 + newRoot);
    } else if (isLowerCaseLetter(char)) {
      const root = char.charCodeAt() - 97;
      const newRoot = (root + 13) % 26;
      result += String.fromCharCode(97 + newRoot);
    } else {
      result += char;
    }
  }
  return result;
};

const isUpperCaseLetter = (char) =>
  char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
const isLowerCaseLetter = (char) =>
  char.charCodeAt() >= 97 && char.charCodeAt() <= 122;

export const analyzeArray = (array) => {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};
