function reverseSeq(n) {
   if(n <= 0){
    return [];
   }
   const result = [];
   for(let i = n; i > 0; i--){
    result.push(i);
   }
   return result
  }
  
  // Example usage
  console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]
  console.log(reverseSeq(3)); // Output: [3, 2, 1]
  console.log(reverseSeq(0)); // Output: []
  