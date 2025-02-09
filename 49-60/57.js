/*
Given a string, find the first character that does not repeat.
Return the character. If all characters repeat, return "None".
*/


function find(string){
    let obj = {};

    for(let i = 0; i < string.length; i++){
        let litter = string[i];
        
        if(obj[litter]){
            obj[litter] += 1
        }else{
            obj[litter] = 1
        }
    }

    if(obj[litter[i]] === 1){
        return obj[litter[i]]
    }

    return "None"
}

console.log(find("AABBCDDEEFF"))