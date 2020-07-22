const crypto = require('crypto'); 

const algorithm = 'aes-256-cbc'; 
const iv = crypto.randomBytes(16);

const password = 'mySuperpassword';

const key = crypto.createHash('md5').update(password).digest('hex');

function encrypt(data) {
  var cipher = crypto.createCipheriv(algorithm, key, iv);
  return `${cipher.update(data, 'utf-8', 'hex')}${cipher.final('hex')}`;
}

function decrypt(data) {
  var cipher = crypto.createDecipheriv(algorithm, key, iv);
  return `${cipher.update(data, 'hex', 'utf-8')}${cipher.final('utf-8')}`;
}
  
var mydata = encrypt("Dhruv"); 
console.log(mydata); 
console.log(decrypt(mydata)); 


