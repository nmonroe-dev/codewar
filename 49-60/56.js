function count(string){
    let array = string.split(" ");
    
    let obj = {}

    for(let i = 0; i < array.length; i++){
        let word = array[i];

        if(obj[word]){
            obj[word] += 1
        }else{
            obj[word] = 1
        }
    }
    return obj
}

console.log(count("i like you and you like me and we like icecream"))