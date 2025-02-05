function check(array){
    if(array.length === 0){
        return true;
    }

    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        if(array[start] !== array[end]){
            return false;
        }
        start ++
        end --

    }
    return true;
}

console.log(check([1,2,3,4]));
console.log(check([1,1,1,1]));
console.log(check([]));