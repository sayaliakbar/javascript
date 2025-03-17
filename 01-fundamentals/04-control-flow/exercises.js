/**
 * JavaScript Control Flow - Exercises
 * ================================
 * Complete the following exercises to practice working with JavaScript control flow.
 */

/**
 * Exercise 1: Conditional Statements
 *
 * 1. Create a function called 'getLetterGrade' that takes a numerical score (0-100)
 * 2. Return the corresponding letter grade:
 *    - 90-100: 'A'
 *    - 80-89: 'B'
 *    - 70-79: 'C'
 *    - 60-69: 'D'
 *    - Below 60: 'F'
 * 3. Test with different scores
 */

// Write your code here

/**
 * Exercise 2: Switch Statement
 *
 * 1. Create a function called 'getDayType' that takes a day name as a string
 * 2. Using a switch statement, return:
 *    - "Weekday" for Monday through Friday
 *    - "Weekend" for Saturday and Sunday
 *    - "Invalid day" for any other input
 * 3. Make it case-insensitive (so 'Monday' and 'monday' both work)
 */

// Write your code here

/**
 * Exercise 3: Loops and Iteration
 *
 * 1. Write a function called 'sumEvenNumbers' that:
 *    - Takes a parameter 'max'
 *    - Uses a loop to sum all even numbers from 1 to max (inclusive)
 *    - Returns the total
 * 2. Test with max = 10 (should return 30 -> 2+4+6+8+10)
 */

// Write your code here

/**
 * Exercise 4: Nested Loops
 *
 * 1. Write a function called 'createMultiplicationTable' that:
 *    - Takes two parameters: rows and columns
 *    - Creates a multiplication table of the specified size
 *    - Returns the table as a string with rows separated by newlines
 * 2. Example: createMultiplicationTable(3, 3) should return:
 *    1 2 3
 *    2 4 6
 *    3 6 9
 *    (where each row is separated by a newline)
 */

// Write your code here

/**
 * Exercise 5: Break and Continue
 *
 * 1. Create a function called 'findFirstNonSquare' that:
 *    - Takes a parameter 'max'
 *    - Iterates from 1 to max
 *    - Returns the first number that is NOT a perfect square
 *    - Uses the break statement
 *
 * 2. Create a function called 'skipMultiplesOfThree' that:
 *    - Takes a parameter 'max'
 *    - Uses a loop to build an array of numbers from 1 to max
 *    - Skips multiples of 3 using the continue statement
 *    - Returns the array
 */

// Write your code here

/**
 * Exercise 6: Looping Through Data
 *
 * 1. Write a function called 'analyzeTemperatures' that:
 *    - Takes an array of temperature objects with 'day' and 'temp' properties
 *      [{day: 'Monday', temp: 75}, {day: 'Tuesday', temp: 80}, ...]
 *    - Uses a loop to:
 *      a. Find the highest temperature and its day
 *      b. Find the lowest temperature and its day
 *      c. Calculate the average temperature
 *    - Returns an object with these 3 pieces of information
 */

// Write your code here

/**
 * Exercise 7: Error Handling
 *
 * 1. Create a function called 'safeDivide' that:
 *    - Takes two parameters: a and b
 *    - Returns a / b
 *    - Uses try/catch to handle division by zero
 *    - Returns 'Cannot divide by zero' if b is 0
 *    - Returns 'Both arguments must be numbers' if either a or b is not a number
 */

// Write your code here

/**
 * Exercise 8: Nested Conditions
 *
 * 1. Write a function called 'getTicketPrice' that calculates the price of a movie ticket:
 *    - Takes a person's age and whether it's a matinee showing (boolean)
 *    - Base price: $12
 *    - Under 13: 50% off base price
 *    - 65 and older: 30% off base price
 *    - Matinee showing: additional $2 off any price
 *    - Returns the final price
 *
 * 2. Rewrite the function using early returns to make it more readable
 */

// Write your code here

/**
 * Exercise 9: Advanced Pattern - State Machine
 *
 * 1. Create a traffic light state machine with the following specifications:
 *    - Create a function called 'createTrafficLight' that returns a traffic light object
 *    - The object should have properties:
 *      a. state (string): starting at 'green'
 *      b. change(): a method that changes the state from green → yellow → red → green
 *      c. getState(): a method that returns the current state
 *    - Test by changing the traffic light multiple times
 */

// Write your code here

/**
 * Exercise 10: Challenge - Input Validation
 *
 * 1. Write a function called 'validateUserInput' that validates a username and password:
 *    - Takes two parameters: username and password
 *    - Returns an object with structure: {isValid: boolean, errors: string[]}
 *    - Rules to validate:
 *      a. Username must be between 5-15 characters
 *      b. Username must contain only alphanumeric characters
 *      c. Password must be at least 8 characters
 *      d. Password must contain at least one uppercase letter
 *      e. Password must contain at least one number
 *    - For each failed rule, add a descriptive error message to the errors array
 *    - If all rules pass, isValid should be true and errors should be empty
 */

// Write your code here
