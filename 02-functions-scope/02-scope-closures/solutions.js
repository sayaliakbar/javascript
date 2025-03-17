/**
 * JavaScript Scope and Closures - Exercise Solutions
 * ==============================================
 */

/**
 * Exercise 1: Scopes
 */
const globalVar = "I'm global";

function checkScope() {
  const functionVar = "I'm a function variable";

  if (true) {
    let blockVar = "I'm a block variable";
    console.log("Inside block - blockVar:", blockVar); // Accessible
    console.log("Inside block - functionVar:", functionVar); // Accessible
    console.log("Inside block - globalVar:", globalVar); // Accessible
  }

  console.log("Inside function - functionVar:", functionVar); // Accessible
  console.log("Inside function - globalVar:", globalVar); // Accessible
  // console.log("Inside function - blockVar:", blockVar); // Error: blockVar is not defined
  // blockVar is not accessible outside its block because it was defined with 'let'
}

function checkScopeAgain() {
  console.log("Another function - globalVar:", globalVar); // Accessible
  // console.log("Another function - functionVar:", functionVar); // Error: functionVar is not defined
  // functionVar is not accessible because it's inside another function's scope
  // console.log("Another function - blockVar:", blockVar); // Error: blockVar is not defined
  // blockVar is not accessible because it's inside a block in another function
}

checkScope();
checkScopeAgain();

// Explanation:
// - globalVar is accessible everywhere
// - functionVar is only accessible inside checkScope
// - blockVar is only accessible inside the if block in checkScope

/**
 * Exercise 2: Hoisting
 */
// Testing hoisting behavior before declarations
console.log("hoistedVar before declaration:", typeof hoistedVar); // undefined (not an error)
// console.log("notHoistedVar before declaration:", notHoistedVar); // Error: Cannot access before initialization

// This works due to function declaration hoisting
hoistedFunction(); // "I'm hoisted"

// This would cause an error if uncommented
// notHoistedFunction(); // Error: notHoistedFunction is not defined

// Declarations
var hoistedVar = "I'm hoisted";
let notHoistedVar = "I'm not hoisted";

function hoistedFunction() {
  console.log("I'm hoisted");
}

const notHoistedFunction = function () {
  console.log("I'm not hoisted");
};

console.log("hoistedVar after declaration:", hoistedVar);
console.log("notHoistedVar after declaration:", notHoistedVar);

// Explanation:
// - Function declarations are fully hoisted (can be called before declaration)
// - var declarations are hoisted but not initialized (accessing them gives undefined)
// - let/const declarations are hoisted but in a "temporal dead zone" (accessing them throws error)
// - Function expressions are not hoisted (they behave like variables)

/**
 * Exercise 3: Closures - Creating a Counter
 */
function createCounter(initialValue = 0) {
  let count = initialValue;

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

// Create two independent counters
const counter1 = createCounter(10);
const counter2 = createCounter(5);

console.log("Counter 1 initial:", counter1.getCount()); // 10
console.log("Counter 2 initial:", counter2.getCount()); // 5

console.log("Counter 1 increment:", counter1.increment()); // 11
console.log("Counter 1 increment again:", counter1.increment()); // 12
console.log("Counter 2 increment:", counter2.increment()); // 6

console.log("Counter 1 current:", counter1.getCount()); // 12
console.log("Counter 2 current:", counter2.getCount()); // 6

// The two counters are completely independent because each function call
// creates a separate closure with its own 'count' variable

/**
 * Exercise 4: Closures - Modifying Data
 */
function createShoppingList() {
  // Private data
  const items = [];

  return {
    addItem(item) {
      items.push(item);
      return items.length;
    },

    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        return true;
      }
      return false;
    },

    getItems() {
      // Return a copy to prevent direct modification of private array
      return [...items];
    },
  };
}

// First shopping list
const groceryList = createShoppingList();
groceryList.addItem("Milk");
groceryList.addItem("Bread");
groceryList.addItem("Eggs");
console.log("Grocery list:", groceryList.getItems()); // ["Milk", "Bread", "Eggs"]

groceryList.removeItem("Bread");
console.log("Grocery list after removing bread:", groceryList.getItems()); // ["Milk", "Eggs"]

// Second shopping list (independent of the first one)
const officeSupplies = createShoppingList();
officeSupplies.addItem("Paper");
officeSupplies.addItem("Pens");
console.log("Office supplies:", officeSupplies.getItems()); // ["Paper", "Pens"]
console.log("Grocery list is unchanged:", groceryList.getItems()); // ["Milk", "Eggs"]

/**
 * Exercise 5: Closures - Value Capture in Loops
 */
// Problem: all functions capture the same variable
console.log("Problem with 'var' in loops:");
function createFunctionsWithVar() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const varFunctions = createFunctionsWithVar();
console.log(varFunctions[0]()); // 3
console.log(varFunctions[1]()); // 3
console.log(varFunctions[2]()); // 3

// Solution 1: Using IIFE to capture each iteration's value
console.log("\nSolution 1: Using IIFE");
function createFunctionsWithIIFE() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(
      (function (capturedI) {
        return function () {
          return capturedI;
        };
      })(i)
    );
  }

  return functions;
}

const iifeFunctions = createFunctionsWithIIFE();
console.log(iifeFunctions[0]()); // 0
console.log(iifeFunctions[1]()); // 1
console.log(iifeFunctions[2]()); // 2

// Solution 2: Using 'let' instead of 'var' (block scope)
console.log("\nSolution 2: Using 'let'");
function createFunctionsWithLet() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const letFunctions = createFunctionsWithLet();
console.log(letFunctions[0]()); // 0
console.log(letFunctions[1]()); // 1
console.log(letFunctions[2]()); // 2

/**
 * Exercise 6: Closures - Function Factory
 */
function multiplyByFactory(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const multiplyBy2 = multiplyByFactory(2);
const multiplyBy5 = multiplyByFactory(5);

console.log("5 × 2 =", multiplyBy2(5)); // 10
console.log("5 × 5 =", multiplyBy5(5)); // 25

console.log("10 × 2 =", multiplyBy2(10)); // 20
console.log("10 × 5 =", multiplyBy5(10)); // 50

/**
 * Exercise 7: Closures - Private Methods
 */
function createBankAccount(initialBalance = 0) {
  // Private variable
  let balance = initialBalance;

  // Private function
  function validateAmount(amount) {
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
  }

  // Public interface
  return {
    deposit(amount) {
      if (!validateAmount(amount)) {
        console.log("Invalid deposit amount");
        return false;
      }

      balance += amount;
      return true;
    },

    withdraw(amount) {
      if (!validateAmount(amount)) {
        console.log("Invalid withdrawal amount");
        return false;
      }

      if (amount > balance) {
        console.log("Insufficient funds");
        return false;
      }

      balance -= amount;
      return true;
    },

    getBalance() {
      return balance;
    },
  };
}

// Testing the bank account
const myAccount = createBankAccount(100);
console.log("Initial balance:", myAccount.getBalance()); // 100

console.log("Deposit $50:", myAccount.deposit(50)); // true
console.log("New balance:", myAccount.getBalance()); // 150

console.log("Withdraw $25:", myAccount.withdraw(25)); // true
console.log("New balance:", myAccount.getBalance()); // 125

console.log("Withdraw $200:", myAccount.withdraw(200)); // false (insufficient funds)
console.log("Balance unchanged:", myAccount.getBalance()); // 125

console.log("Deposit -$50:", myAccount.deposit(-50)); // false (invalid amount)
console.log("Balance unchanged:", myAccount.getBalance()); // 125

// Can't access private members (uncomment to see errors):
// console.log(myAccount.balance); // undefined
// console.log(myAccount.validateAmount(50)); // myAccount.validateAmount is not a function

/**
 * Exercise 8: Closures - Memoization
 */
function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (arg in cache) {
      console.log(`Returning cached result for ${arg}`);
      return cache[arg];
    }

    console.log(`Computing result for ${arg}`);
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

// Expensive recursive function to calculate Fibonacci numbers
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create memoized version
const memoizedFibonacci = memoize(function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

// Test original function
console.log("\nTesting original fibonacci function:");
console.time("Original fibonacci(10)");
console.log("fibonacci(10):", fibonacci(10)); // 55
console.timeEnd("Original fibonacci(10)");

// Test memoized function
console.log("\nTesting memoized fibonacci function:");
console.time("First memoizedFibonacci(10)");
console.log("memoizedFibonacci(10):", memoizedFibonacci(10)); // 55
console.timeEnd("First memoizedFibonacci(10)");

console.time("Second memoizedFibonacci(10)");
console.log("memoizedFibonacci(10) again:", memoizedFibonacci(10)); // 55 (from cache)
console.timeEnd("Second memoizedFibonacci(10)");

/**
 * Exercise 9: Scope and Closures - Module Pattern
 */
const calculator = (function () {
  // Private variable
  let result = 0;

  return {
    add(n) {
      result += n;
      return this; // Enable method chaining
    },

    subtract(n) {
      result -= n;
      return this;
    },

    multiply(n) {
      result *= n;
      return this;
    },

    divide(n) {
      if (n !== 0) {
        result /= n;
      } else {
        console.error("Cannot divide by zero!");
      }
      return this;
    },

    getResult() {
      return result;
    },
  };
})();

// Method chaining
const calcResult = calculator
  .add(5)
  .multiply(2)
  .subtract(3)
  .add(10)
  .divide(2)
  .getResult();

console.log("Calculator result:", calcResult); // 11.5

/**
 * Exercise 10: Challenge - Creating a Debounce Function
 */
function debounce(fn, time) {
  let timeoutId = null;

  // Return a debounced version of the function
  return function (...args) {
    // Clear previous timeout (if any)
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // Call the original function with all arguments
      fn.apply(this, args);
      timeoutId = null;
    }, time);
  };
}

// Function for testing debounce
function handleInput(text) {
  console.log(`Input: ${text}`);
}

// Create debounced version
const debouncedHandleInput = debounce(handleInput, 500);

// Test (uncomment to run - note that it requires browser environment for setTimeout)
/*
console.log("Calling debounced function multiple times quickly...");
debouncedHandleInput("a");
debouncedHandleInput("ab");
debouncedHandleInput("abc");
debouncedHandleInput("abcd");
console.log("Only the last call should execute after 500ms");
*/

// For Node.js environment testing, we can simulate it:
console.log("\nSimulating debounced calls:");
console.log("Making multiple calls in sequence...");
debouncedHandleInput("test1");
console.log("Called with 'test1'");
debouncedHandleInput("test2");
console.log("Called with 'test2'");
debouncedHandleInput("test3");
console.log("Called with 'test3'");
console.log("After 500ms, only 'test3' should be logged.");
