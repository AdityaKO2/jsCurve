function flatten_Array(arr){
    result = []

    for (let item of arr) {
        if (Array.isArray(item)){
            result = result.concat(flatten_Array(item))

        }
        else{
            result.push(item)
        }
        
    }

    return result
}






nestedArray = [1,2,3,[1,3,4,[3,4,5]],5,5,1,9,[10,11]]

copyArray = JSON.parse(JSON.stringify(nestedArray))

console.log(`Before Fatten Array : ${JSON.stringify(copyArray)}`);
console.log(`After Fatten Array : ${nestedArray}`);

newNestedArray = []

for (const element of flatten_Array(nestedArray)) {
    newNestedArray.push(Number(element))
    
}

console.log(newNestedArray);



