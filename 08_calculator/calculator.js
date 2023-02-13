const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function(a) {
const multiplied = a.reduce((total, input) => {return total * input;
}, 1);
    return multiplied;
};

const power = function(a,b) {
let accumulator = a
for (let i = 0, power = b; i<power; i++) {
	accumulator = accumulator * a
}
	return accumulator;
};

const factorial = function(a) {
	let factor = a
	for (let i = 1; i<a; i++){
	factor = factor * (a - i)
		console.log(factor);
	}
	return factor;
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
