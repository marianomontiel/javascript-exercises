const fibonacci = function (a) {
    if (a < 0) { return 'OOPS' } else {
        let fiboNum = Array(a.lenght);
        fiboNum[0] = 1;
        fiboNum[1] = 1;
        for (let i = 2; i < a; i++) {
            fiboNum[i] = fiboNum[i - 1] + fiboNum[i - 2];
        }
        const answer = fiboNum[fiboNum.length - 1];
        return answer
    }
};
fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
