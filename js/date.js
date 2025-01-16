let date = new Date()

console.log(date.toString(),date.getDate(),date.getDay(),date.toTimeString().slice(0,9));
console.log(date.toLocaleDateString(),date.toLocaleString())

let ownDate = new Date(2025,0,13,19,2)  // month start from 0
let styledate = new Date("01-14-2025")  // month start from 1


console.log(ownDate.toLocaleString(),ownDate.getDate());
console.log(styledate);


let mytimeStamp = Date.now()
// console.log(mytimeStamp.);


