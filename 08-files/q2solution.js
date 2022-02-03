const fs = require('fs');
const prompt = require('prompt-sync')();
let validFruits = ['apple', 'orange', 'pineapple', 'durian', 'watermelon']
while(true) {
    let fruit = prompt("Enter fruit: ");
    if (validFruits.includes(fruit.toLowerCase().trim())) {
            fs.appendFileSync('data2.txt', fruit +'\n');
        } else {
            break;
        }
} 
console.log("Program ends");