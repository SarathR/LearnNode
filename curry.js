const curry = (fn, ...rest) => (..._rest) => fn(...rest, ..._rest);

const add = (a, b) => a + b;

const add1 = curry(add, 1); //Partially applied with parameter a=1
const add2 = curry(add, 2); //Partially applied with parameter a=2
console.log(add1(3)); //4  a=1 b=3 
console.log(add2(3)); //5  a=2 b=3

console.log(add(1, 2)); //3
console.log(add.call(null, 1, 2)); //3