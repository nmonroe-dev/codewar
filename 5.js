function abbrevName(name){
const words = name.split(" ");
const i = words[0].toUpperCase() + "." + words[1][0].toUpperCase() +"." + words[2];
console.log(i)
    return i
}

abbrevName("Nathan Dick Monroe")