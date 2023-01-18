const sumAll = function (a, b) {
  let n = typeof 0;
  if (a < 0 || b < 0 || (typeof a != n) || (typeof b != n) || isNaN(a) || isNaN(b)) {
    return "ERROR";
  } else if (a - b > 0) {
    const x = ((a - b) + 1) * (a + b) / 2;
    return x;
  } else {
    const x = ((b - a) + 1) * (a + b) / 2;
    return x;
  }
};

// Do not edit below this line
module.exports = sumAll;
