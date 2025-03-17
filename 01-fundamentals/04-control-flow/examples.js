/**
 * JavaScript Control Flow - Examples
 * ==============================
 */

// ----- Conditional Statements -----

// if, else if, else
const temperature = 75;

if (temperature > 90) {
  console.log("It's scorching hot!");
} else if (temperature > 80) {
  console.log("It's very warm.");
} else if (temperature > 70) {
  console.log("It's pleasantly warm.");
} else if (temperature > 60) {
  console.log("It's nice out.");
} else if (temperature > 50) {
  console.log("It's a bit chilly.");
} else {
  console.log("It's cold!");
}

// Ternary operator
const age = 20;
const canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote);

// Nested ternary (use with caution - can become hard to read)
const timeOfDay = 14; // 24-hour format
const greeting =
  timeOfDay < 12
    ? "Good morning"
    : timeOfDay < 18
    ? "Good afternoon"
    : "Good evening";
console.log(greeting);

// Switch statement
const day = new Date().getDay(); // 0-6, starting with Sunday

switch (day) {
  case 0:
    console.log("It's Sunday, relax!");
    break;
  case 1:
    console.log("It's Monday, back to work.");
    break;
  case 2:
  case 3:
  case 4:
    console.log("It's a weekday, keep going.");
    break;
  case 5:
    console.log("It's Friday, weekend is coming!");
    break;
  case 6:
    console.log("It's Saturday, enjoy!");
    break;
  default:
    console.log("Invalid day?");
    break;
}

// Without breaks, execution continues to the next case
// (sometimes this is used intentionally)
function getTypeOfDay(day) {
  let type;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      type = "Weekday";
      break;
    case "Saturday":
    case "Sunday":
      type = "Weekend";
      break;
  }

  return type;
}

console.log(getTypeOfDay("Saturday")); // Weekend

// ----- Loops -----

// For loop
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// Nested for loops
console.log("\nMultiplication table:");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += `${i * j}\t`;
  }
  console.log(row);
}

// While loop
console.log("\nWhile loop:");
let counter = 1;
while (counter <= 5) {
  console.log(`Count: ${counter}`);
  counter++;
}

// Do-while loop (always runs at least once)
console.log("\nDo-while loop:");
let count = 1;
do {
  console.log(`Do-while count: ${count}`);
  count++;
} while (count <= 5);

// Example where do-while makes sense
function getValidInput() {
  let input;
  do {
    // In a real program, this would get input from the user
    input = "valid input"; // Simulating user input
    // Check if input is valid
  } while (input === null || input === "");

  return input;
}

// For...of loop (for iterables like arrays, strings)
console.log("\nFor...of loop with array:");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("\nFor...of loop with string:");
const name = "JavaScript";
for (const char of name) {
  console.log(char);
}

// For...in loop (for object properties)
console.log("\nFor...in loop with object:");
const person = {
  name: "Alex",
  age: 28,
  job: "Developer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// NOTE: For arrays, for...in gives index, not values
console.log("\nFor...in with array (not recommended):");
for (const index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

// ----- Breaking and Continuing -----

// Break statement
console.log("\nBreak example:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Found 6, breaking out!");
    break;
  }
  console.log(`Number: ${i}`);
}

// Continue statement
console.log("\nContinue example:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(`Odd number: ${i}`);
}

// Labels with break and continue (rarely used but good to know)
console.log("\nLabels with break:");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log(`Breaking out of nested loops at i=${i}, j=${j}`);
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// ----- Error Handling -----

// Basic try/catch
console.log("\nBasic try/catch:");
try {
  // Trying to access a variable that doesn't exist
  console.log(nonExistentVariable);
} catch (error) {
  console.log(`Caught an error: ${error.message}`);
}

console.log("Program continues after error");

// Try/catch/finally
console.log("\nTry/catch/finally:");
try {
  console.log("In try block");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(`In catch block: ${error.message}`);
} finally {
  console.log("In finally block - this always runs");
}

// Custom error handling
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

console.log("\nCustom error handling:");
try {
  console.log("10 / 2 =", divide(10, 2));
  // console.log("10 / 0 =", divide(10, 0)); // Uncomment to see error
  // console.log("'10' / 2 =", divide('10', 2)); // Uncomment to see TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.log(`Type Error: ${error.message}`);
  } else {
    console.log(`Error: ${error.message}`);
  }
}

// ----- Control Flow Patterns -----

// Early return pattern
function getUserAccessLevel(user) {
  // Guard clauses for invalid cases
  if (!user) return "no access";
  if (!user.active) return "account disabled";

  // Main logic follows after guards
  if (user.role === "admin") return "full access";
  if (user.role === "manager") return "moderate access";
  return "basic access";
}

const users = [
  null,
  { active: false, role: "user" },
  { active: true, role: "user" },
  { active: true, role: "manager" },
  { active: true, role: "admin" },
];

console.log("\nEarly return pattern:");
users.forEach((user, i) => {
  console.log(`User ${i}: ${getUserAccessLevel(user)}`);
});

// State machine pattern (simplified)
function processOrder(order) {
  console.log(`Processing order #${order.id}, status: ${order.status}`);

  switch (order.status) {
    case "new":
      console.log("Verifying payment...");
      order.status = "verified";
    // Fall-through is intentional
    case "verified":
      console.log("Preparing shipment...");
      order.status = "shipped";
      break;
    case "shipped":
      console.log("Confirming delivery...");
      order.status = "delivered";
      break;
    case "delivered":
      console.log("Order complete");
      break;
    default:
      console.log("Unknown order status");
  }

  return order;
}

const order = { id: 12345, status: "new" };
console.log("\nState machine pattern:");
const updatedOrder = processOrder(order);
console.log(`Final order status: ${updatedOrder.status}`);
console.log("Processing again:");
processOrder(updatedOrder);
