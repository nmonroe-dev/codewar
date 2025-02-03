// find the second largest nummber in a array


function find(array) {
    if(array.length === 0){
        return "Array is empty";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < array.lenght; i++){
        if(array[i] > largest){
            secondLargest = largest
            largest = array[i];
        }else if(array[i] > secondLargest && array[i] !== largest){
            secondLargest = array[i];
        }
        
        if(secondLargest === -Infinity){
            return "Array has no second largest"
        }
    }
    return secondLargest;
}