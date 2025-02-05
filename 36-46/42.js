//Reverse an array in place using two pointers.


function reverseArray(array){
    if(array.length === 0) return "Array is empty";


    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        let temp = array[start];
        array[start] = array[end]
        array[end] = temp;
        start ++
        end --
    }

    return array;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([]));