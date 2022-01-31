// objects store key/values pairs, just like in Python's dictionary
// we associate a 'key' with a 'value'
let fruits = {  // curly braces means objects
    'a':'apples',
    'b':'bananas',
    'c':'cherries'
}

// one pair of key/value is known as a property
// we refer to property name and property values (impt because most JS documentation will use the term property)

// how to access the properties of an object?
console.log('fruits["b"] =>', fruits['b']);
console.log(`fruits['c'] =>`, fruits['c']);

// use the dot notation
console.log('fruits.a =>', fruits.a);

// to use the dot notation, the property name must be a valid variable name in JavaScript
let student = {
    'first name': 'John'
}
// console.log(student.first name); // => error! because the property name is not a valid variable name
console.log(`student['first name'] =>`, student['first name']);

// property names are always strings
let recipe = {
    title:"Spicy Fried Chicken",
    calories:800,
    "number of servings": 3   
}

// different from Python dictionaries, Objects in javascript can store functions
let spaceship = {
    speed: 10,
    calculateDistanceTravelled: function(time){
        console.log("attempting to calculate distance travelled");
        return thisspeed * time;
    }
}

let starDestroyer = {
    speed: 25,
    calculateDistanceTravelled: function(time) {
        console.log("attempting to calculate distance travelled from star destroyer");
        return this.speed * time**1.5;
    }
}

console.log(spaceship.speed);
console.log(`spaceship.calculateDistanceTravelled() => `, spaceship.calculateDistanceTravelled(10));
console.log(`starDestroyer.calculateDistanceTravelled() =>`,starDestroyer.calculateDistanceTravelled(10));