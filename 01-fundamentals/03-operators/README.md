# JavaScript Operators

## What Are Operators?

Operators are symbols that tell JavaScript to perform specific actions. They're like the verbs of programming - they do things to values.

**Real-life example:** Think of a calculator. When you press the + button, you're using an operator to add numbers together.

## Arithmetic Operators

These operators perform mathematical calculations.

### Basic Math Operators

```javascript
let a = 5;
let b = 3;

let sum = a + b; // Addition: 8
let difference = a - b; // Subtraction: 2
let product = a * b; // Multiplication: 15
let quotient = a / b; // Division: 1.6666...
```

**Real-life example:** Calculating the total cost of items in your shopping cart.

```javascript
let applePrice = 0.5;
let appleCount = 4;
let totalAppleCost = applePrice * appleCount; // $2.00
```

### Special Arithmetic Operators

```javascript
let remainder = 10 % 3; // Modulus (remainder): 1
let power = 2 ** 3; // Exponentiation (power): 8
```

**Real-life examples:**

- Modulus: Determining if a number is even (x % 2 === 0)
- Exponentiation: Calculating compound interest (principal \* (1 + rate) \*\* years)

```javascript
// Is the year a leap year? (divisible by 4)
let year = 2024;
let isLeapYear = year % 4 === 0; // true
```

### Increment and Decrement

```javascript
let counter = 5;

counter++; // Increment: counter is now 6
counter--; // Decrement: counter is now 5 again

// Prefix vs. Postfix
let a = 5;
let b = ++a; // a is incremented to 6, THEN b gets assigned (b = 6)

let c = 5;
let d = c++; // d gets assigned c's value (5), THEN c is incremented (c = 6)
```

**Real-life example:** A counter on a website showing how many people liked a post.

## Assignment Operators

Assignment operators assign values to variables, often combining operations.

```javascript
let x = 10; // Basic assignment

// Compound assignment
x += 5; // Same as: x = x + 5 (x is now 15)
x -= 3; // Same as: x = x - 3 (x is now 12)
x *= 2; // Same as: x = x * 2 (x is now 24)
x /= 4; // Same as: x = x / 4 (x is now 6)
x %= 4; // Same as: x = x % 4 (x is now 2)
x **= 3; // Same as: x = x ** 3 (x is now 8)
```

**Real-life example:** Keeping track of your bank account balance.

```javascript
let bankBalance = 1000;
// Deposit $100
bankBalance += 100; // Now $1100
// Spend $50
bankBalance -= 50; // Now $1050
```

## Comparison Operators

Comparison operators compare values and return a boolean result (true or false).

```javascript
let a = 5;
let b = "5";
let c = 10;

// Equality
console.log(a == b); // true (loose equality, only checks value)
console.log(a === b); // false (strict equality, checks value AND type)

console.log(a != c); // true (loose inequality)
console.log(a !== b); // true (strict inequality)

// Relational
console.log(a < c); // true (less than)
console.log(a > c); // false (greater than)
console.log(a <= b); // true (less than or equal)
console.log(c >= 10); // true (greater than or equal)
```

**Real-life example:** Checking if someone is old enough to drive.

```javascript
let age = 16;
let minimumDrivingAge = 16;

let canDrive = age >= minimumDrivingAge; // true
```

## Logical Operators

Logical operators work with boolean values and are used for making decisions based on multiple conditions.

```javascript
let isWeekend = true;
let isHoliday = false;
let hasWork = true;

// Logical AND (&&) - ALL conditions must be true
let dayOff = isWeekend || isHoliday; // true (at least one is true)

// Logical OR (||) - At least ONE condition must be true
let needToWork = hasWork && !dayOff; // false (dayOff is true, so !dayOff is false)

// Logical NOT (!) - Reverses the boolean value
let isWeekday = !isWeekend; // false (opposite of isWeekend)
```

**Real-life example:** Deciding if you can go to a friend's party.

```javascript
let finishedHomework = true;
let hasPermission = true;
let feelingWell = true;

let canGoToParty = finishedHomework && hasPermission && feelingWell; // true
```

### Short-Circuit Evaluation

Logical operators evaluate from left to right and stop as soon as the result is determined:

```javascript
// With &&, if first value is false, second one isn't evaluated
let result1 = false && expensiveCalculation(); // expensiveCalculation never runs

// With ||, if first value is true, second one isn't evaluated
let result2 = true || expensiveCalculation(); // expensiveCalculation never runs
```

**Real-life example:** Checking if it's safe to use an item.

```javascript
// Check if an object exists before trying to use its properties
let user = null;
let userName = user && user.name; // Will be null, doesn't cause an error
```

## String Operators

The `+` operator can concatenate (join) strings:

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"
```

You can also use the `+=` assignment operator with strings:

```javascript
let message = "Hello";
message += " World"; // "Hello World"
```

**Real-life example:** Building a greeting message.

```javascript
let customerName = "Maria";
let greeting = "Welcome back, " + customerName + "!"; // "Welcome back, Maria!"
```

## Unary Operators

Unary operators work with only one value.

```javascript
let a = 5;
let b = -a; // Unary negation: -5

let c = "123";
let d = +c; // Unary plus: converts to number 123

let isActive = true;
let isInactive = !isActive; // Logical NOT: false
```

**Real-life example:** Converting user input (which is always a string) to a number.

```javascript
let userInput = "42";
let userAge = +userInput; // Converts to number 42
```

## Conditional (Ternary) Operator

The ternary operator is a compact way to write an if-else statement:

```javascript
// syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let message = age >= 18 ? "Adult" : "Minor"; // "Adult"
```

**Real-life example:** Displaying different messages based on a condition.

```javascript
let temperature = 35;
let weatherWarning = temperature > 30 ? "Stay hydrated!" : "Enjoy the day!";
```

## Operator Precedence

Just like in math, some operators have higher precedence (priority) than others:

1. Parentheses `()`
2. Increment/Decrement `++` `--`
3. Unary operators `+` `-` `!`
4. Multiplication/Division `*` `/` `%`
5. Addition/Subtraction `+` `-`
6. Comparison `<` `>` `<=` `>=`
7. Equality `==` `!=` `===` `!==`
8. Logical AND `&&`
9. Logical OR `||`
10. Assignment `=` `+=` `-=` etc.

```javascript
// Precedence makes a difference!
let result1 = 2 + 3 * 4; // 14 (not 20, because * happens first)
let result2 = (2 + 3) * 4; // 20 (parentheses override precedence)
```

**Real-life example:** Following a recipe - the order of operations matters!

```javascript
// Making coffee:
// 1. Grind beans
// 2. Add water
// 3. Brew
// Changing the order gives very different results!
```

## Bitwise Operators

These operators work with the individual bits of numbers. For beginners, you typically won't need these right away.

```javascript
let a = 5; // Binary: 101
let b = 3; // Binary: 011

let bitwiseAND = a & b; // 1 (both bits must be 1)
let bitwiseOR = a | b; // 7 (at least one bit must be 1)
let bitwiseXOR = a ^ b; // 6 (exactly one bit must be 1)
let bitwiseNOT = ~a; // -6 (inverts all bits)
```

## Common Patterns and Tips

### Checking if a Value Exists

```javascript
// Check if a value is not null or undefined
if (value != null) {
  // Safe to use value
}
```

### Convert to Boolean

```javascript
let hasPermission = true;
let isActive = false;
let isActiveAndHasPermission = !!hasPermission && !!isActive; // false
```

### Default Values

```javascript
// Set default if value is null, undefined, or some other falsy value
let userName = userInput || "Guest";
```

### Multiple Conditions

```javascript
// Check if value is in a range
let isTeenager = age >= 13 && age <= 19;

// Check if value matches one of several options
let isWeekend = day === "Saturday" || day === "Sunday";
```

## Real-World Application Examples

### Form Validation

```javascript
let username = "user123";
let password = "pass456";
let rememberMe = true;

let isUsernameValid = username.length >= 5;
let isPasswordValid = password.length >= 8;
let canLogin = isUsernameValid && isPasswordValid;

let loginMessage = canLogin ? "Login successful!" : "Invalid credentials";
```

### Shopping Cart Calculation

```javascript
let subtotal = 100;
let isVIP = true;
let discountRate = isVIP ? 0.15 : 0.05;
let discount = subtotal * discountRate;
let shipping = subtotal > 50 ? 0 : 10;
let total = subtotal - discount + shipping;

console.log(`Subtotal: $${subtotal}`);
console.log(`Discount: $${discount}`);
console.log(`Shipping: $${shipping}`);
console.log(`Total: $${total}`);
```

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [JavaScript.info: Operators](https://javascript.info/operators)
