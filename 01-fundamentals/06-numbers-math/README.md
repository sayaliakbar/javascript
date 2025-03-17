# JavaScript Numbers and Math

## What Are Numbers in JavaScript?

JavaScript has only one built-in numeric data type called `Number`, which represents both integer and floating-point values.

**Real-life example:** Think of a calculator that can work with both whole numbers (like 42) and decimal values (like 3.14).

## Creating Numbers

Numbers can be created directly or through conversions:

```javascript
// Direct creation
let integer = 42;
let floatingPoint = 3.14159;
let negative = -273.15;

// Using Number constructor
let fromString = Number("123"); // 123
let scientific = 1.6e-19; // Scientific notation: 1.6 × 10^-19

// Special numeric values
let notANumber = NaN;
let infinityValue = Infinity;
```

**Real-life example:** Recording different types of measurements - temperature, weight, or distance.

## Number Properties and Limits

JavaScript numbers come with some built-in properties:

```javascript
console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest positive number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // Not a Number
```

**Real-life example:** Just like there are physical limits to what can be measured with certain tools, JavaScript numbers have mathematical limits.

## Basic Math Operations

JavaScript supports standard arithmetic operations:

```javascript
let a = 10;
let b = 3;

let sum = a + b; // 13
let difference = a - b; // 7
let product = a * b; // 30
let quotient = a / b; // 3.3333...
let remainder = a % b; // 1 (modulo/remainder)
let power = a ** b; // 1000 (10^3, exponentiation)

// Increment and decrement
let counter = 0;
counter++; // 1 (post-increment)
++counter; // 2 (pre-increment)
counter--; // 1 (post-decrement)
--counter; // 0 (pre-decrement)
```

**Real-life example:** Everyday calculations like figuring out a restaurant bill - adding items, calculating tax, splitting the total.

## Operator Precedence

Just like in regular math, operations follow a specific order:

1. Parentheses `()`
2. Exponents `**`
3. Multiplication `*`, Division `/`, Remainder `%`
4. Addition `+`, Subtraction `-`

```javascript
let result = 2 + 3 * 4; // 14, not 20
let withParentheses = (2 + 3) * 4; // 20
```

**Real-life example:** Following the correct order in a recipe - you must mix ingredients before baking, not after.

## The Math Object

JavaScript provides a built-in `Math` object with properties and methods for mathematical operations:

### Math Properties

```javascript
console.log(Math.PI); // π (3.141592653589793)
console.log(Math.E); // Euler's number (2.718281828459045)
```

### Math Methods

#### Rounding Methods

```javascript
console.log(Math.round(4.7)); // 5 (to nearest integer)
console.log(Math.round(4.3)); // 4

console.log(Math.floor(4.7)); // 4 (round down)
console.log(Math.ceil(4.3)); // 5 (round up)

console.log(Math.trunc(4.7)); // 4 (truncate decimal part)
```

**Real-life example:** Rounding prices up or down to the nearest dollar.

#### Finding Extremes

```javascript
console.log(Math.max(5, 10, 15)); // 15
console.log(Math.min(5, 10, 15)); // 5

// With arrays (using spread syntax)
const values = [5, 10, 15];
console.log(Math.max(...values)); // 15
```

**Real-life example:** Finding the highest and lowest temperatures of the week.

#### Power and Square Root

```javascript
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.cbrt(27)); // 3 (cube root)
```

#### Absolute Value

```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

**Real-life example:** Calculating the distance between two points, regardless of direction.

#### Random Numbers

```javascript
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)

// Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // Random dice roll (1-6)
```

**Real-life example:** Simulating a dice roll or randomly selecting a winner from contestants.

#### Trigonometric Functions

```javascript
console.log(Math.sin(Math.PI / 2)); // 1 (sine of 90 degrees)
console.log(Math.cos(0)); // 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // 1 (tangent of 45 degrees)
```

**Real-life example:** Calculating heights, distances, or angles in engineering or physics.

## Number Formatting

### Using toFixed()

Formats a number with a specific number of decimal places:

```javascript
const price = 12.3456789;
console.log(price.toFixed(2)); // "12.35" (rounded to 2 decimal places, returns a string)
```

### Using toPrecision()

Formats a number to a specified length:

```javascript
const num = 123.456;
console.log(num.toPrecision(4)); // "123.5" (4 significant digits, returns a string)
```

**Real-life example:** Displaying currency values or scientific measurements with appropriate precision.

### Using Intl.NumberFormat

For more advanced formatting, including international number formats, JavaScript provides the `Intl.NumberFormat` API:

```javascript
// Format as currency
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatter.format(12.3456789)); // "$12.35"

// Different locales
console.log(new Intl.NumberFormat("en-US").format(1234567.89)); // "1,234,567.89"
console.log(new Intl.NumberFormat("de-DE").format(1234567.89)); // "1.234.567,89"

// Different formats
console.log(new Intl.NumberFormat("en-US", { style: "percent" }).format(0.25)); // "25%"
console.log(
  new Intl.NumberFormat("en-US", { style: "unit", unit: "celsius" }).format(25)
); // "25°C"
```

**Real-life example:** Displaying prices in an e-commerce site that serves customers in multiple countries.

## Number Conversions

Converting between different types and numbers:

```javascript
// String to Number
console.log(Number("123")); // 123
console.log(parseInt("123")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(+"123"); // 123 (unary plus operator)

// Handling non-numeric strings
console.log(Number("123abc")); // NaN
console.log(parseInt("123abc")); // 123 (parses until it reaches a non-digit)
console.log(parseFloat("123.45abc")); // 123.45

// Different bases
console.log(parseInt("1010", 2)); // 10 (binary to decimal)
console.log(parseInt("FF", 16)); // 255 (hexadecimal to decimal)

// Number to String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log((123).toString(2)); // "1111011" (decimal to binary)
console.log((123).toString(16)); // "7b" (decimal to hexadecimal)
```

**Real-life example:** Converting user input from a form (which comes as a string) into a number for calculations.

## Checking for Valid Numbers

```javascript
// Check if a value is NaN
console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false (more strict, first converts with Number())

// Check if a value is a finite number
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("123")); // true (coerces to number first)
console.log(Number.isFinite("123")); // false (more strict, no coercion)

// Check if a value is an integer
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.45)); // false

// Check if a number is safe integer
console.log(Number.isSafeInteger(9007199254740991)); // true (max safe integer)
console.log(Number.isSafeInteger(9007199254740992)); // false
```

**Real-life example:** Validating user input to ensure they entered a valid number.

## Common Number Pitfalls and Solutions

### Floating-Point Precision

JavaScript (like most programming languages) can have precision issues with floating-point arithmetic:

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004, not exactly 0.3
console.log(0.1 + 0.2 === 0.3); // false
```

**Solutions:**

1. **Use toFixed() for display:**

   ```javascript
   console.log((0.1 + 0.2).toFixed(1)); // "0.3"
   ```

2. **Multiply by a power of 10, calculate, then divide:**

   ```javascript
   console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
   ```

3. **Use a small epsilon value for comparisons:**
   ```javascript
   function areAlmostEqual(a, b, epsilon = 0.0001) {
     return Math.abs(a - b) < epsilon;
   }
   console.log(areAlmostEqual(0.1 + 0.2, 0.3)); // true
   ```

**Real-life example:** Financial calculations where small rounding errors could be significant.

### Handling Very Large Numbers

Standard JavaScript numbers can only safely represent integers up to 2^53 - 1.

**Solution: Use BigInt for larger integers:**

```javascript
const bigNumber = 9007199254740992n; // Note the 'n' suffix
const result = bigNumber + 1n;
console.log(result); // 9007199254740993n
```

**Real-life example:** Working with very large values like database IDs or in cryptography.

## Practical Examples

### Currency Calculations

```javascript
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
```

### Distance Calculation

```javascript
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(calculateDistance(0, 0, 3, 4)); // 5 (Pythagorean theorem)
```

### Temperature Conversion

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(25)); // 77
console.log(fahrenheitToCelsius(77)); // 25
```

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: JavaScript Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript.info: Numbers](https://javascript.info/number)
