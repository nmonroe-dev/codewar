// find the index of the 2 elents that = target in a array;



function find(array, target){
    if(array.length === 0) return "Empty Array";


    let start = 0;
    let end = array.length - 1;



    while(start < end) {
        let sum = array[start] + array[end];

        if(sum === target){
            return [start, end];
        }else if(sum < target){
            start ++;
        }else{
            end --;
        }
    }
    return "No Match";
}


console.log(find([1, 2, 3, 4, 6], 6)); //  Output: [1, 3] (2 + 4 = 6)
console.log(find([2, 5, 9, 11], 14));  //  Output: [1, 2] (5 + 9 = 14)
console.log(find([1, 3, 5, 7], 10));   //  Output: [2, 3] (5 + 7 = 10)
console.log(find([1, 2, 3, 4], 20));   // Output: "No match found"
console.log(find([])); 