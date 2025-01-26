// set 2 varables larg and second lagest to -Infinity
// loop the array
// check each one 


function check(array){
    if (array.length < 2){
        return "Array must hold more then 2 eleements"
    }
    let largest = -Infinity;
    let second = - Infinity;

    for(let i = 0; i < array.lenght; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    for (let i = 0; i < array.length; i++){
        if(array[i] > second && array[i] !== largest){
            second = array[i];
        }
    }
    return {largest, second}
}
console.log(check([1, 5, -17, -20, 10])); // Output: -17
console.log(check([10])); // Output: "Array needs more than 2 elements"
console.log(check([5, 5, 5])); // Output: "No second smallest number found"
console.log(check([-5, 0, -10, -1])); // Output: -5