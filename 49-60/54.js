/* 
Given an array of numbers and a target value, move all numbers smaller than the target to the left side of the array and all numbers greater than or equal to the target to the right side.
The relative order of elements should be preserved.
Modify the array in place and return it.


*/


function partitionArray(array, target) {
    if(array.length === 0) return "Array is empty";

    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] < target){
            let lessThenNumber = array[i];

            for(let j = i; j > pointer; j--){
                array[j] = array[j-1]
            }

            array[pointer] = lessThenNumber;
            pointer ++
        }
    }
    return array;
}

console.log(partitionArray([3, 8, 5, 2, 7, 6, 4], 5)) //[3, 2, 4, 8, 5, 7, 6]
console.log(partitionArray([1, 10, 4, 3, 8, 5, 7], 6)) //[1, 4, 3, 5, 10, 8, 7]
console.log(partitionArray([12, 5, 8, 7, 3, 9, 6, 2], 7)//[5, 3, 6, 2, 12, 8, 7, 9]

)
