// call(), apply() and bind()

// call(), apply() and bind() all have to do with manipulating `this` in a function

// all functions have access to call(), apply() and bind()

// ---------------------
// ---------- BIND -----
// ---------------------

// bind() lets you bind the object you want `this` to refer to, to a function

let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        let fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
};

// here `this` is pointing to the global context, which doesnt know about the method getFullName()
let logName = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
};

// logName(); // prints an error - this.getFullName is not a function

// here we are binding the person object to the logName method
let logName2 = function (lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("---------------------");
}.bind(person);

logName2(); // now `this` is pointing to the person object

// we can also do this
// let logPersonName = logName.bind(person);

// logPersonName();

// ---------------------
// ---------- CALL -----
// ---------------------

// call() allows you to invoke a function and pass it the object you want `this` to refer to

logName.call(person);

// ------ FUNCTION BORROWING
// here we use the method from the person object, but using apply() to tell that object to use person2

let person2 = {
    firstName: "Jane",
    lastName: "Doe",
};

console.log(person.getFullName.apply(person2)); // prints Jane Doe - even tho called on person 'John Doe'

// ------ FUNCTION CURRYING

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2); // will bind the value 2 to a

console.log(multiplyByTwo(3)); // prints 6
