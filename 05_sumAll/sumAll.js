const sumAll = function(a,b) {
  if (a - b > 0) {
  const x = ((a-b)+1)*(a+b)/2;
  return x;} else {  
    const x = ((b-a)+1)*(a+b)/2;
    return x;}
};

// Do not edit below this line
module.exports = sumAll;
