// as per me obj is a key value pair variable stored in curly braces with unique key 
// Object.create() creates signle ton when we create using constructor

// here we have not used double quotes around the name by default
                      // system consider this as "name" <- like this

const mySymbol = Symbol("mykey")                      
const jsUser ={
    "name":"Hitesh" ,
    "age":18,
    "location":"jaipur",
    "email":"aditya123905@gmail.com",
    "isLoggedin":false,
    "lastLogindays":["Monday","Saturday"] ,
    [mySymbol] : "symbolkey",  
}

console.log("Ordinary way to access the object is like",jsUser.location); 
 // when we use  (.) we dont have to add "" quotes

console.log("Good way ",jsUser["location"],jsUser["lastLogindays"],jsUser["isLoggedin"]);
console.log(jsUser[mySymbol]);

 
// why using sq brackets to access object key data suppose we have a key like full space name no way to access it using .
// so try to use  like  [] this always

console.log(jsUser["email"]);

                                                                      
jsUser["email"] = "aditya123.com"

console.log(jsUser["email"]);         // updating 
jsUser["newobj"] = "hey im new obj"   // adding 

console.log("before");

console.log(jsUser);

console.log("after");

delete jsUser["newobj"]

console.log(jsUser);

// how to frezee the object element like making it freeze immutable when someone change 
// the change wouldn't reflect 

Object.freeze(jsUser)    // as u can see here i have freezed the object now no one can  change it

jsUser["email"] = "phewphew.com"

console.log(jsUser["email"]);

// adding method in object can be use full in many way suppose someone gave u have all sub marks 
// and now you want to calculate those marks so instead of getting all those marks and summing
// up just create the key total and inside it as it's data of total

let subMarks = {     // this kind of thing can be used as productive way at production level
    "maths":55,
    "english":60,
    "science":81,
    "total": function(){
        console.log("hey holla luea");
        
        let total = this.english+this.maths+this.science  // when referencing same obj inside the obj this. is used 
        return total
    }
}

console.log(subMarks["maths"],subMarks["total"]());   // so previously i was calling it without () <-  important
console.log(subMarks.total());

