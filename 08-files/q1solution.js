const fs = require('fs');
let data = fs.readFileSync('data.txt');
let textData = data.toString();
let lines = textData.split('\n');

let totalCost = 0;
// we use for ... of loop for array traversal
for (let eachLine of lines) {
   if (eachLine.toLowerCase() == 'apple') {
       // add 0.5 to the total cost
       totalCost += 0.5;
   }
   if (eachLine.toLowerCase() == 'orange') {
       totalCost += 0.7;
   }
   if (eachLine.toLowerCase() == 'pineapple') {
       totalCost += 1;
   }
   if (eachLine.toLowerCase() == 'watermelon') {
       totalCost += 2.50;
   }
   if (eachLine.toLowerCase() == 'durian') {
       totalCost += 10;
   }
}

console.log("Total cost =", totalCost);