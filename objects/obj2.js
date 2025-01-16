// const tinder = new Object()   sigleton object only one instance of class

// non signleton object 
const tinder = {}
tinder.id = "A1"
tinder.name = "Aditya"
tinder.isloggedin = false

console.log(tinder);


const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Chaudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname,regularUser.fullname.userfullname.firstname,regularUser.fullname.userfullname.lastname);

const {email,fullname:{userfullname:{firstname:fname}}} = regularUser

console.log(email,fname);

// merging objects

obj1 = {1:"a",2:"b"}
obj2 = {3:"c",4:"d"}

// obj3 = {...obj1,...obj2} 
obj3 = Object.assign({},obj1,obj2)  //(target,source)

console.log(obj3);


console.log(`keys of tinder object us ${Object.keys(tinder)} values = ${Object.values(tinder)}`);
console.log(Object.entries(tinder)); // coverts the key value into one list {key1:val1,key2:val2 ...} = [[key1,val1] , [key2,val2] ...],


let date = new Date()

console.log(date.toLocaleDateString() , date.toLocaleTimeString());



const course = {
    coursename:"Js in Hindi",
    price:999,
    courseInstructor:"Hitesh"
}

// now the thing is that suppose i want to write couse.courseInstructor more 10 time
// now i cant always use  couse.courseInstructor  again and again so we will extract and store into var

const {courseInstructor:ins} = course    // destructing values  or destructure

// courseInstructor  name was so huge so minized the name letter using :own_varname

console.log(ins);   // here i have stored the courseInstructor data 
                                 // this technique is much more usefull when we have nested objects


