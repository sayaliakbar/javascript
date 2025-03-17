/**
 * JavaScript Scope and Closures - Exercises
 * ======================================
 * Complete the following exercises to practice working with JavaScript scope and closures.
 */

/**
 * Exercise 1: Scopes
 *
 * 1. Declare a variable 'globalVar' in the global scope with value "I'm global"
 * 2. Create a function 'checkScope' that:
 *    - Declares a variable 'functionVar' with value "I'm a function variable"
 *    - Creates a block (use if(true){}) with a variable 'blockVar' declared with 'let'
 *    - Tries to log all three variables to the console
 * 3. Create another function 'checkScopeAgain' that also tries to log all three variables
 * 4. Call both functions and explain the results in comments
 */

// Write your code here

/**
 * Exercise 2: Hoisting
 *
 * 1. Before any variable declarations, try to:
 *    - Log the value of 'hoistedVar'
 *    - Log the value of 'notHoistedVar'
 *    - Call the function 'hoistedFunction'
 *    - Call the function 'notHoistedFunction'
 * 2. After your logging attempts, declare:
 *    - A variable 'hoistedVar' with var and value "I'm hoisted"
 *    - A variable 'notHoistedVar' with let and value "I'm not hoisted"
 *    - A function declaration 'hoistedFunction' that logs "I'm hoisted"
 *    - A function expression 'notHoistedFunction' that logs "I'm not hoisted"
 * 3. Explain the different behaviors in comments
 */

// Write your code here

/**
 * Exercise 3: Closures - Creating a Counter
 *
 * 1. Create a function 'createCounter' that:
 *    - Takes a parameter 'initialValue' with default value 0
 *    - Declares a local variable 'count' initialized to 'initialValue'
 *    - Returns an object with three methods:
 *      - increment(): increases count by 1 and returns new value
 *      - decrement(): decreases count by 1 and returns new value
 *      - getCount(): returns current value of count
 * 2. Create two separate counters and demonstrate that they maintain separate counts
 */

// Write your code here

/**
 * Exercise 4: Closures - Modifying Data
 *
 * 1. Create a function 'createShoppingList' that:
 *    - Declares a local variable 'items' as an empty array
 *    - Returns an object with methods:
 *      - addItem(item): adds an item to the array
 *      - removeItem(item): removes an item from the array (first occurrence)
 *      - getItems(): returns a copy of the items array
 * 2. Test your shopping list by adding and removing items
 * 3. Create a second shopping list and demonstrate that they are independent
 */

// Write your code here

/**
 * Exercise 5: Closures - Value Capture in Loops
 *
 * 1. Use a for loop with var to create an array of functions that each console.log the loop index
 * 2. Execute each function and observe the results
 * 3. Fix the issue using:
 *    a. An IIFE solution
 *    b. A 'let' solution (instead of var)
 * 4. Execute both fixed versions to show they work correctly
 */

// Write your code here

/**
 * Exercise 6: Closures - Function Factory
 *
 * 1. Create a function 'multiplyByFactory' that:
 *    - Takes a 'multiplier' parameter
 *    - Returns a new function that takes a number and returns it multiplied by multiplier
 * 2. Use this factory to create:
 *    - 'multiplyBy2' function
 *    - 'multiplyBy5' function
 * 3. Test both functions with a few values
 */

// Write your code here

/**
 * Exercise 7: Closures - Private Methods
 *
 * 1. Create a 'createBankAccount' function that:
 *    - Takes 'initialBalance' parameter (default 0)
 *    - Declares private variable 'balance' initialized to 'initialBalance'
 *    - Declares private function 'validateAmount' that checks if an amount is valid (positive number)
 *    - Returns an object with methods:
 *      - deposit(amount): adds to balance if valid amount, returns success status
 *      - withdraw(amount): subtracts from balance if valid and sufficient, returns success status
 *      - getBalance(): returns current balance
 * 2. Test the account with valid and invalid operations
 * 3. Demonstrate that 'balance' and 'validateAmount' cannot be accessed directly
 */

// Write your code here

/**
 * Exercise 8: Closures - Memoization
 *
 * 1. Create a function 'memoize' that:
 *    - Takes a function as input
 *    - Returns a new function that remembers the results of previous inputs
 * 2. Create a computationally expensive function (e.g., recursive Fibonacci)
 * 3. Apply your memoize function to it
 * 4. Test both versions with the same inputs and compare execution times
 */

// Write your code here

/**
 * Exercise 9: Scope and Closures - Module Pattern
 *
 * 1. Create a 'calculator' module using an IIFE that:
 *    - Has a private variable 'result' initialized to 0
 *    - Returns an object with methods:
 *      - add(n): adds n to result and returns the calculator object
 *      - subtract(n): subtracts n from result and returns the calculator object
 *      - multiply(n): multiplies result by n and returns the calculator object
 *      - divide(n): divides result by n and returns the calculator object
 *      - getResult(): returns the current result
 * 2. Use method chaining to perform a sequence of operations
 */

// Write your code here

/**
 * Exercise 10: Challenge - Creating a Debounce Function
 *
 * 1. Create a 'debounce' function that:
 *    - Takes a function 'fn' and a delay 'time' (in milliseconds)
 *    - Returns a function that debounces 'fn'
 *    - If the returned function is called repeatedly, it calls 'fn' only after
 *      'time' milliseconds have passed since the last call
 * 2. Test your debounce function with a simple function call that console.logs something
 * 3. Bonus: Make the debounce function handle function arguments correctly
 */

// Write your code here
