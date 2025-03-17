/**
 * JavaScript Function Basics - Examples
 * ==================================
 */

// ----- Function Declarations -----

// Basic function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"

// Function with multiple parameters
function calculateArea(length, width) {
  return length * width;
}

console.log("Area:", calculateArea(5, 10)); // 50

// Function with no parameters
function getCurrentDateTime() {
  return new Date();
}

console.log("Current time:", getCurrentDateTime());

// Function with no return (implicitly returns undefined)
function logMessage(message) {
  console.log("LOG:", message);
  // No return statement
}

const result = logMessage("Test message"); // Logs "LOG: Test message"
console.log("Function returned:", result); // undefined

// ----- Function Expressions -----

// Anonymous function expression
const add = function (a, b) {
  return a + b;
};

console.log("2 + 3 =", add(2, 3)); // 5

// Named function expression
const subtract = function subtraction(a, b) {
  return a - b;
};

console.log("5 - 3 =", subtract(5, 3)); // 2

// Functions can be stored in data structures
const operations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

console.log("4 * 5 =", operations.multiply(4, 5)); // 20

// ----- Arrow Functions -----

// Basic arrow function
const square = (x) => {
  return x * x;
};

console.log("5 squared =", square(5)); // 25

// Simplified syntax for single parameter
const double = (x) => {
  return x * 2;
};

console.log("Double 8 =", double(8)); // 16

// Simplified syntax for single expression (implicit return)
const cube = (x) => x * x * x;

console.log("3 cubed =", cube(3)); // 27

// Arrow function with multiple parameters
const multiply = (a, b) => a * b;

console.log("4 × 6 =", multiply(4, 6)); // 24

// Arrow function with no parameters
const getRandomNumber = () => Math.random();

console.log("Random number:", getRandomNumber());

// ----- Parameters and Arguments -----

// Default parameters
function greetWithDefault(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greetWithDefault("Bob")); // "Hello, Bob!"
console.log(greetWithDefault()); // "Hello, Guest!"

// Rest parameters
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3)); // 6
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5)); // 15

// Arguments object (available in regular functions, not arrow functions)
function printArguments() {
  console.log("Number of arguments:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${i}:`, arguments[i]);
  }
}

printArguments("JavaScript", 42, true);

// ----- Return Values -----

// Returning different types
function getRandomValue() {
  const random = Math.random();
  if (random < 0.33) {
    return "string value";
  } else if (random < 0.66) {
    return 42;
  } else {
    return { type: "object", value: random };
  }
}

console.log("Random value:", getRandomValue());

// Early return
function divideIfPossible(a, b) {
  // Guard clause
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

console.log("10 / 2 =", divideIfPossible(10, 2)); // 5
console.log("10 / 0 =", divideIfPossible(10, 0)); // "Cannot divide by zero"

// Returning multiple values using an object
function getPersonStats(name, height, weight) {
  const bmi = weight / (height / 100) ** 2;
  return {
    name,
    height,
    weight,
    bmi: bmi.toFixed(1),
  };
}

console.log(getPersonStats("Jane", 170, 65));
// { name: "Jane", height: 170, weight: 65, bmi: "22.5" }

// Returning multiple values using an array (with destructuring)
function getMinMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}

const [min, max] = getMinMax([3, 1, 5, 2, 4]);
console.log("Min:", min, "Max:", max); // Min: 1 Max: 5

// ----- Function Scope -----

function scopeExample() {
  const localVar = "I'm local to scopeExample";
  console.log(localVar); // Accessible

  if (true) {
    const blockVar = "I'm local to this block";
    console.log(blockVar); // Accessible
    console.log(localVar); // Also accessible (outer scope)
  }

  // console.log(blockVar); // Error: blockVar is not defined
}

scopeExample();
// console.log(localVar); // Error: localVar is not defined

// Variables with the same name in different scopes
const value = "global";

function checkScope() {
  const value = "local";
  console.log("Inside function:", value); // "local"
}

checkScope();
console.log("Outside function:", value); // "global"

// ----- Methods (Functions in Objects) -----

// Object with methods
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,

  // Method
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  // Shorthand method (ES6)
  greet() {
    return `Hello, I'm ${this.fullName()} and I'm ${this.age} years old.`;
  },

  // Arrow function as method (careful with 'this')
  getBirthYear: () => {
    // 'this' doesn't refer to person here, but to the surrounding context
    // This won't work as expected
    // return new Date().getFullYear() - this.age;
    return "Warning: 'this' is not what you expect in an arrow function!";
  },
};

console.log("Full name:", person.fullName()); // "John Doe"
console.log("Greeting:", person.greet()); // "Hello, I'm John Doe and I'm 30 years old."
console.log("Birth year:", person.getBirthYear());

// ----- Immediately Invoked Function Expressions (IIFE) -----

// Basic IIFE
(function () {
  const message = "I'm executed immediately!";
  console.log(message);
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("IIFE");

// ----- Higher-Order Functions -----

// Function that accepts a function as an argument
function executeOperation(x, y, operation) {
  return operation(x, y);
}

// Using a higher-order function with different operations
console.log(executeOperation(5, 3, (a, b) => a + b)); // 8
console.log(executeOperation(5, 3, (a, b) => a * b)); // 15
console.log(executeOperation(5, 3, (a, b) => Math.max(a, b))); // 5

// Function that returns a function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double2 = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 10:", double2(10)); // 20
console.log("Triple 10:", triple(10)); // 30

// ----- Callbacks -----

// Simple callback example
function processArray(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
}

const numbers = [1, 2, 3, 4, 5];

const doubled = processArray(numbers, (x) => x * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8, 10]

const squared = processArray(numbers, (x) => x * x);
console.log("Squared numbers:", squared); // [1, 4, 9, 16, 25]

// Callback with setTimeout
function delayedGreeting(name, callback) {
  console.log(`Preparing greeting for ${name}...`);

  setTimeout(function () {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
  }, 1000);
}

delayedGreeting("Alex", function (message) {
  console.log("Delayed message:", message);
});

// ----- Pure vs. Impure Functions -----

// Pure function example
function addPure(a, b) {
  return a + b;
}

console.log("Pure function:", addPure(5, 3)); // Always 8 for these inputs

// Impure function example
let counter = 0;
function incrementAndAdd(value) {
  counter++;
  return counter + value;
}

console.log("Impure function:", incrementAndAdd(5)); // 6 (counter is now 1)
console.log("Impure function again:", incrementAndAdd(5)); // 7 (counter is now 2)

// ----- Factory Functions -----

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
    birthday() {
      this.age++;
      return `Happy birthday! Now I'm ${this.age} years old.`;
    },
  };
}

const john = createPerson("John", 25);
console.log(john.greet()); // "Hello, my name is John and I'm 25 years old."
console.log(john.birthday()); // "Happy birthday! Now I'm 26 years old."

// ----- Decorator Functions -----

function logExecution(func) {
  return function (...args) {
    console.log(`Executing function with args: ${args}`);
    const result = func(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

const addDecorated = logExecution((a, b) => a + b);
addDecorated(3, 4);
// Executing function with args: 3,4
// Function returned: 7

// ----- Best Practices Example -----

// Good: Function does one thing and has descriptive name
function calculateTotalPrice(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

// Bad: Function tries to do too much
function processOrder(price, quantity, taxRate, customerName, inStock) {
  // This function is doing too many things:
  // - Calculate price
  // - Check inventory
  // - Handle customer info
  // - etc.
  // Better to break it into smaller, focused functions
}

// Good: Early return pattern
function getDiscount(user) {
  // Guard clauses for edge cases
  if (!user) return 0;
  if (!user.active) return 0;

  // Main logic
  if (user.isPremium && user.points > 100) return 0.2;
  if (user.isPremium) return 0.1;
  if (user.points > 100) return 0.05;

  return 0;
}
