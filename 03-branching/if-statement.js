let password = "rotiprata123";
if (password === "rotiprata123") {
    console.log("Login successful!");
} else {
    console.log("Wrong password");
}

let score = 65;
if (score >= 90) {
    console.log("Distinction");
} else if (score >= 80) {
    console.log("A")
} else if (score >=70) {
    console.log("B");
} else if (score >=60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// replicate the above code without using any else-if
if (score >= 90) {
    console.log("AD");
} 
if (score >= 80 && score < 90) {
    console.log("A");
}

let x = 42;
if (x > 10) {
    console.log("Do something");
}
if (x > 20) {
    console.log("Do something else");
}

// WARNING! WON'T WORK
if (x=43) {
    console.log("Secret of life is found")
} else {
    console.log("Sorry not found");
}
console.log(x);
// x = 43
// ==> x
// ==> 43

