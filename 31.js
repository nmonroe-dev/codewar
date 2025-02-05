function simpleArraySum(ar) {
    let int = 0;
    for(let i =0; i < ar.length; i++){
        int = int + ar[i];
    }
    return int;

}
console.log(simpleArraySum([1,2,3,4,10,11]))