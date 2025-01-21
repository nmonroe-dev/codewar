// so make a arry of numbers 
// start with a starting point decleaing maxNumber to first element in arry
// make a function block 
// pass arry into the function
//loop the arry checking what is the max number 
// resign the max number to arry[i]
// return max number 



const arry = [1,2,4,-10,56,24,100,98,42];
let maxNumber = arry[0];
function getMax(arry){
    for(let i = 0; i < arry.length; i++){
        if(arry[i] > maxNumber){
            maxNumber = arry[i];
        }
    }
    return maxNumber;
}
getMax(arry);
console.log(maxNumber);