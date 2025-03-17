# JavaScript Data Types

## Understanding Data Types

Everything in JavaScript has a type. The data type determines what kind of operations you can perform on the data and how it behaves.

**Real-life example:** Just like different types of containers hold different things (a cup holds liquid, a box holds solid objects), different data types hold different kinds of information.

## Primitive Data Types

Primitive data types are the basic building blocks - simple, immutable (unchangeable) values.

### 1. String

Strings represent text data. You can create them with single quotes, double quotes, or backticks.

```javascript
let name = "John";
let greeting = "Hello!";
let message = `Welcome, ${name}!`; // Template literal - can include variables
```

**Real-life example:** A string is like a name tag - it's text that represents something.

```javascript
let firstName = "Emma";
let lastName = "Watson";
let fullName = firstName + " " + lastName; // Concatenation: "Emma Watson"
```

### 2. Number

Numbers represent both integers and decimal values. JavaScript has only one number type.

```javascript
let age = 25; // Integer
let price = 19.99; // Decimal
let temperature = -5; // Negative number
```

**Real-life example:** The temperature today (which can be whole, decimal, positive, or negative).

```javascript
let currentTemp = 72.5;
let newTemp = currentTemp + 5; // Math works as expected: 77.5
```

### 3. Boolean

Booleans have only two possible values: `true` or `false`. They represent yes/no, on/off situations.

```javascript
let isLoggedIn = true;
let hasPermission = false;
```

**Real-life example:** A light switch is either on (true) or off (false).

```javascript
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella!");
}
```

### 4. Undefined

When a variable is declared but not assigned a value, it has the type `undefined`.

```javascript
let futureValue;
console.log(futureValue); // undefined
```

**Real-life example:** An empty parking space - reserved but not yet filled with anything.

### 5. Null

`null` represents the intentional absence of any object value.

```javascript
let emptyValue = null;
```

**Real-life example:** A form field explicitly left blank (different from not touching it at all).

### 6. Symbol

Symbols are unique identifiers, useful for advanced object properties. Each Symbol is guaranteed to be unique.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false - they are different even with same description
```

**Real-life example:** A completely unique serial number that will never be duplicated.

### 7. BigInt

For extremely large integers (beyond the safe integer limit of Number).

```javascript
const hugeNumber = 9007199254740991n; // Note the 'n' at the end
```

**Real-life example:** Astronomical distances or financial calculations requiring perfect precision.

## Reference Data Types

Reference types are more complex and can hold collections of values and more complex entities.

### 1. Object

Objects store collections of data in key-value pairs.

```javascript
let person = {
  name: "Sarah",
  age: 28,
  isEmployed: true,
  hobbies: ["reading", "swimming"],
};

// Accessing object properties
console.log(person.name); // "Sarah"
console.log(person["age"]); // 28 (alternative access method)
```

**Real-life example:** A contact card with different fields (name, phone number, email).

### 2. Array

Arrays are ordered collections of values, accessed by index (position).

```javascript
let colors = ["red", "green", "blue"];
let mixedArray = [42, "hello", true, null];

// Accessing array elements (zero-indexed)
console.log(colors[0]); // "red" (first element)
console.log(colors[2]); // "blue" (third element)
```

**Real-life example:** A shopping list, where items are in a specific order.

```javascript
let shoppingList = ["milk", "eggs", "bread", "apples"];
shoppingList.push("cheese"); // Add to end: ["milk", "eggs", "bread", "apples", "cheese"]
```

### 3. Function

Functions are reusable blocks of code that perform a specific task.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow function
const add = (a, b) => a + b;
```

**Real-life example:** A recipe - input ingredients, follow steps, get output (food).

## The Special Case: typeof Operator

You can check a value's type with the `typeof` operator:

```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is actually a bug in JavaScript!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects in JavaScript)
console.log(typeof function () {}); // "function"
```

Note: To properly check if something is an array:

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ a: 1 })); // false
```

## Primitive vs Reference Types: A Key Difference

Understanding this distinction is crucial:

### Primitives are Copied by Value

When you assign a primitive to a new variable, you get an independent copy of the value.

```javascript
let a = 5;
let b = a; // b gets a copy of the value 5
a = 10; // Changing a doesn't affect b
console.log(b); // Still 5
```

**Real-life example:** If you copy a friend's essay by typing it yourself, then your friend modifies their original, your copy remains unchanged.

### Reference Types are Copied by Reference

When you assign a reference type to a new variable, both variables point to the same object in memory.

```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // Both variables point to the same object
obj1.name = "Bob"; // Modifying through obj1...
console.log(obj2.name); // "Bob" - obj2 sees the change too!
```

**Real-life example:** Two people having shortcuts to the same shared Google Doc - when one person edits it, the other sees the changes.

## Type Conversion

JavaScript allows converting between types:

### Explicit Conversion (You decide to convert)

```javascript
// String to Number
let stringNum = "42";
let actualNum = Number(stringNum); // 42 (as number)
let intNum = parseInt(stringNum); // 42 (as integer)
let floatNum = parseFloat("42.5"); // 42.5 (decimal preserved)

// Number to String
let num = 42;
let numAsString = String(num); // "42"
let alsoString = num.toString(); // "42"

// To Boolean
let truthyValue = Boolean(1); // true
let falsyValue = Boolean(0); // false
let emptyString = Boolean(""); // false
let nonEmptyString = Boolean("hello"); // true
```

**Real-life example:** Explicitly converting measurements - like converting a weight from pounds to kilograms.

### Implicit Conversion (JavaScript converts automatically)

This is called "type coercion" - JavaScript tries to help by automatically converting types:

```javascript
// String and number with + (string wins)
let result = "5" + 2; // "52" (number converted to string)

// String and number with other operators (number wins)
let difference = "10" - 5; // 5 (string converted to number)
let product = "10" * 2; // 20 (string converted to number)

// With comparison operators
console.log(5 == "5"); // true (values compared, type ignored)
console.log(5 === "5"); // false (strict equality - type matters)
```

**Real-life example:** If someone asks for "5 more minutes" but you give them 300 seconds - you automatically converted between units.

### Truthy and Falsy Values

In conditions, JavaScript converts values to boolean:

Falsy values (convert to `false`):

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy (converts to `true`).

```javascript
let username = "";
if (username) {
  // Won't run because empty string is falsy
}

let itemCount = 5;
if (itemCount) {
  // Will run because 5 is truthy
}
```

## Common Pitfalls and How to Avoid Them

1. **NaN is of type "number"**

   ```javascript
   console.log(typeof NaN); // "number" (surprising!)
   // Use Number.isNaN() to test for NaN
   ```

2. **Equality vs. Strict Equality**

   ```javascript
   // == checks value (with type conversion)
   // === checks value AND type (no conversion)
   console.log(5 == "5"); // true
   console.log(5 === "5"); // false (safer!)
   ```

3. **Empty arrays and objects are truthy**

   ```javascript
   if ([]) console.log("Empty array is truthy!"); // This will run
   if ({}) console.log("Empty object is truthy!"); // This will run
   ```

4. **Checking for null or undefined**
   ```javascript
   // Good practice for checking if something exists:
   if (value !== null && value !== undefined) {
     // Safe to use value
   }
   // Or more concisely:
   if (value != null) {
     // Also checks for undefined due to type coercion
     // Safe to use value
   }
   ```

## Additional Resources

- [MDN: JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info: Data Types](https://javascript.info/types)
