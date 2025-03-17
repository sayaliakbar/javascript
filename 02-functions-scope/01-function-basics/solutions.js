/**
 * JavaScript Function Basics - Exercise Solutions
 * ==========================================
 */

/**
 * Exercise 1: Function Declaration
 */
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 8);
console.log("Area:", area); // 40

/**
 * Exercise 2: Function Expression
 */
const calculateCircleArea = function (radius) {
  return Math.PI * radius * radius;
};

const circleArea = calculateCircleArea(3);
console.log("Circle area:", circleArea); // ~28.27

/**
 * Exercise 3: Arrow Function
 */
const isEven = (num) => num % 2 === 0;

console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

/**
 * Exercise 4: Default Parameters
 */
function greetUser(username, greeting = "Hello") {
  return `${greeting}, ${username}!`;
}

console.log(greetUser("Alice")); // "Hello, Alice!"
console.log(greetUser("Bob", "Hi")); // "Hi, Bob!"

/**
 * Exercise 5: Rest Parameters
 */
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log("Average of [5, 10, 15, 20]:", calculateAverage(5, 10, 15, 20)); // 12.5
console.log(
  "Average of [3, 6, 9, 12, 15, 18]:",
  calculateAverage(3, 6, 9, 12, 15, 18)
); // 10.5

/**
 * Exercise 6: Return Types
 */
function processNumber(num) {
  if (num > 0) {
    return { value: num, isPositive: true };
  } else if (num < 0) {
    return [num, false];
  } else {
    return "Zero";
  }
}

const resultPos = processNumber(5);
const resultNeg = processNumber(-3);
const resultZero = processNumber(0);

console.log("Positive:", resultPos, typeof resultPos); // { value: 5, isPositive: true } object
console.log("Negative:", resultNeg, typeof resultNeg); // [-3, false] object (arrays are objects in JS)
console.log("Zero:", resultZero, typeof resultZero); // "Zero" string

/**
 * Exercise 7: Function as Parameter (Callbacks)
 */
function operate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log("10 + 5 =", operate(10, 5, add)); // 15
console.log("10 - 5 =", operate(10, 5, subtract)); // 5
console.log("10 * 5 =", operate(10, 5, multiply)); // 50

// Using arrow functions directly
console.log(
  "10 / 5 =",
  operate(10, 5, (a, b) => a / b)
); // 2

/**
 * Exercise 8: Function Returning a Function
 */
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 10:", double(10)); // 20
console.log("Triple 10:", triple(10)); // 30

/**
 * Exercise 9: Pure vs. Impure Function
 */
// Pure function - same inputs always produce same outputs
function addPure(a, b) {
  return a + b;
}

// Impure function - uses and modifies external state
let base = 10;

function addImpure(num) {
  base += num; // Side effect: modifies external state
  return base;
}

console.log("Pure function 5 + 3:", addPure(5, 3)); // 8
console.log("Pure function 5 + 3:", addPure(5, 3)); // 8 (always the same result)

console.log("Base before:", base); // 10
console.log("Impure function with 5:", addImpure(5)); // 15
console.log("Base after first call:", base); // 15 (base is modified)
console.log("Impure function with 5 again:", addImpure(5)); // 20 (different result for same input)
console.log("Base after second call:", base); // 20

/**
 * Exercise 10: Challenge - Create a Calculator Factory
 */
function createCalculator(initialValue = 0) {
  let value = initialValue;

  return {
    add(num) {
      value += num;
      return value;
    },

    subtract(num) {
      value -= num;
      return value;
    },

    multiply(num) {
      value *= num;
      return value;
    },

    divide(num) {
      if (num === 0) {
        console.error("Cannot divide by zero");
        return value;
      }
      value /= num;
      return value;
    },

    reset() {
      value = initialValue;
      return value;
    },

    getValue() {
      return value;
    },
  };
}

// Test with initial value of 10
const calc1 = createCalculator(10);
console.log("Calculator 1 initial value:", calc1.getValue()); // 10
console.log("Add 5:", calc1.add(5)); // 15
console.log("Multiply by 2:", calc1.multiply(2)); // 30
console.log("Subtract 10:", calc1.subtract(10)); // 20
console.log("Reset:", calc1.reset()); // 10

// Test with default initial value (0)
const calc2 = createCalculator();
console.log("Calculator 2 initial value:", calc2.getValue()); // 0
console.log("Add 20:", calc2.add(20)); // 20
console.log("Divide by 4:", calc2.divide(4)); // 5
console.log("Multiply by 3:", calc2.multiply(3)); // 15
