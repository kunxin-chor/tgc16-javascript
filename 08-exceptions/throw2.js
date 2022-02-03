const prompt = require('prompt-sync')();

function askForName() {
    let name = prompt("Enter your name: ");
    if (name == "") {
        throw "User name is empty"
        // also ends the function immediately
    }
    return name;
}
try {
    let userName = askForName();
    console.log("Welcome", userName);
} catch (err) {
    console.log("You didn't specify your name")
}
console.log("...rest of the program")