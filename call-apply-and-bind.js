// call(), apply() and bind()

// call(), apply() and bind() all have to do with manipulating `this` in a function

// all functions have access to call(), apply() and bind()

function b() {
    let myVar = 3;
    c();
}

function a() {
    let myVar = 2;
    b();
}

function c() {
    console.log(myVar);
}

let myVar = 1;
a();
