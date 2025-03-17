/**
 * JavaScript Data Types - Exercise Solutions
 * ========================================
 */

/**
 * Exercise 1: Primitive Data Types
 */
const myString = "Hello, world!";
const myNumber = 42.5;
const myBoolean = true;
let myUndefined;
const myNull = null;
const mySymbol = Symbol("unique");
const myBigInt = 9007199254740993n;

console.log("String:", myString, typeof myString);
console.log("Number:", myNumber, typeof myNumber);
console.log("Boolean:", myBoolean, typeof myBoolean);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Null:", myNull, typeof myNull);
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("BigInt:", myBigInt, typeof myBigInt);

/**
 * Exercise 2: Reference Data Types
 */
const person = {
  name: "Alice",
  age: 28,
  isEmployed: true,
  hobbies: ["reading", "hiking", "coding"],
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

const mixedArray = [1, "two", true, null, { key: "value" }, [1, 2, 3]];

function addNumbers(a, b) {
  return a + b;
}

console.log("Object:", person, typeof person);
console.log("Array:", mixedArray, typeof mixedArray);
console.log("Function:", addNumbers, typeof addNumbers);
console.log("Method call:", person.greet());

/**
 * Exercise 3: Type Checking
 */
console.log("\n--- Type Checking ---");
console.log("Is mixedArray an array?", Array.isArray(mixedArray));
console.log("Is person an array?", Array.isArray(person));
console.log("Is myNull null?", myNull === null);
console.log("Is NaN not a number?", Number.isNaN(NaN));
console.log("Is 'hello' not a number?", Number.isNaN("hello"));
console.log("Is Number('hello') not a number?", Number.isNaN(Number("hello")));

/**
 * Exercise 4: Type Conversion
 */
console.log("\n--- Type Conversion ---");

// String to Number
const stringNumber = "42.5";
console.log("Number():", Number(stringNumber)); // 42.5 (works with decimals)
console.log("parseInt():", parseInt(stringNumber)); // 42 (truncates decimal)
console.log("parseFloat():", parseFloat(stringNumber)); // 42.5 (keeps decimals)

// Number to String
const num = 123.456;
console.log("String():", String(num), typeof String(num)); // "123.456" string
console.log(".toString():", num.toString(), typeof num.toString()); // "123.456" string

// To Boolean
console.log("\nTo Boolean:");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

/**
 * Exercise 5: Type Coercion
 */
console.log("\n--- Type Coercion ---");

// Prediction: "52" (string concatenation)
console.log('"5" + 2 =', "5" + 2);

// Prediction: 3 (string converted to number)
console.log('"5" - 2 =', "5" - 2);

// Prediction: 10 (strings converted to numbers)
console.log('"5" * "2" =', "5" * "2");

// Prediction: 2.5 (strings converted to numbers)
console.log('"5" / "2" =', "5" / "2");

// Prediction: true (value equality, type coercion happens)
console.log('"5" == 5 is', "5" == 5);

// Prediction: false (strict equality, no type coercion)
console.log('"5" === 5 is', "5" === 5);

// Prediction: true (value equality with type coercion)
console.log("0 == false is", 0 == false);

// Prediction: false (strict equality, different types)
console.log("0 === false is", 0 === false);

// Prediction: true (both considered "empty" values)
console.log("null == undefined is", null == undefined);

// Prediction: false (strict equality, different types)
console.log("null === undefined is", null === undefined);
