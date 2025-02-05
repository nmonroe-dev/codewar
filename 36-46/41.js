//Find the second largest number in an array.

function find(array){
    if(array.length < 2) return "Array does not meet requirements"

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            secondLargest = largest;
            largest = array[i];
        }else if(array[i] > secondLargest && array[i] !== largest){
            secondLargest = array[i];
        }
        



        
    }
    if(secondLargest === -Infinity) return "None"
    
    return secondLargest;
}

console.log(find([30,5,0,2]));
console.log(find([]));
console.log(find([5,5,5,5]));
console.log(find([18,17,200]))