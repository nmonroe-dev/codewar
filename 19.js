// function that takes returns the smallest number and index 
// start with function block
//initallize a variable to sote the index and number
// loop the arry
// compare each number
// if number is found return bacck to variable

function check(array){
    let smallest = array[0];
    let index = 0;
    if(array.length === 0){
        return "Array is empty";
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i]
            index = i;
        }
    }
    return {index, smallest};
}

console.log(check([]));
console.log(check([10]));
console.log(check([5,2,-3,7]));
console.log(check([-10, -20, -5]));