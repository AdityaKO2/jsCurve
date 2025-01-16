// function keyword is like def in python which is used ti declare the functions in javascript
function sayMyname(){
   console.log("Aditya");
   
}

// sayMyname()

function addTwoNumbers(num1,num2){   // when we declare the var while creating the function it is known as parameters
    console.log(num1+num2);
    return num1+num2
    
}


addTwoNumbers(3,7) // when we call the function the value which is placed or pass inside the circle bracket is known as arguments

const add10and11 = addTwoNumbers(10,11)   

console.log(add10and11);


// whenever we store the function inside the var the function should always return the val 
// otherwise the it will the function as undefined


function userLoggedIn(username){
    if(username === undefined){  // if(!username)
         console.log("please enter the username");
         return " "
         
    }
    return `Hey ${username} you have been logged successfully`
}


console.log(userLoggedIn());


// keywords and arguments ... -> rest or operator


 
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(2,2,33,44,22,66,77,33,44,2222,999));

user = {
    username:"Aditya",
    prices:777
}

function userPrice(anyobject){
    return `${anyobject.username} -- ${anyobject.prices}`
}

console.log(userPrice(user));
