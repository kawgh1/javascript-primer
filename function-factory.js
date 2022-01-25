// Closures can be used to create function factories

function makeGreeting(language) {
    return function (firstName, lastName) {
        if (language === "en") {
            console.log("Hello " + firstName + " " + lastName);
        }

        if (language === "es") {
            console.log("Hola " + firstName + " " + lastName);
        }

        if (language === "de") {
            console.log("Hallo " + firstName + " " + lastName);
        }
    };
}

// So greetEnglish is a closure of the function makeGreeting with parameter "en"
//
// this means every time we run greetEnglish or greetSpanish, it creates a new execution context, new memory space

let greetEnglish = makeGreeting("en");
let greetSpanish = makeGreeting("es");
let greetGerman = makeGreeting("de");

greetGerman("Sam", "Smith"); // prints Hallo Sam Smith
