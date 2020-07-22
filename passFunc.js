function add(a){
  if(arguments.length > 1){
    return add(a)(arguments[1]);
  }
  return function(b){
    return a + b;
  }
}

const add1 = add(1); //Partially applied with parameter a=1
const add2 = add(2); //Partially applied with parameter a=2
console.log(add1(3)); //4  a=1 b=3 
console.log(add2(3)); //5  a=2 b=3
console.log(add(1)(2)); //3 a=1,b=2
console.log(add(1,2)); //3 a=1,b=2
console.log(add.call(null, 1).call(null,2)); //3
console.log(add(1, 2)); //3
console.log(add.call(null, 1, 2)); //3
//
console.log(add.call(null, 1).call(null,2)); //3const a = add.call(1);
//console.log(a.call(2));
//console.log(add);

//console.log(add.call(1,2));
/*

const add = (a, b) => a + b;

const square = a => a * a;

const operate = operator => operand => operator(operand);  

const func1 = operate(square);
const func2 = operate(add1);

console.log(func1(2)); //4
console.log(func2(2)); //3
*/