const palindromes = function (a) {
  const char = /[!.,\s]/g;
  const sentence = a.replaceAll(char, '').toLowerCase();

  const reverseArray = sentence.split('').reverse().join().replaceAll(char, '');

  return sentence === reverseArray ? true : false;
}


// Do not edit below this line
module.exports = palindromes;
