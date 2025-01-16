let newArray = [1,2,3,4,5,6]

console.log(newArray[5]);  // indexing same as python expect -1 kind of things

let OtherArray = [...newArray]
OtherArray[2]=10
console.log(newArray,OtherArray);

let myHeros = new Array(1,2,3,4,5)
myHeros.push(20)
console.log(myHeros);
// console.log(myHeros.indexOf(3),myHeros.at(myHeros.length-1),myHeros.pop());

lastElement = myHeros.pop() 
console.log(`last element is ${lastElement}`);   // pop return also

myHeros.unshift(100)
console.log(myHeros)  // it add the element at first element but the thing is that it changes all the index of 
                      // of other elements which can complex for larger data set in array


myHeros.shift()   // removes first element

console.log(myHeros);   

// myHeros.fill(0)  // changes all the element with the given parameter in fill function



console.log(myHeros.includes(2));   // return if the element is present in list or not



