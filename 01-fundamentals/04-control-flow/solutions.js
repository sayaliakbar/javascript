/**
 * JavaScript Control Flow - Exercise Solutions
 * =========================================
 */

/**
 * Exercise 1: Conditional Statements
 */
function getLetterGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
}

console.log(getLetterGrade(95)); // A
console.log(getLetterGrade(82)); // B
console.log(getLetterGrade(75)); // C
console.log(getLetterGrade(64)); // D
console.log(getLetterGrade(45)); // F
console.log(getLetterGrade(110)); // Invalid score

/**
 * Exercise 2: Switch Statement
 */
function getDayType(day) {
  // Convert to lowercase for case-insensitivity
  const dayLower = day?.toLowerCase();

  switch (dayLower) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    case "saturday":
    case "sunday":
      return "Weekend";
    default:
      return "Invalid day";
  }
}

console.log(getDayType("Monday")); // Weekday
console.log(getDayType("saturday")); // Weekend
console.log(getDayType("friday")); // Weekday
console.log(getDayType("Halloween")); // Invalid day

/**
 * Exercise 3: Loops and Iteration
 */
function sumEvenNumbers(max) {
  let sum = 0;

  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumEvenNumbers(10)); // 30 (2+4+6+8+10)
console.log(sumEvenNumbers(15)); // 56 (2+4+6+8+10+12+14)

// Alternative solution using a different loop structure
function sumEvenNumbersAlternative(max) {
  let sum = 0;
  let i = 2; // Start with the first even number

  while (i <= max) {
    sum += i;
    i += 2; // Increment by 2 to get next even number
  }

  return sum;
}

console.log(sumEvenNumbersAlternative(10)); // 30

/**
 * Exercise 4: Nested Loops
 */
function createMultiplicationTable(rows, columns) {
  let table = "";

  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= columns; j++) {
      row += i * j + " ";
    }
    table += row.trim() + "\n";
  }

  // Remove the final newline
  return table.trim();
}

console.log(createMultiplicationTable(3, 3));
// Output:
// 1 2 3
// 2 4 6
// 3 6 9

console.log(createMultiplicationTable(5, 5));
// Output:
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

/**
 * Exercise 5: Break and Continue
 */
function findFirstNonSquare(max) {
  for (let i = 1; i <= max; i++) {
    // Check if i is a perfect square
    const sqrt = Math.sqrt(i);
    if (sqrt !== Math.floor(sqrt)) {
      // If sqrt is not an integer, i is not a perfect square
      return i;
    }
  }

  // If all numbers up to max are perfect squares
  return null;
}

console.log(findFirstNonSquare(10)); // 2 (only 1, 4, 9 are perfect squares in this range)
console.log(findFirstNonSquare(4)); // 2 (1 and 4 are perfect squares)

function skipMultiplesOfThree(max) {
  const result = [];

  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0) {
      continue; // Skip multiples of 3
    }
    result.push(i);
  }

  return result;
}

console.log(skipMultiplesOfThree(10)); // [1, 2, 4, 5, 7, 8, 10]
console.log(skipMultiplesOfThree(15)); // [1, 2, 4, 5, 7, 8, 10, 11, 13, 14]

/**
 * Exercise 6: Looping Through Data
 */
function analyzeTemperatures(temperatures) {
  if (!temperatures || temperatures.length === 0) {
    return { highest: null, lowest: null, average: null };
  }

  let highestTemp = temperatures[0].temp;
  let highestDay = temperatures[0].day;
  let lowestTemp = temperatures[0].temp;
  let lowestDay = temperatures[0].day;
  let sum = 0;

  for (const reading of temperatures) {
    const temp = reading.temp;

    // Check for highest
    if (temp > highestTemp) {
      highestTemp = temp;
      highestDay = reading.day;
    }

    // Check for lowest
    if (temp < lowestTemp) {
      lowestTemp = temp;
      lowestDay = reading.day;
    }

    // Add to sum for average
    sum += temp;
  }

  const average = sum / temperatures.length;

  return {
    highest: { day: highestDay, temp: highestTemp },
    lowest: { day: lowestDay, temp: lowestTemp },
    average: average,
  };
}

const weekTemperatures = [
  { day: "Monday", temp: 75 },
  { day: "Tuesday", temp: 80 },
  { day: "Wednesday", temp: 72 },
  { day: "Thursday", temp: 85 },
  { day: "Friday", temp: 78 },
  { day: "Saturday", temp: 82 },
  { day: "Sunday", temp: 79 },
];

console.log(analyzeTemperatures(weekTemperatures));
// Output: {
//   highest: { day: 'Thursday', temp: 85 },
//   lowest: { day: 'Wednesday', temp: 72 },
//   average: 78.71428571428571
// }

/**
 * Exercise 7: Error Handling
 */
function safeDivide(a, b) {
  try {
    // Check if arguments are numbers
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Both arguments must be numbers");
    }

    // Check for division by zero
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    // If passed both checks, perform the division
    return a / b;
  } catch (error) {
    // Return error message
    return error.message;
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Cannot divide by zero
console.log(safeDivide("10", 2)); // Both arguments must be numbers
console.log(safeDivide(10, "2")); // Both arguments must be numbers
console.log(safeDivide(null, true)); // Both arguments must be numbers

/**
 * Exercise 8: Nested Conditions
 */
// First version with nested conditions
function getTicketPrice(age, isMatinee) {
  const basePrice = 12;
  let finalPrice = basePrice;

  if (age < 13) {
    finalPrice = basePrice * 0.5; // 50% off for under 13
  } else if (age >= 65) {
    finalPrice = basePrice * 0.7; // 30% off for 65 and older
  }

  if (isMatinee) {
    finalPrice -= 2; // Additional $2 off for matinee showings
  }

  return finalPrice;
}

// Second version using early returns for better readability
function getTicketPriceWithEarlyReturns(age, isMatinee) {
  const basePrice = 12;
  let discount = 0;

  // Calculate age-based discount
  if (age < 13) {
    discount = basePrice * 0.5;
  } else if (age >= 65) {
    discount = basePrice * 0.3;
  }

  // Apply matinee discount
  const matineeDiscount = isMatinee ? 2 : 0;

  // Calculate final price
  return basePrice - discount - matineeDiscount;
}

console.log("Regular adult ticket:", getTicketPrice(35, false)); // $12
console.log("Child ticket:", getTicketPrice(10, false)); // $6
console.log("Senior ticket:", getTicketPrice(70, false)); // $8.4
console.log("Adult matinee:", getTicketPrice(35, true)); // $10
console.log("Child matinee:", getTicketPrice(10, true)); // $4
console.log("Senior matinee:", getTicketPrice(70, true)); // $6.4

// Compare with early return version
console.log(
  "Using early returns - Adult matinee:",
  getTicketPriceWithEarlyReturns(35, true)
); // Should be $10

/**
 * Exercise 9: Advanced Pattern - State Machine
 */
function createTrafficLight() {
  return {
    state: "green",

    change() {
      switch (this.state) {
        case "green":
          this.state = "yellow";
          break;
        case "yellow":
          this.state = "red";
          break;
        case "red":
          this.state = "green";
          break;
        default:
          this.state = "green"; // Reset to green if in an invalid state
          break;
      }
      return this; // Allow method chaining
    },

    getState() {
      return this.state;
    },
  };
}

const trafficLight = createTrafficLight();
console.log("Starting state:", trafficLight.getState()); // green

trafficLight.change();
console.log("After first change:", trafficLight.getState()); // yellow

trafficLight.change();
console.log("After second change:", trafficLight.getState()); // red

trafficLight.change();
console.log("After third change:", trafficLight.getState()); // green

// Method chaining example
console.log(
  "Using method chaining:",
  createTrafficLight().change().change().getState()
); // red

/**
 * Exercise 10: Challenge - Input Validation
 */
function validateUserInput(username, password) {
  const errors = [];
  let isValid = true;

  // Validate username length
  if (username.length < 5 || username.length > 15) {
    errors.push("Username must be between 5-15 characters");
    isValid = false;
  }

  // Validate username contains only alphanumeric characters
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    errors.push("Username must contain only alphanumeric characters");
    isValid = false;
  }

  // Validate password length
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
    isValid = false;
  }

  // Validate password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
    isValid = false;
  }

  // Validate password contains at least one number
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
    isValid = false;
  }

  return {
    isValid,
    errors,
  };
}

console.log(validateUserInput("user", "password"));
// Not valid - username too short, password needs uppercase and number

console.log(validateUserInput("username", "Password1"));
// Valid

console.log(validateUserInput("user$name", "Password1"));
// Not valid - username has non-alphanumeric character

console.log(validateUserInput("username", "password"));
// Not valid - password needs uppercase and number

console.log(validateUserInput("username", "Password"));
// Not valid - password needs a number

console.log(validateUserInput("verylongusername123", "Password1"));
// Not valid - username too long
