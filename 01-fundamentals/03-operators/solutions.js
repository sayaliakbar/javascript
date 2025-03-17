/**
 * JavaScript Operators - Exercise Solutions
 * ======================================
 */

/**
 * Exercise 1: Arithmetic Operations
 */
const num1 = 15;
const num2 = 4;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;
const power = num1 ** num2;

console.log(`Sum: ${num1} + ${num2} = ${sum}`);
console.log(`Difference: ${num1} - ${num2} = ${difference}`);
console.log(`Product: ${num1} × ${num2} = ${product}`);
console.log(`Quotient: ${num1} ÷ ${num2} = ${quotient}`);
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`);
console.log(`Power: ${num1} ^ ${num2} = ${power}`);

// Demonstrate increment
let count = 5;
console.log("Original count:", count); // 5
console.log("Postfix increment:", count++); // 5 (returns 5, then increments to 6)
console.log("After postfix increment:", count); // 6
console.log("Prefix increment:", ++count); // 7 (increments to 7, then returns 7)

/**
 * Exercise 2: Assignment Operations
 */
let score = 100;
console.log("Initial score:", score); // 100

score += 50; // score = score + 50
console.log("After addition:", score); // 150

score -= 30; // score = score - 30
console.log("After subtraction:", score); // 120

score *= 2; // score = score * 2
console.log("After multiplication:", score); // 240

score /= 4; // score = score / 4
console.log("After division:", score); // 60

score %= 5; // score = score % 5
console.log("Final score (remainder):", score); // 0

/**
 * Exercise 3: Comparison Operations
 */
const myAge = 28;
const otherAge = 34;
const myAgeString = "28";

console.log("Is my age greater than other age?", myAge > otherAge); // false
console.log("Is my age less than or equal to other age?", myAge <= otherAge); // true
console.log(
  "Is my age strictly equal to my age as string?",
  myAge === myAgeString
); // false
console.log(
  "Is my age loosely equal to my age as string?",
  myAge == myAgeString
); // true

/**
 * Exercise 4: Logical Operations
 */
const isRaining = true;
const hasUmbrella = false;
const isCold = true;
const hasJacket = false;

const shouldTakeUmbrella = isRaining && !hasUmbrella;
console.log("Should take umbrella?", shouldTakeUmbrella); // true (is raining and doesn't have umbrella)

const shouldGoOutside = !isRaining || hasUmbrella;
console.log("Should go outside?", shouldGoOutside); // false (is raining and no umbrella)

const shouldTakeJacket = isCold && !hasJacket;
console.log("Should take jacket?", shouldTakeJacket); // true (is cold and doesn't have jacket)

const preparedForBadWeather = hasUmbrella && hasJacket;
console.log("Fully prepared for bad weather?", preparedForBadWeather); // false (missing both items)

/**
 * Exercise 5: String Concatenation
 */
const firstName = "Alice";
const lastName = "Johnson";
const city = "New York";
const age = 27;

let sentence = firstName + " " + lastName + " is " + age + " years old";
console.log(sentence); // Alice Johnson is 27 years old

sentence += " and lives in " + city + ".";
console.log(sentence); // Alice Johnson is 27 years old and lives in New York.

/**
 * Exercise 6: The Ternary Operator
 */
const hour = 15; // 3 PM

const greeting =
  hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";

console.log(greeting); // Good afternoon!

/**
 * Exercise 7: Operator Precedence
 */
// Predictions
console.log("Prediction: 4 + 5 * 2 = 14 (multiplication first)");
console.log("Prediction: (4 + 5) * 2 = 18 (parentheses first)");
console.log("Prediction: 10 / 2 + 3 = 8 (division first, then addition)");
console.log("Prediction: 10 / (2 + 3) = 2 (parentheses first, then division)");

// Actual results
console.log("4 + 5 * 2 =", 4 + 5 * 2); // 14
console.log("(4 + 5) * 2 =", (4 + 5) * 2); // 18
console.log("10 / 2 + 3 =", 10 / 2 + 3); // 8
console.log("10 / (2 + 3) =", 10 / (2 + 3)); // 2

/**
 * Exercise 8: Short-Circuit Evaluation
 */
let username = null;
const displayName = username || "Guest User";
console.log("Display name:", displayName); // Guest User

const user = null;
const userCity = user && user.address && user.address.city;
console.log("User's city:", userCity); // null (safe access, no error)

/**
 * Exercise 9: Challenge - Shopping Cart with Operators
 */
const cartSubtotal = 100;
const taxRate = 0.08;
const flatShippingRate = 10;
const hasDiscountCode = true;
const discountAmount = 15;

// Calculations
const taxAmount = cartSubtotal * taxRate;
const freeShipping = cartSubtotal > 75;
const shippingCost = freeShipping ? 0 : flatShippingRate;
const appliedDiscount = hasDiscountCode ? discountAmount : 0;
let finalTotal = cartSubtotal + taxAmount;
finalTotal += shippingCost;
finalTotal -= appliedDiscount;

console.log("Cart Summary:");
console.log("Subtotal:", cartSubtotal);
console.log("Tax:", taxAmount);
console.log("Shipping:", freeShipping ? "Free" : flatShippingRate);
console.log("Discount:", hasDiscountCode ? discountAmount : "No discount");
console.log("Final Total:", finalTotal);
