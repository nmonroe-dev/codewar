// Find the largest number in a array


function check(array) {
    if(array.length === 0){
        return "Array has no elements";
    }
    let largest = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
};

console.log(check([2,10,-7,18,4 -100]));