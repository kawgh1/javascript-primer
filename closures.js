// Closures

function greet(whatToSay) {
    return function (name) {
        console.log(whatToSay + " " + name);
    };
}

// So here we are calling a function that returns a function

// since our function returns a function, we can immediately pass the return function some parameters like this

greet("hi")(); // prints hi undefined
greet("hi")("Tony"); // prints hi Tony

// --------------

let sayHi = greet("Hey");
sayHi("Yolanda"); // prints Hey Yolanda

// This is possible by closures
//     - since we assigned sayHi to a let - that memory space gets written even if it isn't invoked right away

// Closures arent something you type, its not code you create or tell Javascript to do, its simply how the language works

// Closures means whatever function you run, Javascript will keep its scope intact, its variables will still be in memory

// ------------------------------------------------

// Quirky Closure stuff

// ------------------------------------------------

// so this is a function that returns an array of functions
function buildFunctions() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
        // console.log("I ran ", i);
    }
    // console.log("i = ", i);
    return arr;
}

let fs = buildFunctions();

// so here we are calling buildFunctions and invoking the function at [0], [1] and [2] of the returned arrays of each fs() call
fs[0]();
fs[1]();
fs[2]();

// when I use 'let' it prints
// 0
// 1
// 2

// when I use 'var' it prints
// 3
// 3
// 3

// this is because let is only scoped to its block context (the for loop in this case), while var is global scoped
// so when var is used, var i = 3 is what gets saved in memory when buildFunctions() returns
// when let is used, let i = undefined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Cleaner_code_in_inner_functions
