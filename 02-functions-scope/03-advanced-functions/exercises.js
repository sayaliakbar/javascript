/**
 * Advanced Functions - Exercises
 * -----------------------------
 * Practice these concepts:
 * - Higher-order functions
 * - Pure functions vs side effects
 * - Immediately Invoked Function Expressions (IIFE)
 * - Function currying and composition
 * - Recursion
 */

/**
 * Exercise 1: Higher-Order Functions
 *
 * 1. Create a function called 'mapArray' that:
 *    - Takes an array and a callback function as arguments
 *    - Returns a new array where each element is the result of the callback function
 *    - Your function should work like the native Array.map()
 *
 * 2. Use your 'mapArray' function with three different callbacks:
 *    - One that doubles each number
 *    - One that converts numbers to strings
 *    - One that returns the square root of each number
 */

// Write your code here

/**
 * Exercise 2: Pure Functions
 *
 * 1. Identify which of these functions are pure and which are impure.
 *    For the impure functions, explain why they are impure.
 *
 *    function multiply(a, b) {
 *      return a * b;
 *    }
 *
 *    function getRandomBetween(min, max) {
 *      return Math.floor(Math.random() * (max - min + 1)) + min;
 *    }
 *
 *    let total = 0;
 *    function addToTotal(value) {
 *      total += value;
 *      return total;
 *    }
 *
 *    function truncateString(str) {
 *      if (str.length > 10) {
 *        return str.slice(0, 10) + '...';
 *      }
 *      return str;
 *    }
 *
 * 2. Transform the impure 'addToTotal' function into a pure one that provides
 *    the same functionality without modifying external state.
 */

// Write your code here

/**
 * Exercise 3: Immediately Invoked Function Expressions (IIFE)
 *
 * 1. Create an IIFE that:
 *    - Defines a private array of strings (names)
 *    - Returns an object with methods to add a name, remove a name, and get all names
 *    - The original array should not be accessible from outside the IIFE
 *
 * 2. Use your IIFE result to:
 *    - Add several names
 *    - Remove a name
 *    - Log all names
 *    - Try to access the original array (should be impossible)
 */

// Write your code here

/**
 * Exercise 4: Function Currying and Composition
 *
 * 1. Create a curry function that:
 *    - Takes a binary (two-argument) function as input
 *    - Returns a curried version of that function
 *
 * 2. Use your curry function to curry the following functions:
 *    - add(a, b) - adds two numbers
 *    - divide(a, b) - divides a by b
 *    - prefix(prefix, string) - adds a prefix to a string
 *
 * 3. Create a compose function that:
 *    - Takes multiple functions as arguments
 *    - Returns a new function that composes those functions from right to left
 *    - Example: compose(f, g, h)(x) should equal f(g(h(x)))
 *
 * 4. Use your compose function to create a new function that:
 *    - Takes a number
 *    - Adds 5
 *    - Multiplies by 2
 *    - Subtracts 3
 */

// Write your code here

/**
 * Exercise 5: Recursion
 *
 * 1. Create a recursive function 'sumNestedArrays' that:
 *    - Takes a nested array of numbers (array can contain arrays that contain numbers or more nested arrays)
 *    - Returns the sum of all numbers in the nested structure
 *    - Example: sumNestedArrays([1, 2, [3, 4], [[5, 6], 7]]) should return 28
 *
 * 2. Create a recursive function 'deepClone' that:
 *    - Takes an object or array
 *    - Creates a deep copy (not just a shallow copy)
 *    - Handles nested objects and arrays
 *    - Does not use JSON.parse(JSON.stringify())
 *
 * 3. Create a recursive function 'findValueInObject' that:
 *    - Takes an object and a key name
 *    - Returns the value if the key exists at any level of the object
 *    - Returns null if the key doesn't exist
 *    - Example: findValueInObject({a: 1, b: {c: 2}}, 'c') should return 2
 */

// Write your code here

/**
 * Challenge Exercise: Advanced Function Applications
 *
 * 1. Create a 'memoize' higher-order function that:
 *    - Takes a function as input
 *    - Returns a memoized version of that function that stores results for previous inputs
 *    - The memoized function should have a 'cache' property that can be checked
 *
 * 2. Create a function 'once' that:
 *    - Takes a function as input
 *    - Returns a new function that can only be called once
 *    - Subsequent calls return the result from the first call
 *
 * 3. Create a function 'pipe' similar to compose but processes from left to right instead of right to left
 *    - pipe(f, g, h)(x) should equal h(g(f(x)))
 */

// Write your code here
