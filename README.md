Javascript - The Weird Parts
https://www.udemy.com/course/understand-javascript/

# Notes

## Execution Context (Global)

-   In all javascript programs that run in a browser we get two objects for free - **Global Object (window)** and **'this'**
-   at the global level 'window' and 'this' are equal, they're the same object
-   any code (functions or variables) that are not inside a function are part of the global object

### Creation and Execution Phase

-   Execution Context is created in two phases
-   In the creation phase it loads all the code for all the functions and assigns all variables as _undefined_ in memory (browser memory in this case)
    -   This is sometimes called **'hoisting'**
-   In the execution phase, it runs any runnable functions and assigns values to all variables

### Execution Stack and Reference to Outer Environment

-   This code prints **1**

          function b() {
              var myVar = 3;
              c();
          }

          function a() {
              var myVar = 2;
              b();
          }

          function c() {
              console.log(myVar);
          }

          var myVar = 1;
          a();

-   by the time function c() is called, within the scope of function c() myVar === undefined. However, JS is going to look up the at function c()'s external reference environment, which in this case is the global scope. JS finds myVar === 1 in the global scope and uses that value, even though its undefined in function c().

## Global Execution Stack and the Event Queue

-   The JS engine is going to always run whatever code is in the **Global Execution Stack** first and wait until it has completed before ever looking at the **Event Queue (click events, HTTP fetch requests, etc.)**
-   And before it moves to the next item in the **Event Queue**, it will run everything in the **Execution Stack** from the first item first, and any additional global code it generates

## Dynamic Typing (not Static Typing)

-   You dont declare the type of your variables in JS. JS figures it out during execution.

## Primitive Types

-   Javascript has **6 Primitive Types**
-   **`undefined`** - represents lack of existence
-   **`null`** - represents lack of existence
-   **`boolean`** - `true` or `false`
-   **`number`** - `number` is a **floating point** number (there's always some decimals). There's only one number type in JS and it can make math weird.
-   **`string`** - any sequence of characters wrapped in '' or ""
-   **`symbol`** - used in ES6

## Operator Precedence

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

## Type Coercion

-   forcing conversion of a variable from one type to another

        var a = 1 + '2'
        console.log(a)

        // prints '12'

-   when you give the JS engine a number plus a string its going to give you a string back

        console.log(3 < 2 < 1)

        // prints `true`

-   Here, 3 < 2 , that's false

    -   Then we have `false` < 1 - JS is going to coerce `false` into 0 -> 0 < 1
        -   which is true, so it returns `true`

-   Number(`undefined`) --> **`NaN`**
-   Number(`null`) --> **0**

-   `undefined` and `null` behave in unexpected ways

    -   `false` == 0 --> `true`
    -   `null` == 0 --> `false`
