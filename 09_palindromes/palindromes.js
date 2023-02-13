const palindromes = function (a) {
  const char = /.|,/g;
  console.log(a.replaceAll(char, ''));
}
  palindromes('the.dog, like');


// Do not edit below this line
module.exports = palindromes;
