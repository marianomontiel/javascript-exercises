//Leap years are divisible by 4. now, if the year is divisible by 100 it must also be divisible by 400 otherwise it is not a leap year
const leapYears = function (a) {
  if ((a % 4 === 0 && a % 100 === 0 && a % 400 === 0) || (a % 100 != 0 && a % 4 === 0)) {
    return true;
  } else { return false; };
};

// Do not edit below this line
module.exports = leapYears;
