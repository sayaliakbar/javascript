/**
 * JavaScript Variables - Examples
 * ==============================
 */

// ----- Variable Declarations -----

// let - block-scoped, can be reassigned
let userName = "Alice";
userName = "Bob"; // Reassignment is allowed

// const - block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.15; // This would cause an error: Assignment to constant variable

// var - function-scoped (older way)
var oldVariable = "I'm function scoped";

// ----- Naming Conventions -----

// camelCase - standard for variables and functions
let firstName = "John";
let lastName = "Doe";
let userEmailAddress = "john.doe@example.com";

// PascalCase - typically used for classes
const UserProfile = {}; // This would normally be a class

// UPPER_SNAKE_CASE - common for constants
const MAX_SIZE = 100;
const API_BASE_URL = "https://api.example.com";

// ----- Variable Scope -----

// Global scope
let globalVar = "I'm available everywhere";

function scopeDemo() {
  // Function scope
  var functionScopedVar = "I'm only available inside this function";

  if (true) {
    // Block scope
    let blockScopedVar = "I'm only available inside this block";
    const alsoBlockScoped = "I'm also block scoped";
    var notBlockScoped = "I'm function scoped, not block scoped";

    console.log(blockScopedVar); // Works fine
    console.log(globalVar); // Works fine - can access outer variables
  }

  // console.log(blockScopedVar); // Would cause error - outside block scope
  console.log(notBlockScoped); // Works fine - var is function scoped, not block scoped
}

// ----- Hoisting -----

// Variables declared with var are hoisted
console.log(hoistedVar); // undefined (not an error)
var hoistedVar = "I'm hoisted";

// let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log(notHoisted); // Would cause a ReferenceError
let notHoisted = "I'm not hoisted in the same way";

// ----- Variable Declaration Without Values -----
let declaredButUndefined;
console.log(declaredButUndefined); // undefined

// ----- Multiple Declarations -----
let x = 1,
  y = 2,
  z = 3;
const DAYS_IN_WEEK = 7,
  HOURS_IN_DAY = 24;
