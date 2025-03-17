/**
 * JavaScript Numbers and Math - Exercise Solutions
 * ============================================
 */

/**
 * Exercise 1: Number Creation and Basic Operations
 */
const myInteger = 42;
const myFloat = 3.14159;
const myScientific = 1.5e3; // 1500

console.log("Integer:", myInteger);
console.log("Floating point:", myFloat);
console.log("Scientific notation:", myScientific);

// Addition of all three
const sum = myInteger + myFloat + myScientific;
console.log("Sum:", sum); // 1545.14159

// Multiplication of all three
const product = myInteger * myFloat * myScientific;
console.log("Product:", product); // 197871.97

// Division of floating point by integer
const quotient = myFloat / myInteger;
console.log("Quotient:", quotient); // 0.07479...

// Remainder when scientific notation number is divided by the integer
const remainder = myScientific % myInteger;
console.log("Remainder:", remainder); // 8 (1500 % 42)

/**
 * Exercise 2: Number Methods and Properties
 */
const price = 42.9687;
console.log("Original price:", price);

// Format with 2 decimal places
const formattedPrice = price.toFixed(2);
console.log("Formatted price (2 decimal places):", formattedPrice); // "42.97"

// Convert to string with 3 significant digits
const significantDigits = price.toPrecision(3);
console.log("Three significant digits:", significantDigits); // "43.0"

// Check if price is an integer
const isInteger = Number.isInteger(price);
console.log("Is price an integer?", isInteger); // false

// Largest and smallest safe integers
console.log("Largest safe integer:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Smallest safe integer:", Number.MIN_SAFE_INTEGER); // -9007199254740991

/**
 * Exercise 3: Math Object
 */
// Calculate and log
const squareRoot = Math.sqrt(16);
console.log("Square root of 16:", squareRoot); // 4

const powerResult = Math.pow(2, 8); // or 2 ** 8
console.log("2 raised to the power of 8:", powerResult); // 256

const absoluteValue = Math.abs(-45.3);
console.log("Absolute value of -45.3:", absoluteValue); // 45.3

const largerNumber = Math.max(12, 19);
console.log("Larger of 12 and 19:", largerNumber); // 19

// Random number between 1 and 100 inclusive
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNum);

// Rounding numbers
console.log("4.6 rounded to nearest integer:", Math.round(4.6)); // 5
console.log("4.6 rounded down:", Math.floor(4.6)); // 4
console.log("4.6 rounded up:", Math.ceil(4.6)); // 5

/**
 * Exercise 4: Number Conversions
 */
// Strings to numbers
const strToNum = Number("42");
console.log("String '42' to number:", strToNum); // 42

const strToFloat = parseFloat("3.14159");
console.log("String '3.14159' to float:", strToFloat); // 3.14159

const binaryToDecimal = parseInt("1010", 2);
console.log("Binary '1010' to decimal:", binaryToDecimal); // 10

const hexToDecimal = parseInt("FF", 16);
console.log("Hex 'FF' to decimal:", hexToDecimal); // 255

// Number to different bases
const decimalToBinary = (255).toString(2);
console.log("255 to binary string:", decimalToBinary); // "11111111"

const decimalToHex = (255).toString(16);
console.log("255 to hex string:", decimalToHex); // "ff"

const decimalToOctal = (255).toString(8);
console.log("255 to octal string:", decimalToOctal); // "377"

/**
 * Exercise 5: Handling Special Number Cases
 */
// Creating special values
const notANumber = 0 / 0; // or Number("hello")
console.log("NaN example:", notANumber); // NaN

const infinityValue = 1 / 0;
console.log("Infinity example:", infinityValue); // Infinity

const negativeInfinity = -1 / 0;
console.log("Negative Infinity example:", negativeInfinity); // -Infinity

// Checking values
console.log("Is NaN?", Number.isNaN(notANumber)); // true
console.log("Is Infinity finite?", Number.isFinite(infinityValue)); // false
console.log("Is 42 a safe integer?", Number.isSafeInteger(42)); // true
console.log(
  "Is 9007199254740992 a safe integer?",
  Number.isSafeInteger(9007199254740992)
); // false

/**
 * Exercise 6: Floating-Point Precision
 */
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false

function areAlmostEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}

console.log(
  "Are 0.1 + 0.2 and 0.3 almost equal?",
  areAlmostEqual(0.1 + 0.2, 0.3)
); // true

/**
 * Exercise 7: Calculating with Percentages
 */
function calculateDiscount(originalPrice, discountPercentage) {
  // Calculate the discount amount
  const discountAmount = originalPrice * (discountPercentage / 100);

  // Calculate the final price
  const finalPrice = originalPrice - discountAmount;

  // Return the formatted result
  return finalPrice.toFixed(2);
}

console.log("80 with 25% discount:", calculateDiscount(80, 25)); // "60.00"
console.log("30 with 10% discount:", calculateDiscount(30, 10)); // "27.00"
console.log("199.99 with 15% discount:", calculateDiscount(199.99, 15)); // "169.99"

/**
 * Exercise 8: Basic Statistical Calculations
 */
function calculateStats(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return {
      sum: 0,
      average: 0,
      minimum: null,
      maximum: null,
      range: 0,
    };
  }

  // Calculate sum
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calculate average
  const average = sum / numbers.length;

  // Find minimum and maximum
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);

  // Calculate range
  const range = maximum - minimum;

  return {
    sum,
    average,
    minimum,
    maximum,
    range,
  };
}

const numberSet = [18, 27, 5, 42, 13, 30];
console.log("Statistics for", numberSet, ":");
console.log(calculateStats(numberSet));
// Output: {
//   sum: 135,
//   average: 22.5,
//   minimum: 5,
//   maximum: 42,
//   range: 37
// }

/**
 * Exercise 9: Practical Application - Loan Calculator
 */
function calculateLoan(principal, annualRate, loanTerm) {
  // Convert annual rate to monthly rate (decimal)
  const monthlyRate = annualRate / 100 / 12;

  // Total number of payments
  const totalPayments = loanTerm * 12;

  // Calculate monthly payment using the formula:
  // P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  // Calculate total payment over the loan term
  const totalPayment = monthlyPayment * totalPayments;

  // Calculate total interest paid
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
}

// Test with a $200,000 loan at 4.5% for 30 years
const loanResult = calculateLoan(200000, 4.5, 30);
console.log("Loan calculation results:");
console.log("Monthly payment:", loanResult.monthlyPayment); // ~$1,013.37
console.log("Total payment:", loanResult.totalPayment); // ~$364,813.20
console.log("Total interest:", loanResult.totalInterest); // ~$164,813.20

/**
 * Exercise 10: Challenge - Fibonacci Sequence
 */
// Iterative approach
function fibonacciIterative(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

// Recursive approach (less efficient for large values)
function fibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Test with 10th number
console.log("10th Fibonacci number (iterative):", fibonacciIterative(10)); // 55
console.log("10th Fibonacci number (recursive):", fibonacciRecursive(10)); // 55

// Test with 20th number
console.log("20th Fibonacci number (iterative):", fibonacciIterative(20)); // 6765
console.log("20th Fibonacci number (recursive):", fibonacciRecursive(20)); // 6765

// Performance comparison for larger values
console.log("\nPerformance comparison:");

console.time("Iterative (n=30)");
fibonacciIterative(30);
console.timeEnd("Iterative (n=30)");

console.time("Recursive (n=30)");
fibonacciRecursive(30);
console.timeEnd("Recursive (n=30)");
// The recursive approach will be much slower for large values of n
// due to repeated calculations of the same values
