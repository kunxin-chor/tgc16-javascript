const prompt = require('prompt-sync')();

let psi = parseFloat(prompt("Please enter the psi: "));
let quality = 0;
if (psi <= 150) {
    let quality = "Healthy";
} else if (psi <= 300) {
    let quality = "Unhealthy";
} else {
     let quality = "Hazardous";
}
console.log(quality);