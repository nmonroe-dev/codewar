// Merge two sorted arrays into one (keeping order).

function merge(array1, array2){
    if(array1.length === 0) return array2;
    if(array2.length === 0) return array1;
    
    array1.sort((a,b)=> a- b);
    array2.sort((a,b) => a-b);

    let start1 = 0;
    let start2 = 0;

    let newArray = [];

    while(start1 < array1.length && start2 < array2.length){
        if(array1[start1] < array2[start2]){
            newArray.push(array1[start1]);
            start1++;
        }else{
            newArray.push(array2[start2]);
            start2++
        }
    }

    while(start1 < array1.length){
        newArray.push(array1[start1])
        start1++
    }
    while(start2 < array2.length){
        newArray.push(array2[start2]);
        start2++
    }

 

    return newArray;
}


console.log(merge([2,4,6], [1,3,5]));
console.log(merge([1,4,5],[2,6,3,7,8]));
console.log(merge([],[99,100,101]));
console.log(merge([5,5,5],[5,5,5]));

