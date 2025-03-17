/**
 * JavaScript Data Types - Examples
 * ==============================
 */

// ----- Primitive Data Types -----

// String - represents textual data
const greeting = "Hello, World!";
const singleQuotes = "Single quotes work too";
const backticks = `Template literals allow ${greeting}`; // String interpolation

// Number - represents both integers and floating point numbers
const integer = 42;
const float = 3.14159;
const scientific = 2.998e8; // Scientific notation
const infinity = Infinity; // Infinity is a special value
const notANumber = NaN; // NaN (Not-A-Number) is another special value

// Boolean - represents logical entities, true or false
const isActive = true;
const isComplete = false;

// Undefined - represents a variable that has been declared but not assigned a value
let unassigned;
console.log(unassigned); // undefined

// Null - represents the intentional absence of any object value
const empty = null;

// Symbol - represents a unique identifier
const uniqueId = Symbol("id");
const anotherUniqueId = Symbol("id");
console.log(uniqueId === anotherUniqueId); // false - Symbols are always unique

// BigInt - represents integers larger than Number.MAX_SAFE_INTEGER
const bigInteger = 9007199254740991n; // Note the 'n' suffix
const anotherBigInt = BigInt("9007199254740992");

// ----- Reference Data Types -----

// Object - key-value pairs
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  greet: function () {
    return `Hello, I'm ${this.firstName}`;
  },
};

// Accessing object properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation
console.log(person.greet()); // Method call

// Array - ordered collection of values
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Accessing array elements
console.log(fruits.length); // Array length property

// Function - callable object
function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const divide = (a, b) => a / b; // Arrow function

// ----- Type Checking -----

console.log(typeof greeting); // "string"
console.log(typeof integer); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof unassigned); // "undefined"
console.log(typeof empty); // "object" (This is a historical bug in JS)
console.log(typeof uniqueId); // "symbol"
console.log(typeof bigInteger); // "bigint"

console.log(typeof person); // "object"
console.log(typeof fruits); // "object" (arrays are objects)
console.log(typeof add); // "function"

// Better way to check for arrays
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(person)); // false

// Better way to check for null
console.log(empty === null); // true

// ----- Type Conversion/Coercion -----

// Explicit type conversion (casting)
const numString = "42";
const num = Number(numString); // String to Number
console.log(num, typeof num); // 42 "number"

const numToString = String(num); // Number to String
console.log(numToString, typeof numToString); // "42" "string"

const booleanFromNum = Boolean(1); // Non-zero number to Boolean
console.log(booleanFromNum); // true

const booleanFromString = Boolean("hello"); // Non-empty string to Boolean
console.log(booleanFromString); // true

// Implicit type coercion
console.log("10" + 5); // "105" (number is converted to string)
console.log("10" - 5); // 5 (string is converted to number)
console.log("10" * 5); // 50 (string is converted to number)
console.log(10 + true); // 11 (true is converted to 1)
console.log(10 + false); // 10 (false is converted to 0)
console.log(10 * ""); // 0 (empty string is converted to 0)
console.log(10 * "hello"); // NaN (non-numeric string can't be converted properly)

// ----- Checking for specific types -----
console.log(Number.isInteger(42)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Object.prototype.toString.call(fruits)); // "[object Array]"
