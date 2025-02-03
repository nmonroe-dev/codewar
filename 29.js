//Write a function to reverse an array in place without using any built-in array methods.


function reverseArray(array){
    if(array.length === 0){
        return "Array is empty"
    }

    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverseArray([1,2,3,4,5]))