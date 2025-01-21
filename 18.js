// create arrey of numbers
// function linearlSearch
//loop the arry
//check to target 
// return the index


const numbers = [1,4,6,13,56,89,45,33];

function linearlSearch(arry, target){
    for (let i = 0; i < arry.length; i++) {
        if(arry[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearlSearch(numbers, 89));





const numbers2 = [3,8,5,9];

function checkArry(arry, target){
    for(let i = 0; i < arry.length; i++){
        if(arry[i] === target){
            return true;
        }  
    }
    return "No match";
}
console.log(checkArry(numbers2,8));
