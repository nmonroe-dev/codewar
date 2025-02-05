//Find the second smallest number in an array.

function find(array){
    if(array.length < 2) return "Array does not meet requirements ";

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            secondSmallest = smallest
            smallest = array[i]
        }else if(array[i] < secondSmallest && array[i] !== smallest){
            secondSmallest = array[i];
        }
        
        
        
    }
    if(secondSmallest === Infinity) return "no Second smallest"
    
    return secondSmallest
}

console.log(find([30,5,0,2]));
console.log(find([]));
console.log(find([5,5,5,5]));
console.log(find([18,17,200]))

// got stuck for a sec but got it working with out checking my notes