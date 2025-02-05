function compareTriplets(a, b) {
    let start1 = 0;
    let start2 = 0;
    let score =[0,0]
    while(start1 < a.length && start2 < b.length){
       if(a[start1] < b[start2]){
           score[0] +=1
       }else{
           score[1] += 1
       }
       start1 ++
       start2 ++
    }
    return score
   }

   console.log(compareTriplets([17,28,30], [99,16,8]))