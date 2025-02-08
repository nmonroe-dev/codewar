// Giveing a array move all 0s to end of the array 


function move(array){
    if(array.length === 0) return "Array is empty";

    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            array[pointer] = array[i];
            pointer ++
        }
    }
    for(let i = pointer; i < array.length; i++){
        array[i] = 0;
        pointer ++
    }

    return array;
}

console.log(move([0,0,0,1,2,3]));
console.log(move([1,2,0,3,0,0,4]));
console.log(move([]));