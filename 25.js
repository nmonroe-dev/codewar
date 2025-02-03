// check if a target is in a array if so return true 


function check(array, target){
    if(array.length === 0) {
        return "Array is empty";
    }

    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return true;
        }
    }

    return "Target was not found in the array "
}

console.log(check(["Nathan","Nick","Dog","Cat"],"Buzz"));