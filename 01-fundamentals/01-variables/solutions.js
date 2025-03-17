/**
 * JavaScript Variables - Exercise Solutions
 * ========================================
 */

/**
 * Exercise 1: Variable Declarations
 */
let country = "United States";
const BIRTH_YEAR = 1990;
var oldSchool = "I'm using var";

console.log(country);
console.log(BIRTH_YEAR);
console.log(oldSchool);

/**
 * Exercise 2: Variable Reassignment
 */
let score = 0;
score = 10;
score += 5;
score *= 2;
console.log("Final score:", score); // Should display 30

const USERNAME = "js_learner";
// USERNAME = "new_name"; // This would cause an error: Assignment to constant variable

/**
 * Exercise 3: Variable Scope
 */
let globalMessage = "I'm global!";

function testScope() {
  var functionScoped = "I'm function scoped";

  if (true) {
    let blockScoped = "I'm block scoped";
    console.log(blockScoped); // Works
    console.log(functionScoped); // Works
    console.log(globalMessage); // Works
  }

  console.log(functionScoped); // Works
  // console.log(blockScoped); // Would cause error - outside block scope
  console.log(globalMessage); // Works
}

testScope();
console.log(globalMessage); // Works
// console.log(functionScoped); // Would cause error - function scoped
// console.log(blockScoped); // Would cause error - block scoped

/**
 * Exercise 4: Naming Conventions
 */
let firstName = "John";
let lastName = "Doe";
const DATE_OF_BIRTH = "1990-01-01";
const MAX_FILE_SIZE_MB = 100;

const address = {
  country: "United States",
  city: "New York",
  street: "Broadway",
};

function calculateTax(amount) {
  const TAX_RATE = 0.2;
  return amount * TAX_RATE;
}

/**
 * Exercise 5: Working with Variables
 */
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Sum of ${num1} and ${num2} is ${sum}`);
console.log(`Difference of ${num1} and ${num2} is ${difference}`);
console.log(`Product of ${num1} and ${num2} is ${product}`);
console.log(`Quotient of ${num1} divided by ${num2} is ${quotient}`);
