const obj = {
  'a': [1,2,3],
  'b': [1,2,3,4]
};

const combine = (a, b) => [...a, ...obj[b]];
console.log(
Object.keys(obj).reduce(combine, [])
);


