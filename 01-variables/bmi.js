// in the terminal at 01-variables directory, type in
// yarn add prompt-sync
const prompt = require('prompt-sync')();

// eqv in Python:
// float(input("Please enter your weight"))
let weight = parseFloat(prompt("Please enter your weight"));
let height = parseFloat(prompt("Please enter your height"));
let bmi = weight / height ** 2;
console.log("bmi =", bmi )