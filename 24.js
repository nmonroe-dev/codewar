// find the index of a traget in a array 


function find (array, traget){
    if(array.length === 0){
        return "Array is empty";
    }

    for(let i = 0; i < array.length; i++){
        if(array[i] === traget){
            return i;
        }
    }
    return -1;
}

console.log(find([],6));