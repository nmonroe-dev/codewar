function moveEvensToFront(array){
    if(array.length === 0) return "Array is empty";


    let pointer = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            let evenNumber = array[i];


            for(let j = i; j > pointer; j--){
                array[j] = array[j -1];;
            }

            array[pointer] = evenNumber;
            pointer++;
        }
    }
    return array;
}




console.log(moveEvensToFront([3, 1, 2, 4, 5, 6]))