/*
 Remove Duplicates from a Sorted Array (Easy/Medium)
 Modify the array in place so that each element appears only once. Return the new length.
Input: [1, 1, 2, 2, 3, 4, 4, 5]
 Output: [1, 2, 3, 4, 5, _, _, _]
*/


function move(array){

    let start = 1;

    for(let i = 0; i < array.length; i++){
        if(array[i] !== array[start - 1]){
            array[start] = array[i]
            start++
        }
    }
    for(let i = start; i < array.length; i++){
        array[i] = "_";
    }

    return array;
}

console.log(move([1,1,1,2,3,3,3,4,5,5]))