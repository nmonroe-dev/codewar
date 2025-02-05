//  Check if a target exists in an array (return true or false).

function check(array, target){
    if(array.length === 0) return "Array is empty";

    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return true;
        }
    }
    return false
}

console.log(check([1,4,10,5], 10));
console.log(check(["Nathan","Badass","Blue"], "Badass"));
console.log(check(["one",2,3,"Cool"],"Black"));
console.log(check([]));