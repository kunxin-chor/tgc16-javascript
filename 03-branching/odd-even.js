// we want to install prompt-sync and refer to it as the `prompt` function
const prompt = require('prompt-sync')();
let number = Number(prompt(""));
if (number % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}