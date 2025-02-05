// Move All Zeroes to the End of an Array

//Write a function that moves all 0s in an array to the end, while keeping the order of the other numbers the same.

// You must do this in-place (modify the original array, not create a new one).
// You must maintain the order of non-zero elements.



function moveZeroes(array){
    if(array.length === 0) return "Array is empty"

    let start = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            array[start] = array[i]
            start++
        }
    }

    for(let i = start; i < array.length; i++){
        array[i] = 0;
    }
    return array;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));