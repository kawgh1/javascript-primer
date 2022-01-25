// Arrays in Javascript can contain anything

let arr = [
    1,

    false,

    { name: "Tony", address: "111 Main St" },

    function (name) {
        let greeting = "yo ";
        console.log(greeting + name);
    },

    "hello",
];

console.log(arr);

// here we have an array with

// [ Number, Boolean, Object, Function, String]

// how to run the function from the array?

arr[3](arr[2].name);
