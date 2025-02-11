function moveOddsToFront(array){
    if(array.length === 0) return "Array is empty";

    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            let oddNumber = array[i];

            for(let j = i; j > pointer; j--){
                array[j] = array[j - 1]
            }
            array[pointer] = oddNumber;
            pointer ++;
        }
    }
    return array;
}

console.log(moveOddsToFront([1, 2, 3, 4, 5])); // Output: [1, 3, 5, 2, 4]
