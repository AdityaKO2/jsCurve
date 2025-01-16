const balance = new Number(400000000)
score = 400
score2 =  score

console.log(score2.toString().length);

console.log(balance.toString() ,  score);


v = 123.8966

console.log(v.toPrecision(5));

// procing local using toLocalString

console.log(balance.toLocaleString('en-IN'));
console.log(Math.max(balance,score));

// const random_digits = new Number((Math.random()*10000)+1)
// otp  = Math.ceil(random_digits)

// console.log(((Math.random()*10)+1),otp)

//4 digit otp using random

// let digts = '0123456789'
// otp = ''
// for (let index = 0; index < 6; index++) {
//      otp += digts[Math.floor(Math.random()*10)];
    
// }

// console.log(otp);

v = Math.floor(Math.random()*900000)+100000
console.log(v);



