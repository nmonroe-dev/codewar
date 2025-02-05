//Check if an array is a palindrome using two pointers.


function check(array){
    if(array.length === 0) return "Array is palindrome";

    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        if(array[start] === array[end]){
            start ++
            end --
        }else{
            return "False Array is not a palindrome";
        }

    }
    return "True Array is Pladrom"
}

console.log(check([1,2,2,1]));
console.log(check([1,2,3,4]));
console.log(check([]));