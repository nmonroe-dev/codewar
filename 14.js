// Array of numbers
// return the sum of all postvi

function positiveSum(arr) {
    const positiveNumbers = arr.filter(num => num < 0);
     const sum = positiveNumbers.reduce((a, b) => a + b, 0);
     console.log(sum);
    
}
positiveSum([1,-3,5, -6])