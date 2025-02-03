// finding the sum off of a array 


function arraySum(array){
    if(array.length === 0){
        return "Array is empty"
    }
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(arraySum([5,5,5]));