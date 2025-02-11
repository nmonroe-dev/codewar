//Modify the array in place so that each element appears only once. Return the new length.
//Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5, _, _, _]








function modify(array){

    let pointer = 1;

    for(let i = 0; i < array.length; i++){
        if(array[i] !== array[pointer -1]){
            array[pointer] = array[i];
            pointer ++;
        }
    }
    for(let i = pointer; i < array.length; i++){
        array[i] = "_";
    }

    return array;
}

console.log(modify([1,1,2,2,3,4,4,5]));