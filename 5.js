function abbrevName(name){
const words = name.split(" ");
const i = words[0][0].toUpperCase() + "." + words[1][0].toUpperCase();
console.log(i)
    return i
}

abbrevName("Nathan Dick ")