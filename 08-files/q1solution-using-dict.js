const fs = require('fs');
let data = fs.readFileSync('data.txt');
let textData = data.toString();
let lines = textData.split('\n');

// create a look-up table
// using an object
let priceChart = {
    'apple': 0.5,
    'orange': 0.7,
    'pineapple': 1,
    'watermelon': 2.5,
    'durian': 10
}

let totalCost = 0;
// we use for ... of loop for array traversal
for (let eachLine of lines) {
    if (eachLine.toLowerCase().trim() in priceChart) {
        totalCost += priceChart[eachLine.toLowerCase().trim()];
    }
  
}

console.log("Total cost =", totalCost);