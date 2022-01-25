// using setTimeout inside a function is a closure

function sayHiLater() {
    let greeting = "Hi!";

    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// sayHiLater gets run and finishes and then setTimeout gets called, wanting access to greeting
// even tho sayHiLater has already completed, the variable reference to greeting is still in memory space

// --------------

// jQuery uses functions expressions and first-class functions

// $("button").click(function () {
//     // do stuff
// });

// Callback Function:
//      - A function you give to another function, to be run when the other function is finished
//      - so the function you call (ie, invoke) 'calls back' by calling the function you gave it when it finishes

function tellMeWhenDone(callback) {
    let a = 1000; // some work
    let b = 2000; // some work

    callback(); // run the function I gave you
}

tellMeWhenDone(function () {
    console.log("I am done!");
});

tellMeWhenDone(function () {
    console.log("All done!");
});
