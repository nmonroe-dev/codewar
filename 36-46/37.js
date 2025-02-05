//Find the smallest number in an array.


function check(array){
    if(array.length === 0) return "Array is empty";

    let smallest = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
        }
    }
    return smallest;
}
console.log(check([1,2,3,4,5,6]));
console.log(check([]));
console.log(check([10,-100,5,22]));
console.log(check([100,5,3]));
console.log(check([5,5,5,5]));