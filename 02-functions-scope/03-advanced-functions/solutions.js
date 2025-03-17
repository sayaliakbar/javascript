/**
 * Advanced Functions - Exercise Solutions
 * -----------------------------
 */

/**
 * Exercise 1: Higher-Order Functions
 */
function mapArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Test with different callbacks
const numbers = [1, 2, 3, 4, 5];

const doubled = mapArray(numbers, (num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const asStrings = mapArray(numbers, (num) => String(num));
console.log("As strings:", asStrings); // ['1', '2', '3', '4', '5']

const squareRoots = mapArray(numbers, (num) => Math.sqrt(num));
console.log("Square roots:", squareRoots); // [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

/**
 * Exercise 2: Pure Functions
 */

// Explanations:
// 1. multiply(a, b) - PURE: always returns the same output for the same input, no side effects
// 2. getRandomBetween(min, max) - IMPURE: returns different results for the same input
// 3. addToTotal(value) - IMPURE: modifies external state (total)
// 4. truncateString(str) - PURE: always returns the same output for the same input, no side effects

// Transform addToTotal to pure function
function pureAddToTotal(currentTotal, value) {
  return currentTotal + value;
}

// Usage example
let total = 0;
total = pureAddToTotal(total, 5);
console.log("Total after adding 5:", total); // 5
total = pureAddToTotal(total, 10);
console.log("Total after adding 10:", total); // 15

/**
 * Exercise 3: Immediately Invoked Function Expressions (IIFE)
 */
const nameManager = (function () {
  // Private data
  const names = [];

  // Public API
  return {
    add(name) {
      names.push(name);
      return names.length;
    },

    remove(name) {
      const index = names.indexOf(name);
      if (index !== -1) {
        names.splice(index, 1);
        return true;
      }
      return false;
    },

    getAll() {
      // Return a copy to prevent direct access
      return [...names];
    },
  };
})();

// Using the nameManager
console.log("\nName Manager:");
nameManager.add("Alice");
nameManager.add("Bob");
nameManager.add("Charlie");
console.log("All names:", nameManager.getAll()); // ['Alice', 'Bob', 'Charlie']

nameManager.remove("Bob");
console.log("After removal:", nameManager.getAll()); // ['Alice', 'Charlie']

// Try to access the original array (won't work)
console.log("Direct access to names array:", typeof names); // undefined

/**
 * Exercise 4: Function Currying and Composition
 */
// 1. Curry function
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

// Functions to be curried
const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const prefix = (prefix, str) => `${prefix}${str}`;

// Curried versions
const curriedAdd = curry(add);
const curriedDivide = curry(divide);
const curriedPrefix = curry(prefix);

console.log("\nCurrying:");
console.log("curriedAdd(5)(3):", curriedAdd(5)(3)); // 8
console.log("curriedDivide(10)(2):", curriedDivide(10)(2)); // 5
console.log(
  'curriedPrefix("Hello ")("World"):',
  curriedPrefix("Hello ")("World")
); // Hello World

// 3. Compose function
function compose(...functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

// Functions to compose
const addFive = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const subtractThree = (x) => x - 3;

// Composed function
const mathOperation = compose(subtractThree, multiplyByTwo, addFive);

console.log("\nComposition:");
console.log("mathOperation(10):", mathOperation(10)); // ((10 + 5) * 2) - 3 = 27

/**
 * Exercise 5: Recursion
 */
// 1. Sum nested arrays
function sumNestedArrays(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If element is an array, recursively sum it
      sum += sumNestedArrays(arr[i]);
    } else if (typeof arr[i] === "number") {
      // If element is a number, add it to sum
      sum += arr[i];
    }
  }

  return sum;
}

console.log("\nRecursion:");
console.log(
  "sumNestedArrays([1, 2, [3, 4], [[5, 6], 7]]):",
  sumNestedArrays([1, 2, [3, 4], [[5, 6], 7]])
); // 28

// 2. Deep clone function
function deepClone(input) {
  // Handle primitive types
  if (input === null || typeof input !== "object") {
    return input;
  }

  // Handle arrays
  if (Array.isArray(input)) {
    return input.map((item) => deepClone(item));
  }

  // Handle objects
  const cloned = {};
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      cloned[key] = deepClone(input[key]);
    }
  }

  return cloned;
}

// Test deep clone
const original = {
  a: 1,
  b: { c: 2 },
  d: [3, 4, { e: 5 }],
};
const cloned = deepClone(original);

original.b.c = 100;
original.d[2].e = 500;

console.log("Original after modification:", original);
console.log("Cloned (should be unchanged):", cloned);

// 3. Find value in object
function findValueInObject(obj, key) {
  // Check if this object has the key
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  // Search in object properties
  for (const prop in obj) {
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      const result = findValueInObject(obj[prop], key);
      if (result !== null) {
        return result;
      }
    }
  }

  // Key not found
  return null;
}

const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};

console.log('findValueInObject for "c":', findValueInObject(nestedObj, "c")); // 2
console.log('findValueInObject for "e":', findValueInObject(nestedObj, "e")); // 3
console.log('findValueInObject for "z":', findValueInObject(nestedObj, "z")); // null

/**
 * Challenge Exercise: Advanced Function Applications
 */

// 1. Memoize function
function memoize(fn) {
  const cache = {};

  // Create the memoized function
  function memoized(...args) {
    // Create a key from the arguments
    const key = JSON.stringify(args);

    // Check if we have a cached result
    if (!(key in cache)) {
      // Calculate and store the result
      cache[key] = fn(...args);
    }

    return cache[key];
  }

  // Add the cache as a property of the function
  memoized.cache = cache;

  return memoized;
}

// Test memoization with an expensive calculation
function expensiveCalculation(n) {
  console.log(`Calculating fibonacci(${n})...`);
  if (n <= 1) return n;
  return expensiveCalculation(n - 1) + expensiveCalculation(n - 2);
}

const memoizedFib = memoize(function (n) {
  console.log(`Calculating fibonacci(${n})...`);
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log("\nMemoization:");
console.log("memoizedFib(10):", memoizedFib(10));
console.log("memoizedFib(10) again (should use cache):", memoizedFib(10));
console.log("Cache contents:", memoizedFib.cache);

// 2. Once function
function once(fn) {
  let hasRun = false;
  let result;

  return function (...args) {
    if (!hasRun) {
      result = fn(...args);
      hasRun = true;
    }
    return result;
  };
}

// Test once function
let counter = 0;
const incrementOnce = once(() => ++counter);

console.log("\nOnce function:");
console.log("First call:", incrementOnce()); // 1
console.log("Second call:", incrementOnce()); // Still 1
console.log("Third call:", incrementOnce()); // Still 1
console.log("Counter value:", counter); // 1

// 3. Pipe function
function pipe(...functions) {
  return function (x) {
    return functions.reduce((acc, fn) => fn(acc), x);
  };
}

// Test pipe
const pipeOperation = pipe(
  addFive, // x + 5
  multiplyByTwo, // (x + 5) * 2
  subtractThree // ((x + 5) * 2) - 3
);

console.log("\nPipe:");
console.log("pipeOperation(10):", pipeOperation(10)); // ((10 + 5) * 2) - 3 = 27
console.log("Same as mathOperation(10):", mathOperation(10)); // Same result as compose
