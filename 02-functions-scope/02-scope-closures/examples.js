/**
 * JavaScript Scope and Closures - Examples
 * =====================================
 */

// ----- Global Scope -----

// Variables in global scope
const globalVariable = "I'm a global variable";
var anotherGlobalVar = "I'm also global";

function accessGlobal() {
  console.log(globalVariable); // Accessible inside functions
}

accessGlobal();
console.log(globalVariable); // Accessible in global scope

// ----- Function Scope -----

function functionScope() {
  // Variables declared inside a function are local to that function
  const localVar = "I'm local to functionScope";
  var anotherLocalVar = "I'm also local to functionScope";

  console.log(localVar); // Accessible here
  console.log(globalVariable); // Global variables are accessible

  // Nested function
  function nestedFunction() {
    const nestedVar = "I'm local to nestedFunction";
    console.log(localVar); // Can access parent function's variables
    console.log(nestedVar); // Can access own variables
  }

  nestedFunction();
  // console.log(nestedVar); // ERROR: Not accessible here
}

functionScope();
// console.log(localVar); // ERROR: Not accessible in global scope

// ----- Block Scope -----

// let and const are block-scoped
if (true) {
  let blockVar = "I'm block-scoped with let";
  const constantVar = "I'm block-scoped with const";
  var notBlockScoped = "I'm not block-scoped because I use var";

  console.log(blockVar); // Accessible here
  console.log(constantVar); // Accessible here
}

// console.log(blockVar); // ERROR: Not accessible here
// console.log(constantVar); // ERROR: Not accessible here
console.log(notBlockScoped); // Accessible here because var is function-scoped

// Block scope in loops
for (let i = 0; i < 3; i++) {
  // Each iteration has its own 'i'
  console.log(`Loop with let: ${i}`);
}
// console.log(i); // ERROR: 'i' is not defined

// Compare to var (function-scoped)
for (var j = 0; j < 3; j++) {
  console.log(`Loop with var: ${j}`);
}
console.log("After var loop, j =", j); // j is still accessible

// ----- Scope Chain -----

const top = "Top level";

function outer() {
  const outerVar = "Outer level";

  function middle() {
    const middleVar = "Middle level";

    function inner() {
      const innerVar = "Inner level";

      // All variables are accessible inside the innermost scope
      console.log("In inner function:");
      console.log("- innerVar:", innerVar);
      console.log("- middleVar:", middleVar);
      console.log("- outerVar:", outerVar);
      console.log("- top:", top);
    }

    inner();
    // innerVar is NOT accessible here
  }

  middle();
  // middleVar and innerVar are NOT accessible here
}

outer();
// outerVar, middleVar, and innerVar are NOT accessible here

// ----- Variable Shadowing -----

const shadowedVar = "Global";

function shadowTest() {
  const shadowedVar = "Local"; // Shadows the global variable
  console.log("Inside function:", shadowedVar); // "Local"

  if (true) {
    const shadowedVar = "Block"; // Shadows the function-level variable
    console.log("Inside block:", shadowedVar); // "Block"
  }

  console.log("After block:", shadowedVar); // "Local"
}

shadowTest();
console.log("Global scope:", shadowedVar); // "Global"

// ----- Hoisting -----

// Function declaration hoisting
hoistedFunction(); // Works because function declarations are hoisted

function hoistedFunction() {
  console.log("This function was called before its declaration");
}

// Function expression is NOT hoisted
// notHoistedFunction(); // ERROR: notHoistedFunction is not defined

const notHoistedFunction = function () {
  console.log("This would cause an error if called before declaration");
};

// Variable hoisting
console.log("hoistedVar before declaration:", typeof hoistedVar); // undefined, not an error
var hoistedVar = "I'm hoisted, but my value isn't";
console.log("hoistedVar after declaration:", hoistedVar); // "I'm hoisted, but my value isn't"

// let and const are hoisted but in a "temporal dead zone"
// console.log(notHoistedLet); // ERROR: Cannot access before initialization
let notHoistedLet = "I'm not accessible before my declaration";

// ----- Closures -----

// Basic closure example
function createGreeter(greeting) {
  // The returned function "closes over" the greeting variable
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const greetWithHello = createGreeter("Hello");
const greetWithHowdy = createGreeter("Howdy");

console.log(greetWithHello("Alice")); // "Hello, Alice!"
console.log(greetWithHowdy("Bob")); // "Howdy, Bob!"

// Closure with private variables (Counter example)
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
  };
}

const counter1 = createCounter();
console.log("Initial count:", counter1.getCount()); // 0
console.log("After increment:", counter1.increment()); // 1
console.log("After another increment:", counter1.increment()); // 2
console.log("After decrement:", counter1.decrement()); // 1
console.log("After reset:", counter1.reset()); // 0

// Multiple counters are independent
const counter2 = createCounter();
console.log("Counter1:", counter1.increment()); // 1
console.log("Counter2:", counter2.increment()); // 1 (independent)

// Function factory with closures
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// ----- The Loop Variable Problem -----

// Problematic code with var
function createFunctionsWithVar() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      console.log("var i:", i);
    });
  }

  return functions;
}

const functionsWithVar = createFunctionsWithVar();
functionsWithVar[0](); // "var i: 3" (not 0 as might be expected)
functionsWithVar[1](); // "var i: 3"
functionsWithVar[2](); // "var i: 3"

// Solution 1: Using let
function createFunctionsWithLet() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      console.log("let i:", i);
    });
  }

  return functions;
}

const functionsWithLet = createFunctionsWithLet();
functionsWithLet[0](); // "let i: 0" (each function captures its own value of i)
functionsWithLet[1](); // "let i: 1"
functionsWithLet[2](); // "let i: 2"

// Solution 2: Using IIFE
function createFunctionsWithIIFE() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(
      (function (capturedI) {
        return function () {
          console.log("IIFE i:", capturedI);
        };
      })(i)
    );
  }

  return functions;
}

const functionsWithIIFE = createFunctionsWithIIFE();
functionsWithIIFE[0](); // "IIFE i: 0"
functionsWithIIFE[1](); // "IIFE i: 1"
functionsWithIIFE[2](); // "IIFE i: 2"

// ----- Module Pattern -----

const calculator = (function () {
  // Private variable
  let result = 0;

  // Private function
  function validate(value) {
    return typeof value === "number" && !isNaN(value);
  }

  // Return an object with public methods
  return {
    add(value) {
      if (!validate(value)) throw new Error("Invalid input");
      result += value;
      return this; // For method chaining
    },

    subtract(value) {
      if (!validate(value)) throw new Error("Invalid input");
      result -= value;
      return this;
    },

    multiply(value) {
      if (!validate(value)) throw new Error("Invalid input");
      result *= value;
      return this;
    },

    divide(value) {
      if (!validate(value)) throw new Error("Invalid input");
      if (value === 0) throw new Error("Cannot divide by zero");
      result /= value;
      return this;
    },

    getResult() {
      return result;
    },

    reset() {
      result = 0;
      return this;
    },
  };
})();

console.log(calculator.add(5).multiply(2).subtract(3).divide(2).getResult()); // 3.5
calculator.reset();
console.log(calculator.getResult()); // 0

// ----- Memoization with Closures -----

function createMemoizedFunction(fn) {
  // Cache stored in closure
  const cache = {};

  return function (arg) {
    if (cache[arg] === undefined) {
      // Calculate and store result if not in cache
      console.log(`Computing result for ${arg}`);
      cache[arg] = fn(arg);
    } else {
      console.log(`Using cached result for ${arg}`);
    }
    return cache[arg];
  };
}

// Memoized factorial function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = createMemoizedFunction(factorial);

console.log(memoizedFactorial(5)); // Computes and caches
console.log(memoizedFactorial(5)); // Uses cached value
console.log(memoizedFactorial(6)); // Computes new value
