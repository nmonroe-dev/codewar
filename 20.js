function check(array){
    if(array.length < 2){
        return "Array needs 2 or more elements"
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
        }
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] > smallest && array[i] < secondSmallest){
            secondSmallest = array[i];
        }
    }
    return secondSmallest
}

console.log(check([1, 5, -17, -20, 10])); // Output: -17
console.log(check([10])); // Output: "Array needs more than 2 elements"
console.log(check([5, 5, 5])); // Output: "No second smallest number found"
console.log(check([-5, 0, -10, -1])); // Output: -5
