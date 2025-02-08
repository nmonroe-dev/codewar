// Givein a array move all 0s in the array to the front


function move(array){
    if(array.length ===0) return "Array is empty";

    let start = array.length -1;

    for(let i = array.length -1; i >= 0; i--){
        if(array[i] !== 0){
            array[start] = array[i];
            start --;
        }
    }
    for(let i = start; start >=0; i--){
        array[i] = 0;
        start --;
    }

    return array;
}

console.log(move([1,2,3,0,0,0]));
console.log(move([0,1,2,0,3,4,0,5,0,6,0]));
console.log(move([]));