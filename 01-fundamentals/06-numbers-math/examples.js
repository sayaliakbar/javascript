/**
 * JavaScript Numbers and Math - Examples
 * ===================================
 */

// ----- Creating Numbers -----

// Direct creation
const integer = 42;
const floatingPoint = 3.14159;
const negative = -273.15;

console.log("Integer:", integer);
console.log("Floating point:", floatingPoint);
console.log("Negative number:", negative);

// Using Number constructor
const fromString = Number("123");
const emptyToZero = Number(""); // becomes 0
const invalidNumber = Number("hello"); // becomes NaN
console.log("Number from string:", fromString);
console.log("Number from empty string:", emptyToZero);
console.log("Number from invalid string:", invalidNumber);

// Scientific notation
const bigNumber = 1.5e6; // 1.5 million (1.5 × 10^6)
const tinyNumber = 1.5e-6; // 0.0000015 (1.5 × 10^-6)
console.log("Scientific notation (large):", bigNumber);
console.log("Scientific notation (small):", tinyNumber);

// Special numeric values
const notANumber = NaN;
const infinityValue = Infinity;
const negativeInfinity = -Infinity;
console.log("Not a number:", notANumber);
console.log("Infinity:", infinityValue);
console.log("Negative infinity:", negativeInfinity);

// ----- Number Properties and Limits -----

console.log("\n----- Number Properties and Limits -----");
console.log("Maximum value:", Number.MAX_VALUE);
console.log("Minimum positive value:", Number.MIN_VALUE);
console.log("Maximum safe integer:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Minimum safe integer:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("Epsilon (smallest difference):", Number.EPSILON); // ~2.22e-16

// ----- Basic Math Operations -----

console.log("\n----- Basic Math Operations -----");
const a = 10;
const b = 3;

console.log("a =", a, "b =", b);
console.log("Addition (a + b):", a + b); // 13
console.log("Subtraction (a - b):", a - b); // 7
console.log("Multiplication (a * b):", a * b); // 30
console.log("Division (a / b):", a / b); // 3.3333...
console.log("Remainder (a % b):", a % b); // 1 (modulo/remainder)
console.log("Exponentiation (a ** b):", a ** b); // 1000 (10^3)

// Increment and decrement
let counter = 5;
console.log("\nStarting counter value:", counter);

console.log("Post-increment (counter++):", counter++); // 5 (returns then increments)
console.log("Counter after post-increment:", counter); // 6

console.log("Pre-increment (++counter):", ++counter); // 7 (increments then returns)
console.log("Counter after pre-increment:", counter); // 7

console.log("Post-decrement (counter--):", counter--); // 7 (returns then decrements)
console.log("Counter after post-decrement:", counter); // 6

console.log("Pre-decrement (--counter):", --counter); // 5 (decrements then returns)
console.log("Counter after pre-decrement:", counter); // 5

// ----- Operator Precedence -----

console.log("\n----- Operator Precedence -----");

console.log("2 + 3 * 4 =", 2 + 3 * 4); // 14, not 20 (multiplication before addition)
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20 (parentheses have priority)
console.log("10 - 2 + 3 =", 10 - 2 + 3); // 11 (left to right for same precedence)
console.log("10 / 2 * 3 =", (10 / 2) * 3); // 15 (left to right for same precedence)

// ----- The Math Object -----

console.log("\n----- The Math Object -----");

// Constants
console.log("Math.PI:", Math.PI); // ~3.14159
console.log("Math.E:", Math.E); // ~2.71828

// Rounding methods
console.log("\nRounding Methods:");
const num = 4.7;
console.log(`Original number: ${num}`);
console.log("Math.round(4.7):", Math.round(num)); // 5
console.log("Math.floor(4.7):", Math.floor(num)); // 4
console.log("Math.ceil(4.7):", Math.ceil(num)); // 5
console.log("Math.trunc(4.7):", Math.trunc(num)); // 4

// Finding extremes
console.log("\nFinding Extremes:");
console.log("Math.max(5, 10, 15):", Math.max(5, 10, 15)); // 15
console.log("Math.min(5, 10, 15):", Math.min(5, 10, 15)); // 5

// With arrays
const values = [5, 10, 15, 20];
console.log("Array values:", values);
console.log("Math.max(...values):", Math.max(...values)); // 20
console.log("Math.min(...values):", Math.min(...values)); // 5

// Power and square root
console.log("\nPowers and Roots:");
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("2 ** 3:", 2 ** 3); // 8 (same as Math.pow(2, 3))
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3

// Absolute value
console.log("\nAbsolute Value:");
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.abs(5):", Math.abs(5)); // 5

// Random numbers
console.log("\nRandom Numbers:");
console.log("Math.random():", Math.random()); // Between 0 and 1
console.log("Math.random():", Math.random()); // Different value each time

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random between 1-6:", getRandomInt(1, 6)); // Random dice roll
console.log("Random between 1-100:", getRandomInt(1, 100));

// Trigonometric functions
console.log("\nTrigonometric Functions:");
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1 (sine of 90°)
console.log("Math.cos(0):", Math.cos(0)); // 1 (cosine of 0°)
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ~1 (tangent of 45°)

// More math methods
console.log("\nOther Math Methods:");
console.log("Math.log(10):", Math.log(10)); // Natural logarithm
console.log("Math.log10(100):", Math.log10(100)); // Base 10 logarithm: 2
console.log("Math.exp(1):", Math.exp(1)); // e^1, same as Math.E
console.log("Math.sign(-5):", Math.sign(-5)); // -1 (negative)
console.log("Math.sign(5):", Math.sign(5)); // 1 (positive)
console.log("Math.sign(0):", Math.sign(0)); // 0

// ----- Number Formatting -----

console.log("\n----- Number Formatting -----");

const price = 12.3456789;
console.log("Original number:", price);

// Using toFixed() - returns a string
console.log("price.toFixed(2):", price.toFixed(2)); // "12.35" (rounds to 2 decimal places)
console.log("price.toFixed(0):", price.toFixed(0)); // "12" (rounds to integer)

// Using toPrecision() - returns a string
console.log("price.toPrecision(4):", price.toPrecision(4)); // "12.35" (4 significant digits)
console.log("price.toPrecision(2):", price.toPrecision(2)); // "12" (2 significant digits)

// Using toExponential() - returns a string
console.log("price.toExponential(2):", price.toExponential(2)); // "1.23e+1" (scientific notation)

// Localized formatting
console.log("\nLocalized Formatting:");

if (typeof Intl !== "undefined") {
  // Formatting as currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log("US Currency format:", formatter.format(price)); // $12.35

  // Different locales
  console.log("US locale:", new Intl.NumberFormat("en-US").format(1234567.89)); // 1,234,567.89
  console.log(
    "German locale:",
    new Intl.NumberFormat("de-DE").format(1234567.89)
  ); // 1.234.567,89
}

// ----- Number Conversions -----

console.log("\n----- Number Conversions -----");

// String to Number
console.log("String to Number:");
console.log("Number('123'):", Number("123")); // 123
console.log("parseInt('123'):", parseInt("123")); // 123
console.log("parseFloat('123.45'):", parseFloat("123.45")); // 123.45
console.log("Unary plus: +'123':", +"123"); // 123

// Handling non-numeric strings
console.log("\nHandling non-numeric strings:");
console.log("Number('123abc'):", Number("123abc")); // NaN
console.log("parseInt('123abc'):", parseInt("123abc")); // 123 (parses until non-digit)
console.log("parseFloat('123.45abc'):", parseFloat("123.45abc")); // 123.45

// Different bases
console.log("\nWorking with different bases:");
console.log("parseInt('1010', 2):", parseInt("1010", 2)); // 10 (binary to decimal)
console.log("parseInt('FF', 16):", parseInt("FF", 16)); // 255 (hex to decimal)
console.log("parseInt('0xFF'):", parseInt("0xFF")); // 255 (recognizes hex format)
console.log("parseInt('0b1010'):", parseInt("0b1010")); // 0 (doesn't recognize binary prefix)
console.log("Number('0b1010'):", Number("0b1010")); // 10 (recognizes binary prefix)
console.log("Number('0xFF'):", Number("0xFF")); // 255 (recognizes hex prefix)

// Number to String
console.log("\nNumber to String:");
console.log("String(123):", String(123)); // "123"
console.log("(123).toString():", (123).toString()); // "123"

// Different bases
console.log("\nConversion to different bases:");
console.log("(123).toString(2):", (123).toString(2)); // "1111011" (decimal to binary)
console.log("(123).toString(16):", (123).toString(16)); // "7b" (decimal to hex)
console.log("(123).toString(8):", (123).toString(8)); // "173" (decimal to octal)

// ----- Checking for Valid Numbers -----

console.log("\n----- Checking for Valid Numbers -----");

// Check if value is NaN
console.log("isNaN('hello'):", isNaN("hello")); // true
console.log("isNaN(123):", isNaN(123)); // false
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (stricter check)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// Check if value is finite
console.log("\nChecking for finite values:");
console.log("isFinite(123):", isFinite(123)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isFinite('123'):", isFinite("123")); // true (coerces to number)
console.log("Number.isFinite('123'):", Number.isFinite("123")); // false (no coercion)

// Check if value is an integer
console.log("\nChecking for integers:");
console.log("Number.isInteger(123):", Number.isInteger(123)); // true
console.log("Number.isInteger(123.45):", Number.isInteger(123.45)); // false

// Check if a number is a safe integer
console.log("\nChecking for safe integers:");
console.log(
  "Number.isSafeInteger(9007199254740991):",
  Number.isSafeInteger(9007199254740991)
); // true (maximum safe integer)
console.log(
  "Number.isSafeInteger(9007199254740992):",
  Number.isSafeInteger(9007199254740992)
); // false (beyond safe range)

// ----- Common Number Pitfalls and Solutions -----

console.log("\n----- Common Number Pitfalls and Solutions -----");

// Floating-point precision issues
console.log("Floating-point precision issues:");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004, not exactly 0.3
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false

// Solutions
console.log("\nSolutions:");

// Using toFixed for display
console.log("(0.1 + 0.2).toFixed(1):", (0.1 + 0.2).toFixed(1)); // "0.3"

// Multiply by power of 10, calculate, then divide
console.log("(0.1 * 10 + 0.2 * 10) / 10:", (0.1 * 10 + 0.2 * 10) / 10); // 0.3

// Use epsilon for comparison
function areAlmostEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}
console.log("areAlmostEqual(0.1 + 0.2, 0.3):", areAlmostEqual(0.1 + 0.2, 0.3)); // true

// BigInt for large numbers
console.log("\nBigInt for large integers:");
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(
  "MAX_SAFE_INTEGER + 1 === MAX_SAFE_INTEGER + 2:",
  Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
); // true (problem!)

// Using BigInt
console.log("9007199254740991n + 1n:", 9007199254740991n + 1n); // 9007199254740992n
console.log("9007199254740991n + 2n:", 9007199254740991n + 2n); // 9007199254740993n
console.log(
  "9007199254740991n + 1n === 9007199254740991n + 2n:",
  9007199254740991n + 1n === 9007199254740991n + 2n
); // false (correct!)

// ----- Practical Examples -----

console.log("\n----- Practical Examples -----");

// Currency calculations
console.log("Currency Calculations:");

function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
  };
}

console.log(calculateTotal(29.99, 2, 0.08));
// { subtotal: "59.98", tax: "4.80", total: "64.78" }

// Distance calculation
console.log("\nDistance Calculation (Pythagorean theorem):");

function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log("Distance from (0,0) to (3,4):", calculateDistance(0, 0, 3, 4)); // 5

// Temperature conversion
console.log("\nTemperature Conversion:");

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25)); // 77
console.log("77°F in Celsius:", fahrenheitToCelsius(77)); // 25
