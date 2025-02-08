//Given an array of numbers, move all even numbers to the end while keeping the order of both odd and even numbers the same.
//Modify the array in place and return it.



function moveEvensToEnd(array){
    if(array.length === 0) return "Array is empty";

    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            let oddNumber = array[i];


            for(let j = i; j > pointer; j--){
                array[j] = array[j-1];
            }

            array[pointer] = oddNumber;
            pointer ++
        }
    }
    return array
}


console.log(moveEvensToEnd([2, 4, 6, 1, 3, 5]))
console.log(moveEvensToEnd([7, 8, 5, 6, 3, 2]))

