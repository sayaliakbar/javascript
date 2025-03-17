# JavaScript Variables

## What Are Variables?

Think of variables as labeled containers or boxes that store information in your program. Just like you might label a box "Winter Clothes" to remember what's inside, variables let you give names to pieces of data so you can use them later.

**Real-life example:** Imagine a scoreboard at a basketball game. The score is a variable - it has a name ("Home Team Score"), and its value changes throughout the game.

## Variable Declarations

In JavaScript, there are three ways to create (or "declare") variables:

### `let` - The Modern, Flexible Way

Use `let` when you need to create a variable whose value might change later.

```javascript
let score = 0; // At the start of the game
score = 10; // After some baskets are made
```

**Real-life example:** Your age is a variable that changes each year.

```javascript
let myAge = 25;
// On your birthday:
myAge = 26;
```

### `const` - For Values That Stay the Same

Use `const` when you have a value that should never change.

```javascript
const pi = 3.14159;
const daysInWeek = 7;
```

**Real-life example:** Your date of birth never changes, so it would be a constant.

```javascript
const birthYear = 1998;
// birthYear = 1999; // Error! Can't change a constant
```

### `var` - The Old Way (Not Recommended for New Code)

Before `let` and `const` existed, JavaScript used `var`. It works differently and can cause confusing bugs.

```javascript
var oldSchoolVariable = "Hello";
```

## Naming Conventions

Good variable names make your code easier to understand:

1. **Use camelCase:** First word lowercase, then capitalize the first letter of each new word

   ```javascript
   let firstName = "John";
   let totalScoreForTeam = 95;
   ```

2. **Be descriptive:** Choose names that explain what the variable is for

   ```javascript
   // Bad:
   let x = 42; // What does x represent?

   // Good:
   let userAge = 42; // Now we know what it means!
   ```

3. **Constants are often UPPERCASE**

   ```javascript
   const MAX_USERS = 100;
   const API_KEY = "abc123xyz";
   ```

4. **Cannot use reserved words** like `function`, `return`, `if`

5. **Cannot start with a number** (but can include numbers)
   ```javascript
   let player1Score = 10; // Valid
   // let 1playerScore = 10;  // Invalid!
   ```

## Variable Scope

"Scope" refers to where in your code a variable is visible and usable.

### Global Scope

Variables declared outside of any function or block are globally scoped - available everywhere.

```javascript
let globalMessage = "Everyone can see me!";

function someFunction() {
  console.log(globalMessage); // Works fine
}
```

**Real-life example:** A billboard is visible to everyone in town (global scope).

### Function Scope

Variables declared inside a function are only available inside that function.

```javascript
function calculateTotal() {
  let subtotal = 100; // Only exists inside this function
  let tax = subtotal * 0.07;
  return subtotal + tax;
}

// console.log(subtotal);  // Error! subtotal doesn't exist out here
```

**Real-life example:** Notes written in your personal diary are only visible when you open the diary (function scope).

### Block Scope

Variables declared with `let` or `const` inside a block (code between `{ }`) only exist in that block.

```javascript
if (true) {
  let blockScoped = "I only exist inside these curly braces";
  console.log(blockScoped); // Works
}
// console.log(blockScoped);  // Error! Variable doesn't exist here
```

But `var` ignores block scope (one reason to avoid it):

```javascript
if (true) {
  var leakyVariable = "I escape the block!";
}
console.log(leakyVariable); // Works, but potentially confusing!
```

**Real-life example:** What happens in a closed meeting room (block scope) should stay there, but sometimes information leaks out (like with `var`).

## Hoisting

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during code execution.

### Variable Hoisting

```javascript
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I was hoisted";

// The above code behaves as if written:
// var hoistedVar;
// console.log(hoistedVar);
// hoistedVar = "I was hoisted";
```

With `let` and `const`, declarations are hoisted but not initialized (called the "temporal dead zone"):

```javascript
// console.log(hoistedLet); // Error: Cannot access before initialization
let hoistedLet = "Not accessible before declaration";
```

### Function Hoisting

Function declarations are completely hoisted:

```javascript
sayHello(); // Works even though the function is defined below
function sayHello() {
  console.log("Hello!");
}
```

Function expressions using variables are not fully hoisted:

```javascript
// sayHi(); // Error if using let/const, undefined is not a function if using var
const sayHi = function () {
  console.log("Hi!");
};
```

**Real-life example:** Hoisting is like having your name on a restaurant reservation list (declaration is hoisted) but you can't order food until you actually arrive (initialization).

## When to Use Each Type

- **Use `const` by default** - If a value never needs to change, make it a constant
- **Use `let` when necessary** - When a variable's value needs to change
- **Avoid `var` in modern code** - It has confusing scope rules and is considered outdated

## Practical Tips

1. **Initialize variables** when you declare them

   ```javascript
   let name = "Alice"; // Better than just: let name;
   ```

2. **Declare variables at the top** of their scope

   ```javascript
   function calculateArea() {
     let width = 10; // Declare at top
     let height = 5; // Not scattered throughout

     let area = width * height;
     return area;
   }
   ```

3. **Use descriptive names** - Your future self will thank you!

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variables)
- [JavaScript.info: Variables](https://javascript.info/variables)
