// find the second smallest number in an array 


function find(array){
    if(array.length === 0){
        return "Array is empty";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            secondSmallest = smallest;
            smallest = array[i];
        }else if(array[i] < secondSmallest && array[i] !== smallest){
            secondSmallest = array[i]
        }
    }
    if( secondSmallest === Infinity){
        return "No second smallest number"
    }
    return secondSmallest;
}

console.log(find([10,5,15,20]));