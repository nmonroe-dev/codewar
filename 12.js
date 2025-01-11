function reverseWords(str) {
    const splitStr = str.split(" ");
    const newStr = splitStr.map((element) => element.split("").reverse().join("").trim());
    console.log(newStr.join(" "));
}

reverseWords("nathan");