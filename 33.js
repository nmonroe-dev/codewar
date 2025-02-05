function mergeSortedArrays(ar1, ar2){
    if(ar1.length === 0 && ar2.length === 0) return "Both are empty"
    if(ar1.length === 0) return ar2;
    if(ar2.length === 0) return ar1;
    


    let pointer1 = 0;
    let pointer2 = 0;
    let newArray = [];
    while(pointer1 < ar1.length && pointer2 < ar2.length){
        if(ar1[pointer1] < ar2[pointer2]){
            newArray.push(ar1[pointer1])
            pointer1 ++;
        }else{
            newArray.push(ar2[pointer2])
             pointer2 ++;
        }
        
       
    }
    while(pointer1 < ar1.length){
        newArray.push(ar1[pointer1])
        pointer1 ++
    }
    while(pointer2 < ar2.lenght){
        newArray.push(ar2[pointer2])
        pointer2 ++
    }

    return newArray
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([], [1, 5, 7, 12]));
// Output: [0, 1, 4, 5, 7, 10, 12]
console.log(mergeSortedArrays([], []));
// Output: "Both arrays are empty"
