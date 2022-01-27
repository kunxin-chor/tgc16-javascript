let totalAmountLeft = prompt("How much money do you have? ");
let distanceTravelled = 0;

while(totalAmountLeft >= 3.5) {
    if (distanceTravelled < 10000) {
        distanceTravelled += 500;
    } else {
        distanceTravelled += 400;
    }
    totalAmountLeft = totalAmountLeft - 3.5;
}
console.log("distance travelled =", distanceTravelled);