const id = Symbol('123')
const anotherid = Symbol('123')


console.log(id == anotherid);
console.log(anotherid.toString());
console.log(typeof(anotherid));


heros = ["lindman","krk"]

function krk(){
    console.log("hello");
    
}
c = {"a":"d"}
f = {...c}
f.a="b"
console.log(c,f);

console.log(`this is my object ${heros}`);


const username = new String("Aditya-c-d");
vv = username.split('-')
console.log(
    username.length,vv,username.small()
);

strinf = "hello, how are you"
console.log(strinf.split('a'),[...strinf],strinf.replace('h','@H'),strinf.substring(3,8));

// replacing multiple h in one log

console.log(strinf.replace(/h/g,"@"));
console.log(username.split("").reverse().join(""))
