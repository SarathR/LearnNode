//=> Arrow function
const add = (a ,b) => a + b;
console.log(add.toString()); //(a ,b) => a + b  
console.log(add.length); //2
console.log(add.name); //add

//function
function square(a){
  return a * a;
}

console.log(square.toString()); //function square(a){
//  return a * a;    
//}
console.log(square.name); //square
console.log(square.length);

square.customProp = 'CustumValue square';
console.log(square.customProp); //CustumValue square

add.customProp = 'CustumValue add';
console.log(add.customProp); //CustumValue add