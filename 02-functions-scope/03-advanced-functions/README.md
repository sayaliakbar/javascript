# Advanced JavaScript Functions

## Introduction

Advanced function techniques are essential tools in a JavaScript developer's toolkit. They enable more elegant code organization, better abstraction, and more efficient solutions to complex problems.

## Higher-Order Functions

Higher-order functions either:

1. Accept functions as arguments, or
2. Return functions as results

They allow for powerful abstractions and are fundamental to functional programming.

### Examples

```javascript
// Function that accepts a function as an argument
function executeOperation(x, y, operation) {
  return operation(x, y);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(executeOperation(5, 3, add)); // 8
console.log(executeOperation(5, 3, multiply)); // 15

// Function that returns a function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Real-world use cases:**

- Array methods like `map`, `filter`, and `reduce`
- Event handlers
- Middleware in Express.js
- React component composition

## Pure Functions vs Side Effects

### Pure Functions

A function is "pure" if:

1. Given the same input, it always returns the same output
2. It has no side effects (doesn't modify external state)

```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Pure function
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}
```

### Impure Functions (With Side Effects)

These functions modify state outside their scope or depend on external state.

```javascript
let counter = 0;

// Impure function (modifies external state)
function incrementCounter() {
  counter++;
  return counter;
}

// Impure function (depends on external state)
function generateRandomNumber() {
  return Math.random();
}
```

**Benefits of pure functions:**

- Easier to test
- More predictable
- Can be cached (memoization)
- Easier to parallelize
- Avoid unexpected bugs

## Immediately Invoked Function Expressions (IIFE)

An IIFE is a function that runs as soon as it is defined.

```javascript
(function () {
  const privateData = "I'm private";
  console.log(privateData);
})();

// privateData is not accessible here
```

**Use cases for IIFEs:**

- Creating private scopes
- Avoiding global namespace pollution
- Module pattern (pre-ES6)
- Running async functions right away

## Function Currying and Composition

### Currying

Currying transforms a function that takes multiple arguments into a series of functions that each take a single argument.

```javascript
// Normal function
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6

// With arrow functions
const arrowCurriedAdd = (a) => (b) => (c) => a + b + c;
```

### Function Composition

Function composition combines two or more functions to create a new function.

```javascript
const double = (x) => x * 2;
const square = (x) => x * x;

// Composed function: applies square first, then double
const doubleSquare = (x) => double(square(x));

console.log(doubleSquare(3)); // 18

// Helper for function composition
const compose = (f, g) => (x) => f(g(x));
const doubleSquare2 = compose(double, square);

console.log(doubleSquare2(3)); // 18

// Multiple composition
const compose3 = (f, g, h) => (x) => f(g(h(x)));
```

**Benefits of currying and composition:**

- Creates reusable, specialized functions
- Makes code more readable and modular
- Enables point-free style programming
- Promotes function reuse

## Recursion

Recursion is when a function calls itself to solve a problem.

```javascript
// Factorial using recursion
function factorial(n) {
  // Base case
  if (n <= 1) return 1;

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
```

### When to Use Recursion

Recursion is especially useful for:

1. Tree structures (DOM manipulation, file systems)
2. Algorithms like merge sort, quicksort, binary search
3. Problems that can be broken down into similar sub-problems
4. Situations where the iterative approach would be complex

### Recursion Patterns

1. **Linear recursion** - Function calls itself once per invocation
2. **Binary recursion** - Function calls itself twice per invocation (e.g., merge sort)
3. **Tail recursion** - Recursive call is the last operation in the function

```javascript
// Example: Traversing nested objects with recursion
function deepPrint(obj, indent = 0) {
  const spaces = " ".repeat(indent * 2);

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      console.log(`${spaces}${key}:`);
      deepPrint(value, indent + 1);
    } else {
      console.log(`${spaces}${key}: ${value}`);
    }
  }
}

const nestedObject = {
  name: "John",
  details: {
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  },
};

deepPrint(nestedObject);
```

### Avoiding Infinite Recursion

Always ensure:

1. A proper base case exists
2. The recursive calls move toward the base case
3. Stack overflow limits are considered for deep recursion

## Best Practices

1. **Pure functions** - Use when possible for predictable results
2. **Higher-order functions** - Use for abstraction and code reuse
3. **Composition over inheritance** - Prefer function composition for code organization
4. **Use recursion carefully** - Consider performance implications
5. **Arrow functions** - Use for short callbacks and to maintain lexical `this`

## Common Pitfalls

1. **Infinite recursion** - Missing base cases or improper progression
2. **Callback hell** - Nesting too many callbacks
3. **Overusing currying** - Can lead to less readable code
4. **Side effects** - Hidden side effects cause bugs
5. **Stack overflow** - Deep recursion without tail call optimization

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functional Programming in JavaScript](https://eloquentjavascript.net/1st_edition/chapter6.html)
- [JavaScript: The Good Parts by Douglas Crockford](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/scope%20%26%20closures)
