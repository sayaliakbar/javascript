# JavaScript Function Basics

## What is a Function?

A function is a block of code designed to perform a specific task. It's like a mini-program within your program that can be "called" (executed) whenever you need it, as many times as needed.

**Real-life example:** Think of a function like a recipe. It takes ingredients (inputs), follows a set of steps, and produces a dish (output). You can use the same recipe multiple times with different ingredients to make variations of the dish.

## Why Use Functions?

1. **Reusability**: Write once, use many times
2. **Organization**: Break complex tasks into manageable pieces
3. **Maintenance**: Update code in one place instead of many
4. **Abstraction**: Hide complex implementation details

**Real-life example:** Instead of explaining how to make coffee from scratch every time, you can just say "make coffee" and people who know the process will understand.

## Function Declarations

The most common way to create a function:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"
```

Components of a function declaration:

- The `function` keyword
- A name (e.g., `greet`)
- Parameters in parentheses (e.g., `name`)
- Function body enclosed in braces `{ }`
- An optional `return` statement

**Key feature:** Function declarations are hoisted, which means they can be called before they are defined in the code.

## Function Expressions

Another way to create a function is by assigning it to a variable:

```javascript
const greet = function (name) {
  return "Hello, " + name + "!";
};

console.log(greet("Bob")); // "Hello, Bob!"
```

**Key difference from declarations:** Function expressions are not hoisted. They must be defined before they are called.

## Arrow Functions

Introduced in ES6, arrow functions provide a shorter syntax:

```javascript
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Even shorter for single-line functions:
const greetShort = (name) => "Hello, " + name + "!";

console.log(greetShort("Charlie")); // "Hello, Charlie!"
```

**When to use arrow functions:**

- For short, simple functions
- When you want to preserve the `this` value from the surrounding context
- For callback functions

**When to avoid arrow functions:**

- For methods in objects (where `this` should refer to the object)
- For constructors (arrow functions cannot be used with `new`)
- When using `arguments` object (arrow functions don't have their own `arguments`)

## Parameters and Arguments

**Parameters** are the variables listed in the function definition.
**Arguments** are the actual values passed to the function when it's called.

```javascript
// name and age are parameters
function introduce(name, age) {
  return "I'm " + name + " and I'm " + age + " years old.";
}

// "David" and 30 are arguments
console.log(introduce("David", 30)); // "I'm David and I'm 30 years old."
```

### Default Parameters

You can provide fallback values for parameters that aren't passed:

```javascript
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet("Eve")); // "Hello, Eve!"
console.log(greet()); // "Hello, Guest!"
```

### Rest Parameters

Collect multiple arguments into a single array parameter:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

**Real-life example:** Like a shopping bag that can hold a variable number of items.

## Return Values

Functions can send back a value using the `return` statement:

```javascript
function multiply(a, b) {
  return a * b; // Send back the product
}

const result = multiply(5, 3);
console.log(result); // 15
```

**Important points about return:**

- A function can only return one value (though it could be an array or object containing multiple values)
- When a `return` statement executes, the function stops running immediately
- If no return statement is specified, the function returns `undefined`

```javascript
function getPersonInfo(name, age) {
  // Return multiple values as an object
  return {
    name: name,
    age: age,
    isAdult: age >= 18,
  };
}

const person = getPersonInfo("Frank", 25);
console.log(person); // {name: "Frank", age: 25, isAdult: true}
```

## Function Scope

Variables declared inside a function are only accessible within that function:

```javascript
function createMessage() {
  const message = "Hello from inside the function!";
  console.log(message); // Works fine
}

createMessage();
// console.log(message); // Error: message is not defined
```

**Real-life example:** What happens in Vegas stays in Vegas. Variables in a function are like secrets that stay inside the function.

## Function vs. Method

When a function is a property of an object, it's called a method:

```javascript
const calculator = {
  add: function (a, b) {
    return a + b;
  },

  // Shorthand syntax (ES6)
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
```

## Immediately Invoked Function Expressions (IIFE)

Functions that run as soon as they are defined:

```javascript
(function () {
  const privateVar = "I am private";
  console.log(privateVar); // I am private
})();

// console.log(privateVar); // Error: privateVar is not defined
```

**Real-life example:** It's like a self-destructing message that executes once and then disappears.

## Higher-Order Functions

Functions that take other functions as arguments or return functions:

```javascript
// Function that takes another function as an argument
function executeOperation(x, y, operation) {
  return operation(x, y);
}

// Pass different functions as arguments
const sum = executeOperation(5, 3, (a, b) => a + b); // 8
const product = executeOperation(5, 3, (a, b) => a * b); // 15

// Function that returns a function
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Isaac")); // "Hello, Isaac!"
```

**Real-life example:** A manager (higher-order function) who delegates tasks to employees (functions passed as arguments).

## Callback Functions

Functions passed to other functions to be executed later:

```javascript
function processUserInput(callback) {
  const name = prompt("Please enter your name");
  callback(name);
}

function greet(name) {
  alert("Hello, " + name);
}

// Pass the greet function as a callback
processUserInput(greet);
```

**Real-life example:** Leaving your phone number so someone can call you back later.

## Pure vs. Impure Functions

### Pure Functions

- Always return the same result for the same inputs
- No side effects (don't modify external variables or state)

```javascript
// Pure function
function add(a, b) {
  return a + b;
}
```

### Impure Functions

- May return different results for the same inputs
- May have side effects

```javascript
// Impure function - modifies external state
let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}
```

**Real-life example:** A pure function is like a math formula (e.g., area = length × width). Given the same inputs, it always produces the same output and doesn't change anything else.

## Common Function Patterns

### Factory Functions

Functions that create and return objects:

```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
  };
}

const john = createPerson("John", 30);
console.log(john.greet()); // "Hello, my name is John and I'm 30 years old."
```

### Decorator Functions

Functions that enhance other functions:

```javascript
function logExecution(func) {
  return function (...args) {
    console.log(`Executing function with arguments: ${args}`);
    const result = func(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = logExecution(add);

loggedAdd(2, 3);
// Executing function with arguments: 2,3
// Function returned: 5
```

## Best Practices

1. **Name functions descriptively** - `calculateTotalPrice()` instead of `calc()`

2. **Keep functions focused** - Each function should do one thing well

3. **Keep functions small** - If a function is more than 20-30 lines, consider splitting it up

4. **Use comments to explain "why", not "what"** - The code should be clear enough to explain what it's doing

5. **Avoid global variables** - Use parameters and return values instead

6. **Return early** - Handle edge cases at the beginning of the function

   ```javascript
   function divide(a, b) {
     if (b === 0) {
       return "Cannot divide by zero";
     }

     return a / b;
   }
   ```

7. **Consider pure functions when possible** - They're easier to test and reason about

## Common Mistakes

1. **Forgetting to return a value**

   ```javascript
   // This function doesn't return anything (returns undefined implicitly)
   function multiply(a, b) {
     const result = a * b;
     // Missing return statement!
   }
   ```

2. **Confusing parameters and arguments**

3. **Overusing arrow functions** - Not all functions should be arrow functions

4. **Function that does too much** - Break large functions into smaller ones

5. **Ignoring return values** - Always consider what a function returns

## Additional Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info: Functions](https://javascript.info/function-basics)
- [Eloquent JavaScript: Functions](https://eloquentjavascript.net/03_functions.html)
