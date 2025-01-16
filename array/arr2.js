let myHeros = new Array(1,2,3,4,5)


slice_arr = myHeros.slice(1,3) // create a new a arr with the range of parameters wont affect the org array
                               // dont include last element
                               
console.log(slice_arr);

console.log(myHeros);



splice_arr =  myHeros.splice(1,3)   // this will make sub array invludeing the last index also of function
                                    // it will remove those parameters range from the real array and 
                                    // make a new array

console.log(myHeros,splice_arr);

                                    


 


let newArr = myHeros.join("--")  // converts the array into string  and what ever string u pass 
                                 // in join will gonnna add between the elements



console.log(newArr,typeof newArr);


