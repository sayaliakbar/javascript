# JavaScript Scope and Closures

## Introduction

Understanding scope and closures is fundamental to mastering JavaScript. These concepts affect how variables are accessed, how memory is managed, and enable powerful programming patterns that are essential for modern JavaScript development. Whether you're building applications with modern frameworks like React or writing server-side code with Node.js, a solid grasp of these concepts will help you write more efficient and maintainable code.

## Understanding Scope in JavaScript

Scope determines the accessibility and visibility of variables, functions, and objects in your code. It creates a context where variables and functions live and can be referenced.

**Real-life example:** Think of scope like rooms in a house. Variables defined in one room (scope) may not be visible in another room, but variables defined in the main hall (global scope) are visible everywhere.

## Types of Scope

JavaScript has several types of scope:

### Global Scope

Variables declared outside of any function or block belong to the global scope and can be accessed from anywhere in the code.

```javascript
// Global scope
const globalVar = "I'm global";

function someFunction() {
  console.log(globalVar); // Accessible here
}

someFunction();
console.log(globalVar); // Accessible here too
```

**Best practice:** Minimize use of global variables to avoid naming conflicts and unintended side effects.

### Function (Local) Scope

Variables declared inside a function are only accessible within that function.

```javascript
function myFunction() {
  // Function scope
  const localVar = "I'm local";
  console.log(localVar); // Accessible
}

myFunction();
// console.log(localVar); // Error: localVar is not defined
```

### Block Scope

Introduced with ES6, variables declared with `let` and `const` inside a block (enclosed by `{}`) are only accessible within that block.

```javascript
if (true) {
  // Block scope
  let blockVar = "I'm in a block";
  const anotherBlockVar = "Me too";
  var notActuallyBlockScoped = "I leak out!";

  console.log(blockVar); // Accessible
}

// console.log(blockVar); // Error: blockVar is not defined
// console.log(anotherBlockVar); // Error: anotherBlockVar is not defined
console.log(notActuallyBlockScoped); // Accessible (var doesn't respect block scope)
```

**Important:** `var` declarations are function-scoped, not block-scoped.

### Lexical Scope

JavaScript uses lexical scoping, which means that functions are executed in the scope where they were defined, not where they are called.

```javascript
const outerVar = "I'm from the outer scope";

function outerFunction() {
  const innerVar = "I'm from the inner scope";

  function innerFunction() {
    console.log(outerVar); // Accessible from parent's parent scope
    console.log(innerVar); // Accessible from parent scope
  }

  innerFunction();
}

outerFunction();
```

## Block Scope vs Function Scope: A Clear Comparison

Understanding the difference between block scope and function scope is crucial in JavaScript:

| Feature             | Function Scope (`var`)            | Block Scope (`let`/`const`)               |
| ------------------- | --------------------------------- | ----------------------------------------- |
| Scope boundary      | Limited by function               | Limited by any code block `{}`            |
| Hoisting            | Hoisted with `undefined` value    | Hoisted but in "temporal dead zone"       |
| Redeclaration       | Allows redeclaration              | Prevents redeclaration in same scope      |
| Global declarations | Creates property on global object | Does not create property on global object |

```javascript
function scopeExample() {
  // Function scope
  var functionScoped = "I'm function scoped";

  if (true) {
    // Block scope
    let blockScoped = "I'm block scoped";
    var stillFunctionScoped = "I seem block scoped but I'm not";

    console.log(functionScoped); // Accessible
    console.log(blockScoped); // Accessible
  }

  console.log(functionScoped); // Accessible
  console.log(stillFunctionScoped); // Accessible
  // console.log(blockScoped);        // Error: not defined
}
```

## Scope Chain

When code tries to access a variable, JavaScript looks it up in the current scope first. If not found, it looks up the outer scope, continuing up the chain until it reaches the global scope.

```javascript
const global = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";

    console.log(innerVar); // Looks in inner scope ✓
    console.log(outerVar); // Not in inner scope, looks in outer scope ✓
    console.log(global); // Not in inner or outer scope, looks in global scope ✓
  }

  inner();
}

outer();
```

**Real-life example:** Like a child asking for permission - first they ask the immediate parent, then a grandparent if needed, and so on.

## Variable Shadowing

When a variable in an inner scope has the same name as a variable in an outer scope, it "shadows" the outer variable.

```javascript
const value = "global";

function shadowExample() {
  const value = "local"; // Shadows the global 'value'
  console.log(value); // "local"
}

shadowExample();
console.log(value); // "global" (remains unchanged)
```

## Hoisting

JavaScript "hoists" (moves) declarations to the top of their containing scope during compilation.

### Function Declaration Hoisting

Function declarations are fully hoisted - you can call them before they're defined in the code.

```javascript
// This works because of hoisting
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

### Variable Hoisting

`var` declarations are hoisted but not their initializations, leading to potential confusion:

```javascript
console.log(hoistedVar); // undefined (not an error)
var hoistedVar = "I'm hoisted";

// The above is interpreted as:
// var hoistedVar;
// console.log(hoistedVar);
// hoistedVar = "I'm hoisted";
```

`let` and `const` declarations are also hoisted but not initialized, resulting in a "temporal dead zone" where accessing them before declaration throws an error:

```javascript
// console.log(blockVar); // Error: Cannot access 'blockVar' before initialization
let blockVar = "I'm block scoped";
```

## Understanding Closures

A closure is a function that remembers and accesses variables from the scope in which it was created, even when the function is executed outside that scope.

### Basic Closure Example

```javascript
function createGreeter(greeting) {
  // The inner function "closes over" the greeting variable
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayBonjour = createGreeter("Bonjour");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayBonjour("Bob")); // "Bonjour, Bob!"
```

**Real-life example:** Think of a closure like a backpack that a function carries around, containing the variables it needs from its original environment.

### Practical Uses of Closures

#### 1. Data Privacy / Encapsulation

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

#### 2. Function Factory

Creating specialized functions with preset parameters:

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
```

#### 3. Event Handlers with Preserved Data

```javascript
function setupButtonHandler(buttonId, message) {
  const button = document.getElementById(buttonId);

  button.addEventListener("click", function () {
    // The event handler "remembers" the message variable
    console.log(message);
  });
}

setupButtonHandler("btn1", "Button 1 was clicked!");
setupButtonHandler("btn2", "Button 2 was clicked!");
```

#### 4. Memoization (Caching Results)

```javascript
function createMemoizedFunction(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
      console.log(`Calculating result for ${arg}`);
    } else {
      console.log(`Returning cached result for ${arg}`);
    }
    return cache[arg];
  };
}

// Example: memoized factorial function
const factorial = createMemoizedFunction((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calculates for 1,2,3,4,5
console.log(factorial(5)); // Uses cached result
```

## Why Understanding Closures Matters in Modern JavaScript

Closures are pervasive in modern JavaScript development:

1. **React Hooks** - Hooks like `useState` and `useEffect` leverage closures to maintain state and side effects
2. **Async Programming** - Callbacks and promises rely on closures to access surrounding scope
3. **Module Systems** - ES6 modules and CommonJS use closure-like mechanisms for encapsulation
4. **State Management** - Libraries like Redux use closures for pure functions and middleware
5. **Event Handling** - Browser events and custom event systems utilize closures extensively

## Common Closure Gotchas

### The Loop Variable Problem

```javascript
// Problematic code
function createFunctions() {
  const funcs = [];

  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i); // Will always log the final value of i
    });
  }

  return funcs;
}

const functions = createFunctions();
functions[0](); // 3 (not 0 as might be expected)
functions[1](); // 3
functions[2](); // 3
```

Solutions:

1. **Using `let` instead of `var`**:

   ```javascript
   for (let i = 0; i < 3; i++) {
     funcs.push(function () {
       console.log(i); // Each iteration gets its own i
     });
   }
   ```

2. **Using an IIFE**:
   ```javascript
   for (var i = 0; i < 3; i++) {
     funcs.push(
       (function (index) {
         return function () {
           console.log(index); // Each function gets its own copy of i
         };
       })(i)
     );
   }
   ```

### Module Pattern

A powerful use of closures to create private variables and methods:

```javascript
const calculator = (function () {
  // Private variables
  let result = 0;

  // Return an object with public methods
  return {
    add(value) {
      result += value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return this;
    },
  };
})();

calculator.add(5).add(10).subtract(3);
console.log(calculator.getResult()); // 12
// console.log(calculator.result); // undefined - can't access private variable
```

## Memory Considerations

Closures can lead to memory issues if not used carefully, as they prevent variables they reference from being garbage collected.

```javascript
function createLargeArray() {
  const largeArray = new Array(1000000).fill("data");

  return function () {
    // This function holds a reference to largeArray
    console.log(`Array length: ${largeArray.length}`);
  };
}

const printArrayInfo = createLargeArray(); // largeArray stays in memory
```

To solve this:

```javascript
function createLargeArray() {
  const largeArray = new Array(1000000).fill("data");
  const length = largeArray.length; // Store only what's needed

  // Now largeArray can be garbage collected
  return function () {
    console.log(`Array length: ${length}`);
  };
}
```

## Key Takeaways

- **Scope** determines where variables are accessible in your code
- **Global scope** variables are accessible everywhere but should be used sparingly
- **Function scope** variables are confined to their containing function
- **Block scope** variables (using `let`/`const`) are confined to their containing block
- **Hoisting** moves declarations to the top of their scope, but behaves differently for `var`, `let`/`const`, and functions
- **Closures** allow functions to maintain access to their creation scope even when executed elsewhere
- **Practical closures** enable data privacy, function factories, memoization, and module patterns
- **Memory management** is important when working with closures to prevent memory leaks

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN: Variable scope and hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
- [JavaScript.info: Variable scope, closure](https://javascript.info/closure)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)
