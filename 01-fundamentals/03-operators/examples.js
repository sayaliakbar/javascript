/**
 * JavaScript Operators - Examples
 * =============================
 */

// ----- Arithmetic Operators -----

// Basic math operations
const a = 10;
const b = 3;

const addition = a + b; // 13
const subtraction = a - b; // 7
const multiplication = a * b; // 30
const division = a / b; // 3.3333...
const modulus = a % b; // 1 (remainder after division)
const exponentiation = a ** b; // 1000 (10^3)

console.log(
  "Arithmetic:",
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  exponentiation
);

// Increment/decrement
let counter = 0;
console.log("Original:", counter); // 0
console.log("Post-increment:", counter++); // 0 (returns first, then increments)
console.log("After post-increment:", counter); // 1
console.log("Pre-increment:", ++counter); // 2 (increments first, then returns)
console.log("Post-decrement:", counter--); // 2 (returns first, then decrements)
console.log("After post-decrement:", counter); // 1
console.log("Pre-decrement:", --counter); // 0 (decrements first, then returns)

// ----- Assignment Operators -----

let x = 5;
console.log("Initial x:", x); // 5

x += 3; // x = x + 3
console.log("After +=:", x); // 8

x -= 2; // x = x - 2
console.log("After -=:", x); // 6

x *= 4; // x = x * 4
console.log("After *=:", x); // 24

x /= 3; // x = x / 3
console.log("After /=:", x); // 8

x %= 3; // x = x % 3
console.log("After %=:", x); // 2

x **= 3; // x = x ** 3
console.log("After **=:", x); // 8

// ----- Comparison Operators -----

const num1 = 5;
const num2 = "5";
const num3 = 8;

// Equality operators
console.log("num1 == num2:", num1 == num2); // true (loose equality - only checks value)
console.log("num1 === num2:", num1 === num2); // false (strict equality - checks value and type)
console.log("num1 != num3:", num1 != num3); // true (loose inequality)
console.log("num1 !== num2:", num1 !== num2); // true (strict inequality)

// Relational operators
console.log("num1 < num3:", num1 < num3); // true
console.log("num1 > num3:", num1 > num3); // false
console.log("num1 <= num2:", num1 <= num2); // true
console.log("num3 >= num1:", num3 >= num1); // true

// ----- Logical Operators -----

const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;

// Logical AND (&&) - both conditions must be true
console.log("Access to admin panel:", isLoggedIn && isAdmin); // true
console.log("Access to special feature:", isLoggedIn && hasPermission); // false

// Logical OR (||) - at least one condition must be true
console.log("Regular access:", isLoggedIn || hasPermission); // true
console.log("Any kind of permission:", hasPermission || isAdmin); // true

// Logical NOT (!) - reverses the boolean value
console.log("Not logged in:", !isLoggedIn); // false
console.log("Not has permission:", !hasPermission); // true

// Short-circuit evaluation
console.log("Short-circuit AND:", false && console.log("This will not print")); // false
console.log("Short-circuit OR:", true || console.log("This will not print")); // true

// Common pattern: Default values with OR
const userInput = "";
const username = userInput || "Guest"; // If userInput is falsy, use 'Guest'
console.log("Username:", username); // Guest

// Common pattern: Safe property access with AND
const user = null;
const userCity = user && user.address && user.address.city; // Prevents errors
console.log("User city:", userCity); // null (doesn't try to access user.address.city)

// ----- String Operators -----

const firstName = "John";
const lastName = "Doe";

// String concatenation
const fullName = firstName + " " + lastName;
console.log("Full name:", fullName); // John Doe

let greeting = "Hello, ";
greeting += fullName;
greeting += "!";
console.log("Greeting:", greeting); // Hello, John Doe!

// ----- Unary Operators -----

let score = 100;
console.log("Unary plus on number:", +score); // 100 (no change)

const scoreStr = "100";
console.log("Unary plus on string:", +scoreStr); // 100 (converts to number)

console.log("Unary minus:", -score); // -100
console.log("Unary not (true):", !true); // false
console.log("Unary not (false):", !false); // true
console.log("Unary not (non-boolean):", !"Hello"); // false (string is truthy)
console.log("Double not (non-boolean):", !!"Hello"); // true (converts to boolean)

// ----- Conditional (Ternary) Operator -----

const age = 20;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log("Allowed beverage:", beverage); // Juice

// Can be nested, but gets harder to read
const userType = isAdmin ? "Admin" : isLoggedIn ? "User" : "Guest";
console.log("User type:", userType); // Admin

// ----- Operator Precedence -----

const result1 = 2 + 3 * 4; // 14 (multiplication happens first)
const result2 = (2 + 3) * 4; // 20 (parentheses override precedence)
const result3 = 10 - 2 + 5; // 13 (left-to-right for same precedence)

console.log("Precedence examples:", result1, result2, result3);

// ----- Bitwise Operators -----

const bits1 = 5; // binary: 0101
const bits2 = 3; // binary: 0011

console.log("Bitwise AND:", bits1 & bits2); // 1 (0001)
console.log("Bitwise OR:", bits1 | bits2); // 7 (0111)
console.log("Bitwise XOR:", bits1 ^ bits2); // 6 (0110)
console.log("Bitwise NOT:", ~bits1); // -6 (inverts all bits)
console.log("Left shift:", bits1 << 1); // 10 (shifts bits left)
console.log("Right shift:", bits1 >> 1); // 2 (shifts bits right)

// ----- Practical Examples -----

// Example 1: Calculate total price with tax and discount
const basePrice = 100;
const taxRate = 0.07;
const hasDiscount = true;
const discountValue = 10;

const totalPrice =
  basePrice * (1 + taxRate) - (hasDiscount ? discountValue : 0);
console.log("Total price:", totalPrice); // 97 (100 * 1.07 - 10)

// Example 2: Check if a number is within a range
const testValue = 75;
const inRange = testValue >= 0 && testValue <= 100;
console.log("Value in range 0-100:", inRange); // true

// Example 3: Toggle a boolean state
let lightOn = false;
lightOn = !lightOn; // Toggle to true
console.log("Light switched to:", lightOn ? "ON" : "OFF"); // ON
lightOn = !lightOn; // Toggle to false
console.log("Light switched to:", lightOn ? "ON" : "OFF"); // OFF
