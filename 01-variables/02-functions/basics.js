// assume that we are creating a function
// that calculates distance given speed and time
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

function calculateFuelRequired(distance) {
    // assume 1km costs 0.5 litre of fuel
    return distance * 0.5;
}

function multi(x) {
    return x * 2;
}

let distance = calculateDistance(10,20);
console.log("Distance travelled =", distance);
console.log("Fuel needed =", calculateFuelRequired(distance));
console.log(multi(4));




