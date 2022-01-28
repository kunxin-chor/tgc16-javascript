function replaceWith99(fruits) {
    fruits[0] = -99;
}

function foobar(x) {
    x =  x * 2;
    return x;
}

let x = 100;
x = foobar(x);
// => foobar(100);
console.log(x);

let f = ["apples", "oranges", "bananas"];
replaceWith99(f);
console.log(f);