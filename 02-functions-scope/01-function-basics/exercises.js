/**
 * JavaScript Function Basics - Exercises
 * ==================================
 * Complete the following exercises to practice working with JavaScript functions.
 */

/**
 * Exercise 1: Function Declaration
 *
 * 1. Create a function called 'calculateArea' that:
 *    - Takes width and height as parameters
 *    - Returns the area (width * height)
 * 2. Call your function with values 5 and 8
 * 3. Log the result
 */

// Write your code here

/**
 * Exercise 2: Function Expression
 *
 * 1. Create a function expression called 'calculateCircleArea' that:
 *    - Takes radius as a parameter
 *    - Returns the area of a circle (π * radius^2)
 *    - Use Math.PI for π value
 * 2. Call your function with a radius of 3
 * 3. Log the result
 */

// Write your code here

/**
 * Exercise 3: Arrow Function
 *
 * 1. Create an arrow function called 'isEven' that:
 *    - Takes a number as a parameter
 *    - Returns true if the number is even, false otherwise
 * 2. Test the function with numbers 4 and 7
 * 3. Log the results
 */

// Write your code here

/**
 * Exercise 4: Default Parameters
 *
 * 1. Create a function called 'greetUser' that:
 *    - Takes a username and greeting message as parameters
 *    - The greeting parameter should have a default value of "Hello"
 *    - Returns a string that combines the greeting and username
 * 2. Call the function:
 *    - With just a username "Alice"
 *    - With a username "Bob" and greeting "Hi"
 * 3. Log both results
 */

// Write your code here

/**
 * Exercise 5: Rest Parameters
 *
 * 1. Create a function called 'calculateAverage' that:
 *    - Takes any number of numeric arguments using rest parameters
 *    - Returns the average of all arguments
 * 2. Test with different sets of numbers:
 *    - calculateAverage(5, 10, 15, 20)
 *    - calculateAverage(3, 6, 9, 12, 15, 18)
 * 3. Log the results
 */

// Write your code here

/**
 * Exercise 6: Return Types
 *
 * 1. Create a function called 'processNumber' that:
 *    - Takes a number as a parameter
 *    - If the number is positive, returns an object: { value: number, isPositive: true }
 *    - If the number is negative, returns an array: [number, false]
 *    - If the number is zero, returns the string: "Zero"
 * 2. Test with values 5, -3, and 0
 * 3. Log the results and the type of each result (use typeof)
 */

// Write your code here

/**
 * Exercise 7: Function as Parameter (Callbacks)
 *
 * 1. Create a function called 'operate' that:
 *    - Takes three parameters: two numbers and a function
 *    - Applies the function to the two numbers and returns the result
 * 2. Create functions for:
 *    - add(a, b) - Returns a + b
 *    - subtract(a, b) - Returns a - b
 *    - multiply(a, b) - Returns a * b
 * 3. Use the 'operate' function with each of these operations
 * 4. Log all results
 */

// Write your code here

/**
 * Exercise 8: Function Returning a Function
 *
 * 1. Create a function called 'createMultiplier' that:
 *    - Takes a number (factor) as a parameter
 *    - Returns a new function that multiplies its input by that factor
 * 2. Use createMultiplier to create:
 *    - A 'double' function (factor of 2)
 *    - A 'triple' function (factor of 3)
 * 3. Test both functions with the value 10
 * 4. Log the results
 */

// Write your code here

/**
 * Exercise 9: Pure vs. Impure Function
 *
 * 1. Create a pure function called 'addPure' that:
 *    - Takes two parameters and returns their sum
 * 2. Create an impure function called 'addImpure' that:
 *    - Uses a global variable 'base'
 *    - Takes one parameter and adds it to 'base'
 *    - Updates 'base' with the new value
 *    - Returns the result
 * 3. Initialize 'base' to 10
 * 4. Test both functions
 * 5. Log the results and demonstrate the difference in behavior
 */

// Write your code here

/**
 * Exercise 10: Challenge - Create a Calculator Factory
 *
 * 1. Create a function called 'createCalculator' that:
 *    - Takes an initial value (default 0)
 *    - Returns an object with methods:
 *      - add(num): Adds num to the current value and returns the new value
 *      - subtract(num): Subtracts num from the current value and returns the new value
 *      - multiply(num): Multiplies the current value by num and returns the new value
 *      - divide(num): Divides the current value by num and returns the new value
 *      - reset(): Resets the value back to the initial value
 *      - getValue(): Returns the current value
 * 2. Create two calculators with different initial values
 * 3. Perform different operations on each
 * 4. Log the results
 */

// Write your code here
