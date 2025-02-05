// Sum all numbers in an array backward using two pointers.

function sum(array){
    if(array.length === 0) return "Array is empty"

    let sum = 0;
    let start = 0;
    let end = array.length -1;

    while(start <= end){
        sum += array[end];
        end --;
    }

    return sum;
};


console.log(sum([5,5,10])) // output 20
console.log(sum([])) // output Array is empty 