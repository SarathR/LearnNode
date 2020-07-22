const primes = [2];

function isPrime(number){
  return !primes.some((x) => number % x === 0);
}

function generate(n){
  var start = primes[0];
  while(primes.length != n){
    let current = ++start;
    if(isPrime(current))
      primes.push(current);
  }
}
generate(10000);
console.log(primes.reduce((accum, x) => accum + x + ' ', ''));

