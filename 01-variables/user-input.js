// How to add prompt to your programs
// in the terminal:
//  yarn add prompt-sync
//
// either
// 1. do in once per new directory
// 2. or do in the workspace directory

// import in prompt sync into our program
const prompt = require('prompt-sync')();

let s = prompt("What's your name? ");
console.log("Hi", s);