// Move all 0s in an array to the end (keeping order).

function move(array){
    if(array.length === 0) return "Array is empty";

    let start = 0
   for(let i = 0; i < array.length; i++){
    if(array[i] !== 0){
        array[start] = array[i];
        start++
    }
   }
   for(let i = start; i < array.length; i++){
    array[i] = 0
   }
    
    return array;

}
console.log(move([0,0,0,1,2,3]))