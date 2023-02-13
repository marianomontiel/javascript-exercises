const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};
const sum = function(array) {
	const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
return sumWithInitial;
};

const multiply = function(a) {
const multiplied = a.reduce((total, input) => {return total * input;
}, 1);
    return multiplied;
};

const power = function(a,b) {
let accumulator = a
for (let i = 1, power = b; i<power; i++) {
	accumulator = accumulator * a
}
	return accumulator;
};

const factorial = function(a) {
  if (a === 0) {return 1} else {
	let factor = a
	for (let i = 1; i<a; i++){
	factor = factor * (a - i)
	}
	return factor;}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
