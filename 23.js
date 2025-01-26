// find the smallest number in an array


function check(array) {
    if(array.length === 0){
        return "Array has no elements";
    }

    let smallest = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
        }
    }
    return smallest;
}

console.log(check([5,-200, 0, 100, -50, 1]));