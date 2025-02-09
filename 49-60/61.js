function find(string){
    let array = string.split("")


    let hash ={}

    for(let i = 0; i < array.length; i++){
        let character = array[i];

        if(hash[character]){
            hash[character] +=1;
        }else{
            hash[character] =1
        }
    }

    for(let i = 0; i < array.length; i++){
        if(hash[array[i]] > 1){
            return array[i];
        }
    }
    return "None"
}

console.log(find(["hello"]))