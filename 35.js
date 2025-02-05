


//Move All Even Numbers to the Front (Order Doesn’t Matter)


function moveEvensToFront(array){
    if(array.length === 0) return "Array is empty";

    let start = 0;
    let end = array.length - 1;
    let temp = 0
   
    while(start < end){
        if(array[start] % 2===0){
            start ++
        }else if(array[end] % 2 !==0){
            end --
        }else{
            temp = array[end]
            array[end] = array[start]
            array[start] = temp
            start++
            end--
        }
    }
    
    return array;
}








console.log(moveEvensToFront([3, 1, 2, 4, 5, 6]));