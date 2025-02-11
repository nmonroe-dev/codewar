//Given a sorted array of numbers, find two numbers that add up to a given target


function findTwoSum(array, target){
    if(array.length === 0) return [-1,-1];


    let start = 0;
    let end = array.length -1;

    while(start < end){
        if(array[start] + array[end] === target){
            return [start, end]
        }else if(array[start] + array[end] < target){
            start ++;
        }else if(array[start] + array[end] > target){
            end --;
        }else {
            return [-1,-1];
        }
    }
}
console.log(findTwoSum([1, 2, 3, 4, 6], 6));  // Output: [1, 3]  (2 + 4 = 6)
console.log(findTwoSum([2, 5, 9, 11], 14));  // Output: [1, 2]  (5 + 9 = 14)
console.log(findTwoSum([1, 3, 5, 7], 10));   // Output: [2, 3]  (3rd and 4th element)
console.log(findTwoSum([1, 2, 3, 4], 20));   // Output: [-1, -1] (No match)
console.log(findTwoSum([]))
