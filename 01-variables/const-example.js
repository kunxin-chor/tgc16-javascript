// const means 'constant'
const pi = 3.14; // cannot be REASSIGNED
// pi = 3.1417; // <== cannot reassign
console.log(pi);

// Traditional programmer's idea of const
// Const is used to reflect values that have
// importance in the program and never changes
// Those values have semantic significant
const gst = 0.07;

// Significant of JS developers use const for
// ANY variables that will not be reassigned
const weight = 87;
const height = 1.71;
console.log(weight/height**2);

let fruits =["apples", "oranges", "bananas"];

const primes = [11,17,21];
primes[0] = 13; // assign to one element, not affected by const
console.log(primes);
//primes = [15,17,21]; // reassign the entire array, therefore affected
                     // by const and will crash