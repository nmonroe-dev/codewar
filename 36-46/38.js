//Find the index of a target number in an array.

function check(array, target){
    if(array.length === 0) return "Array is empty";

    let index = null;

    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            index = i;
        }
        
    }
    if(index === null) return "No index for target number"
    return index;
}

console.log(check([1,2,3,4], 2));
console.log(check([5,100,13,80], 80))
console.log(check([]));
console.log(check([2,4,5,6,7], 9));