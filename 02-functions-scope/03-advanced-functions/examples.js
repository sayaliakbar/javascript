/**
 * Advanced Functions Examples
 * --------------------------
 * This file contains examples of advanced JavaScript function concepts:
 * - Higher-order functions
 * - Pure functions vs. side effects
 * - Immediately Invoked Function Expressions (IIFE)
 * - Function currying and composition
 * - Recursion
 */

// ----- Higher-Order Functions -----

console.log("--- Higher-Order Functions ---");

// 1. Functions that accept functions as arguments
const numbers = [1, 2, 3, 4, 5];

// Using a built-in higher-order function (map)
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled numbers:", doubled);

// Creating our own higher-order function
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

const tripled = applyOperation(numbers, (num) => num * 3);
console.log("Tripled numbers:", tripled);

// 2. Functions that return functions
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHowdy = createGreeter("Howdy");

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHowdy("Bob")); // Howdy, Bob!

// ----- Pure Functions vs. Side Effects -----

console.log("\n--- Pure Functions vs. Side Effects ---");

// Pure function - same input always gives same output, no side effects
function add(a, b) {
  return a + b;
}

console.log("Pure function result:", add(5, 3)); // Always 8 for inputs 5, 3

// Impure function - modifies external state
let counter = 0;

function incrementCounter() {
  counter++;
  return counter;
}

console.log("Counter before:", counter);
console.log("Increment result:", incrementCounter());
console.log("Counter after:", counter); // State has been modified!

// Impure function - depends on external factors
function getRandomNumber() {
  return Math.random();
}

console.log("Random number 1:", getRandomNumber());
console.log("Random number 2:", getRandomNumber()); // Different result with same input

// Converting impure to pure
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const myCounter = createCounter();
console.log("Pure counter value:", myCounter.getCount());
console.log("After increment:", myCounter.increment());
console.log("Current count:", myCounter.getCount());

// ----- Immediately Invoked Function Expressions (IIFE) -----

console.log("\n--- Immediately Invoked Function Expressions ---");

// Basic IIFE
(function () {
  const privateVar = "I am private";
  console.log("Inside IIFE:", privateVar);
})();

// IIFE with parameters
(function (name, age) {
  console.log(`IIFE with parameters: ${name} is ${age} years old`);
})("John", 30);

// IIFE with a return value
const result = (function () {
  const secretNumber = 42;
  return secretNumber * 2;
})();

console.log("IIFE result:", result);

// Module pattern using IIFE
const calculator = (function () {
  // Private variables and functions
  let result = 0;

  function validate(n) {
    return typeof n === "number" && !isNaN(n);
  }

  // Public API
  return {
    add(n) {
      if (validate(n)) {
        result += n;
      }
      return this; // For method chaining
    },
    subtract(n) {
      if (validate(n)) {
        result -= n;
      }
      return this;
    },
    multiply(n) {
      if (validate(n)) {
        result *= n;
      }
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

console.log("Initial calculator result:", calculator.getResult());
calculator.add(5).multiply(2).subtract(3);
console.log("After operations:", calculator.getResult());
calculator.reset();
console.log("After reset:", calculator.getResult());

// ----- Function Currying and Composition -----

console.log("\n--- Function Currying and Composition ---");

// Simple currying example
function multiply(a, b) {
  return a * b;
}

// Curried version
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log("Regular multiply:", multiply(3, 4));
console.log("Curried multiply:", curriedMultiply(3)(4));

// Arrow function currying
const arrowCurriedMultiply = (a) => (b) => a * b;
console.log("Arrow curried multiply:", arrowCurriedMultiply(3)(4));

// Practical currying example
function formatText(format) {
  return function (text) {
    switch (format) {
      case "uppercase":
        return text.toUpperCase();
      case "lowercase":
        return text.toLowerCase();
      case "title":
        return text
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");
      default:
        return text;
    }
  };
}

const toUpperCase = formatText("uppercase");
const toLowerCase = formatText("lowercase");
const toTitleCase = formatText("title");

console.log("Uppercase:", toUpperCase("hello world"));
console.log("Lowercase:", toLowerCase("HELLO WORLD"));
console.log("Title case:", toTitleCase("hElLo wORld"));

// Function composition
const double = (x) => x * 2;
const square = (x) => x * x;

// Composing manually
function doubleAndSquare(x) {
  return square(double(x));
}

console.log("Manual composition:", doubleAndSquare(3));

// Composition helper
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const doubleSquare = compose(square, double);
const squareDouble = compose(double, square);

console.log("compose(square, double)(3):", doubleSquare(3)); // square(double(3)) = square(6) = 36
console.log("compose(double, square)(3):", squareDouble(3)); // double(square(3)) = double(9) = 18

// Multiple composition
function composeMany(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const addOne = (x) => x + 1;
const multiplyByThree = (x) => x * 3;

const complexOperation = composeMany(addOne, square, multiplyByThree, double);

console.log("Complex composition:", complexOperation(2)); // addOne(square(multiplyByThree(double(2)))) = 37

// ----- Recursion -----

console.log("\n--- Recursion ---");

// Basic recursion: factorial
function factorial(n) {
  // Base case
  if (n <= 1) return 1;

  // Recursive case
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

// Recursive sum
function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}

console.log("Sum of [1, 2, 3, 4, 5]:", sum([1, 2, 3, 4, 5])); // 15

// Fibonacci sequence with recursion
function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(7):", fibonacci(7)); // 13

// Tree traversal with recursion
const fileSystem = {
  name: "root",
  files: ["file1.txt", "file2.txt"],
  subfolders: [
    {
      name: "pictures",
      files: ["photo1.jpg", "photo2.jpg"],
      subfolders: [],
    },
    {
      name: "documents",
      files: ["doc1.pdf"],
      subfolders: [
        {
          name: "work",
          files: ["report.docx"],
          subfolders: [],
        },
      ],
    },
  ],
};

function listAllFiles(folder, indent = 0) {
  const spaces = " ".repeat(indent * 2);

  console.log(`${spaces}Folder: ${folder.name}`);

  // List files
  folder.files.forEach((file) => {
    console.log(`${spaces}  File: ${file}`);
  });

  // Recursively process subfolders
  folder.subfolders.forEach((subfolder) => {
    listAllFiles(subfolder, indent + 1);
  });
}

console.log("File system traversal:");
listAllFiles(fileSystem);

// Tail recursion optimization example
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator);
}

console.log("Tail recursive factorial of 5:", factorialTail(5)); // 120

// Avoiding stack overflow with large recursion
// console.log(factorial(20000)); // Would cause stack overflow
// console.log(factorialTail(20000)); // Better but may still overflow in JS

console.log("\nEnd of examples");
