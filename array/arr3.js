newArray = [4,3,5,1,2,3]

console.log(newArray.sort());  // sorts the array


marvel = ["thor","ironman","spiderman"]

dc = ["superman","batman","aqauman"]


// marvel.push(dc)   // this will add the whole list into the marvel wont merge to merge 
                  //  we have to use concat by assign the concat operation in new arr



// console.log(marvel);



all_heros = marvel.concat(dc)

console.log(all_heros);


// another way spread method

all_heros_1 = [...marvel,...dc]

console.log(all_heros_1);

x  = [1,2,3,[1,3,4,[3,4,5]],5,5,1,9,[10,11]]
y = x.flat(Infinity)
console.log(y);



//Array function converting dt in array

console.log(Array.from("Aditya"));
console.log(Array.from(Object.keys({name:"Aditya"})));   // --> based on keys
console.log(Array.from(Object.values({name:"Aditya"})));  // --> based on values
                                            // here we have to pass the key or value like
                                            // on which basis the array u want on the basis of 
                                            // key or value we will use Object which find the key and value

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1,score2,score3));   // creating the array on the basiss of diff varialbles

 

