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
    // a function inside an object is known as a method
    calculateDistanceTravelled: function(time){
        console.log("attempting to calculate distance travelled");
        return this.speed * time;
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

// create an empty object
let employeeRecord = {
    firstName:'Tan'
};

// add in a last name property  (warning: will not work in strict mode)
employeeRecord.lastName = "Ah Kow";
employeeRecord.getName = function() {  // functions are references, so they can be assigned to variables/properties
    return this.firstName + " " + this.lastName;
}
console.log('employeeRecord =>', employeeRecord);
console.log('employeeRecord.getName() =>', employeeRecord.getName());

// primitive - integers, floats, booleans, strings* (strings despite being objects, they are immutable -- they act the same as primitives)
// reference - objects, functions, arrays
let o1 = {
    'count': 14,
    'name':'o1'
};

let o2 = o1;  // we're not making an exact copy of the object
              // we're simply copying the reference from o1 into o2

o1.count = 15;
console.log('o1.count =>', o1.count);
console.log('o2.count =>', o2.count);

// how do we know if a property exists in an object?
let food = {
    "a":"apple pie",
    "b":"bak gua",
    "c":"cheese cake",
    "r":'roti prata',
    'p':'pineapple tart'
}
console.log(`'a' in food =>`,'a' in food);
console.log(`'d' in food =>`, 'd' in food);
console.log(` food.hasOwnProperty('p')=>`, food.hasOwnProperty('p'));
