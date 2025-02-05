function mergeSortedArrays(array1, array2){
    if(array1.length === 0) return array2;
    if(array2.length === 0) return array1;

    let start1 = 0;
    let start2 = 0;

    let newArry = []

    while(start1 < array1.length && start2 < array2.length){
        if(array1[start1] < array2[start2]){
            newArry.push(array1[start1])
            start1 ++
        }else{
            newArry.push(array2[start2])
            start2 ++
        }
    }

    while(start1 < array1.length){
        newArry.push(array1[start1])
        start1 ++
    }

    while( start2 < array2.length){
        newArry.push(array2[start2])
        start2 ++
    }

    return newArry;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]

//console.log(mergeSortedArrays([0, 4, 10], [1, 5, 7, 12]));
// Output: [0, 1, 4, 5, 7, 10, 12]

//console.log(mergeSortedArrays([], []));
// Output: "Both arrays are empty"


    


