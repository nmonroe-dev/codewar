/*
Given an array of numbers (both positive and negative), move all the negative numbers to the front while maintaining their relative order.
The relative order of positive numbers should also remain the same.
Modify the array in place.
*/


function moveNegativesToFront(array) {

    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            let neg = array[i];


            for(let j = i; j > pointer; j--){
                array[j] = array[j-1]
            }

            array[pointer] = neg;
            pointer++
        }
    }
    return array;
}

console.log(moveNegativesToFront([3, -2, 5, -7, 8, -1]))