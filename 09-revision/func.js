function foobar(x) {
    x = x * 2;
    return x;
}

let x = 42;
foobar(x);
// => foobar(42)
// pass by value means
// the value is copied to the parameter