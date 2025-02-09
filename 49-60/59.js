/*
Given an array of numbers, find the number that appears the most times.
If multiple numbers have the same frequency, return the smallest one.
Return null if the array is empty.
*/

function check(array) {
    if(array.length === 0) return null;

    let hash = {}

    for(let i = 0; i < array.length; i++){
        let number = array[i];

        if(hash[number]){
            hash[number] += 1;
        }else{
            hash[number] = 1;
        }
    }

    let maxFr = 0;
    let smallest = Infinity;

    for(num in hash){
        if(hash[num] > maxFr || (hash[num] === maxFr && Number(num) < smallest)){
            maxFr = hash[num]
            smallest = Number(num)
        }
    }
    return smallest
}

console.log(check([4, 5, 5, 4, 6, 6, 6, 4]))