# JavaScript Control Flow

Control flow refers to the order in which individual statements, instructions, or function calls are executed in a program. JavaScript provides several structures to control this flow, allowing you to make decisions, repeat actions, and organize code.

## Conditional Statements

Conditional statements let your program execute different instructions based on whether a specific condition evaluates to true or false.

### if Statement

The most basic conditional statement:

```javascript
if (condition) {
  // Code that runs when condition is true
}
```

**Real-life example:** If it's raining, take an umbrella.

### if...else Statement

Executes one block of code if the condition is true and another if it's false:

```javascript
if (condition) {
  // Code that runs when condition is true
} else {
  // Code that runs when condition is false
}
```

**Real-life example:** If it's raining, take an umbrella; otherwise, wear sunglasses.

### if...else if...else Statement

Checks multiple conditions in sequence:

```javascript
if (condition1) {
  // Code that runs when condition1 is true
} else if (condition2) {
  // Code that runs when condition1 is false but condition2 is true
} else {
  // Code that runs when both condition1 and condition2 are false
}
```

**Real-life example:** If it's raining, take an umbrella; if it's sunny, wear sunglasses; otherwise, wear a hat.

### Ternary Operator

A concise way to write simple if...else statements:

```javascript
const result = condition ? valueIfTrue : valueIfFalse;
```

**Real-life example:** Choose drink based on temperature: `const drink = hot ? "coffee" : "water";`

### Switch Statement

Evaluates an expression and executes code based on matching cases:

```javascript
switch (expression) {
  case value1:
    // Code to execute when expression equals value1
    break;
  case value2:
    // Code to execute when expression equals value2
    break;
  default:
  // Code to execute when expression doesn't match any case
}
```

**Real-life example:** Different actions based on a menu selection.

## Loops

Loops let you execute a block of code repeatedly.

### for Loop

Repeats a block of code a specific number of times:

```javascript
for (initialization; condition; increment / decrement) {
  // Code to repeat
}
```

**Real-life example:** Counting from 1 to 10.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### while Loop

Repeats a block of code as long as a condition is true:

```javascript
while (condition) {
  // Code to repeat
}
```

**Real-life example:** Keep washing dishes until there are none left.

### do...while Loop

Similar to while, but always executes the block of code at least once:

```javascript
do {
  // Code to repeat
} while (condition);
```

**Real-life example:** Ask someone to taste food, then ask if it needs more seasoning.

### for...of Loop (ES6)

Iterates over the values of an iterable object (like arrays):

```javascript
for (const item of iterableObject) {
  // Code to execute for each item
}
```

**Real-life example:** Check each apple in a basket for ripeness.

### for...in Loop

Iterates over the properties of an object:

```javascript
for (const key in object) {
  // Code to execute for each property
}
```

**Real-life example:** List all the features of a car.

## Break and Continue

Special statements to control loop execution:

### break

Exits the loop immediately:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // Logs 1, 2, 3, 4
}
```

**Real-life example:** Stop searching once you find what you need.

### continue

Skips the current iteration and continues with the next one:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Logs 1, 2, 4, 5
}
```

**Real-life example:** When checking a list of items, skip any that are already marked.

## Truthy and Falsy Values

In JavaScript, values are evaluated as booleans in conditional contexts:

### Falsy Values

The following values evaluate to false:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values

Almost everything else evaluates to true, including:

- Non-empty strings (`"hello"`)
- Numbers other than 0 (`42`, `-1`, `3.14`)
- Arrays (even empty ones `[]`)
- Objects (even empty ones `{}`)
- Functions

**Real-life example:** Checking if a user provided a value: `if (username) { ... }`

## Short-Circuit Evaluation

Logical operators in JavaScript employ short-circuit evaluation:

### AND (&&)

Returns the first falsy operand, or the last operand if all are truthy:

```javascript
const result = firstValue && secondValue;
```

**Real-life example:** Check prerequisites: `canDrive = hasLicense && isAdult`

### OR (||)

Returns the first truthy operand, or the last operand if all are falsy:

```javascript
const result = firstValue || secondValue;
```

**Real-life example:** Default values: `const name = userInput || "Guest"`

### Nullish Coalescing Operator (??) (ES2020)

Returns the right-hand operand only when the left one is `null` or `undefined`:

```javascript
const result = firstValue ?? secondValue;
```

**Real-life example:** Set default when value is missing (but allow 0 or empty string): `const count = userCount ?? 1`

## Best Practices

1. **Be explicit with conditions**:

   ```javascript
   // Better than if(user)
   if (user !== null && user !== undefined) { ... }
   ```

2. **Prefer early returns to reduce nesting**:

   ```javascript
   // Instead of this:
   function process(data) {
     if (isValid(data)) {
       if (hasPermission()) {
         // Actual logic here...
       } else {
         return "No permission";
       }
     } else {
       return "Invalid data";
     }
   }

   // Do this:
   function process(data) {
     if (!isValid(data)) return "Invalid data";
     if (!hasPermission()) return "No permission";

     // Actual logic here...
   }
   ```

3. **Avoid complex conditionals** by extracting them into functions:

   ```javascript
   // Instead of this:
   if (user.age >= 18 && user.country === "US" && !user.restrictions) {
     // Allow access
   }

   // Do this:
   function canAccessContent(user) {
     return user.age >= 18 && user.country === "US" && !user.restrictions;
   }

   if (canAccessContent(user)) {
     // Allow access
   }
   ```

4. **Prefer for-of loops** when iterating over arrays:

   ```javascript
   // Instead of:
   for (let i = 0; i < array.length; i++) {
     console.log(array[i]);
   }

   // Do this:
   for (const item of array) {
     console.log(item);
   }
   ```

5. **Use default values** with OR or nullish coalescing:

   ```javascript
   // Using OR (||) for falsy values
   const name = userName || "Guest";

   // Using nullish coalescing (??) only for null/undefined
   const count = userCount ?? 0; // Allows 0 as a valid value
   ```

## Error Handling

Error handling allows you to manage unexpected situations in your code gracefully.

### Basic try/catch

Wraps potentially error-throwing code in a try block and catches any errors that occur:

```javascript
try {
  // Code that might cause an error
  const result = riskyOperation();
} catch (error) {
  // Code that runs if an error occurs
  console.error("Something went wrong:", error.message);
}
```

**Real-life example:** Trying to open a door, but having a backup plan if it's locked.

### try/catch/finally

The finally block runs regardless of whether an error occurred or not:

```javascript
try {
  // Attempt something
  openFile();
} catch (error) {
  // Handle any errors
  console.error("Failed to open file:", error);
} finally {
  // This always runs
  cleanupResources();
}
```

**Real-life example:** Whether or not you successfully cook a meal, you still need to clean the kitchen afterward.

### Throwing Custom Errors

You can create and throw your own errors:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

**Real-life example:** Checking ingredients before starting to cook and stopping if something essential is missing.

### Error Types

JavaScript has several built-in error types:

- `Error`: Generic error
- `SyntaxError`: Invalid JavaScript syntax
- `TypeError`: Value is not of the expected type
- `ReferenceError`: Reference to a non-existent variable
- `RangeError`: Number outside of valid range

```javascript
try {
  let value = {};
  value.toUpperCase(); // TypeError: value.toUpperCase is not a function
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type error occurred:", error.message);
  } else {
    console.log("Some other error occurred:", error.message);
  }
}
```

## Practical Control Flow Patterns

Beyond basic control structures, several patterns help manage program flow effectively.

### Guard Clauses

Guard clauses are conditional statements that exit a function early:

```javascript
function processPayment(payment) {
  // Guard clauses
  if (!payment) return "No payment provided";
  if (payment.amount <= 0) return "Invalid amount";
  if (payment.status === "declined") return "Payment declined";

  // Main processing happens here
  return `Successfully processed $${payment.amount}`;
}
```

**Real-life example:** Checking prerequisites before starting a task.

### State Machine Pattern

Managing complex flows by defining states and transitions:

```javascript
function createOrderProcess() {
  return {
    state: "pending",

    approve() {
      if (this.state === "pending") {
        this.state = "approved";
        return true;
      }
      return false;
    },

    ship() {
      if (this.state === "approved") {
        this.state = "shipped";
        return true;
      }
      return false;
    },

    deliver() {
      if (this.state === "shipped") {
        this.state = "delivered";
        return true;
      }
      return false;
    },

    getState() {
      return this.state;
    },
  };
}

const order = createOrderProcess();
order.approve(); // Changes state to "approved"
order.ship(); // Changes state to "shipped"
console.log(order.getState()); // "shipped"
```

**Real-life example:** A package delivery system, where a package must follow specific stages.

### Command Pattern

Encapsulating actions as objects:

```javascript
const commands = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

function executeCommand(command, ...args) {
  if (command in commands) {
    return commands[command](...args);
  }
  return "Unknown command";
}

console.log(executeCommand("add", 10, 20)); // 30
console.log(executeCommand("multiply", 5, 4)); // 20
```

**Real-life example:** A remote control where each button performs a different action.

### Pub/Sub Pattern (Observer)

Components communicate through events:

```javascript
const events = {
  callbacks: {},

  subscribe(event, callback) {
    if (!this.callbacks[event]) this.callbacks[event] = [];
    this.callbacks[event].push(callback);
  },

  publish(event, data) {
    if (!this.callbacks[event]) return;
    this.callbacks[event].forEach((callback) => callback(data));
  },
};

// Usage
events.subscribe("userLoggedIn", (user) => {
  console.log(`Welcome, ${user.name}!`);
});

events.publish("userLoggedIn", { name: "Alex" }); // "Welcome, Alex!"
```

**Real-life example:** A notification system that alerts multiple services when something happens.

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Loops](https://javascript.info/while-for)
- [JavaScript.info: Error Handling](https://javascript.info/try-catch)
