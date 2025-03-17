/**
 * JavaScript Strings - Examples
 * ===========================
 */

// ----- Creating Strings -----

// Three ways to create strings
const singleQuoted = "Hello, world!";
const doubleQuoted = "Hello, world!";
const templateLiteral = `Hello, world!`;

console.log(singleQuoted);
console.log(doubleQuoted);
console.log(templateLiteral);

// When to use different quotes
const containsSingleQuote = "I'm learning JavaScript";
const containsDoubleQuote = 'He said "Hello" to me';
console.log(containsSingleQuote);
console.log(containsDoubleQuote);

// ----- String Properties -----

// String length
const text = "Hello";
console.log(`The string "${text}" has ${text.length} characters`);

// ----- Basic String Methods -----

// Case conversion
console.log("toLowerCase():", "HELLO WORLD".toLowerCase()); // hello world
console.log("toUpperCase():", "hello world".toUpperCase()); // HELLO WORLD

// Trimming whitespace
const untrimmedText = "   Hello, world!   ";
console.log("Original:", `"${untrimmedText}"`);
console.log("trim():", `"${untrimmedText.trim()}"`);
console.log("trimStart():", `"${untrimmedText.trimStart()}"`);
console.log("trimEnd():", `"${untrimmedText.trimEnd()}"`);

// ----- Accessing Characters -----

const language = "JavaScript";
// Using bracket notation (zero-indexed)
console.log("First character:", language[0]);
console.log("Fourth character:", language[3]);

// Using charAt method
console.log("First character (charAt):", language.charAt(0));
// If position is out of range, charAt returns an empty string
console.log("Out of range (bracket notation):", language[20]); // undefined
console.log("Out of range (charAt):", language.charAt(20)); // empty string

// ----- Extracting Substrings -----

// slice(startIndex, endIndex) - extracts up to but not including endIndex
console.log("slice(0, 4):", language.slice(0, 4)); // "Java"
console.log("slice(4):", language.slice(4)); // "Script"
// Negative indices count from the end
console.log("slice(-6):", language.slice(-6)); // "Script"

// substring(startIndex, endIndex) - similar to slice but doesn't accept negative indices
console.log("substring(0, 4):", language.substring(0, 4)); // "Java"
console.log("substring(4):", language.substring(4)); // "Script"

// substr(startIndex, length) - starts at startIndex and extracts length characters
console.log("substr(4, 6):", language.substr(4, 6)); // "Script"

// ----- Searching within Strings -----

const sentence = "The quick brown fox jumps over the lazy dog";

// indexOf - returns position of first occurrence or -1 if not found
console.log("indexOf('fox'):", sentence.indexOf("fox")); // 16
console.log("indexOf('cat'):", sentence.indexOf("cat")); // -1

// lastIndexOf - returns position of last occurrence or -1 if not found
console.log("lastIndexOf('the'):", sentence.lastIndexOf("the")); // 31

// includes - returns true if the string contains the substring
console.log("includes('fox'):", sentence.includes("fox")); // true
console.log("includes('cat'):", sentence.includes("cat")); // false

// startsWith and endsWith
console.log("startsWith('The'):", sentence.startsWith("The")); // true
console.log("endsWith('dog'):", sentence.endsWith("dog")); // true

// ----- Replacing Content -----

// replace - replaces first occurrence
let original = "Hello, world!";
console.log(
  "replace('world', 'JavaScript'):",
  original.replace("world", "JavaScript")
);

// Replace all occurrences using regex with g flag
let repeatedText = "Hello world, world!";
console.log(
  "replace(/world/g, 'JavaScript'):",
  repeatedText.replace(/world/g, "JavaScript")
);

// ----- String Concatenation -----

// Using + operator
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log("Concatenation with +:", fullName);

// Using concat method
const fullNameConcat = firstName.concat(" ", lastName);
console.log("Concatenation with concat():", fullNameConcat);

// ----- Template Literals -----

const name = "Alice";
const age = 30;

// String interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Template literal with variables:", greeting);

// Multi-line strings
const multiLine = `This is line 1.
This is line 2.
This is line 3.`;
console.log("Multi-line template literal:");
console.log(multiLine);

// Expressions in template literals
console.log(`5 + 5 = ${5 + 5}`);

// ----- Splitting and Joining -----

// split - converts string to array
const csvData = "John,Doe,35,New York";
const dataParts = csvData.split(",");
console.log("split(','):", dataParts);

// Breaking a sentence into words
const words = "The quick brown fox".split(" ");
console.log("split(' '):", words);

// join - converts array back to string
console.log("join(' '):", words.join(" "));
console.log("join('-'):", words.join("-"));

// ----- Special Characters -----

// Escape sequences
console.log("Quotes: \"Double quotes\" and 'Single quotes'");
console.log("New line:\nSecond line");
console.log("Tab separated:\tvalues");
console.log("Backslash: \\");

// Unicode characters
console.log("Heart symbol: \u2764");
console.log("Emoji (ES6+): \u{1F600}");

// ----- Regular Expressions with Strings -----

const phoneNumber = "My phone number is 555-123-4567.";

// test - checks if pattern exists
const phonePattern = /\d{3}-\d{3}-\d{4}/;
console.log("Regex test():", phonePattern.test(phoneNumber)); // true

// match - extracts the matched parts
const matches = phoneNumber.match(phonePattern);
console.log("match():", matches[0]); // "555-123-4567"

// Multiple matches with global flag
const contactInfo = "Call me at 555-123-4567 or 555-987-6543";
const allMatches = contactInfo.match(/\d{3}-\d{3}-\d{4}/g);
console.log("match() with global flag:", allMatches); // ["555-123-4567", "555-987-6543"]

// ----- String Performance -----

console.log("Building long strings:");

console.time("Inefficient way");
let inefficientString = "";
for (let i = 0; i < 10000; i++) {
  inefficientString += "a";
}
console.timeEnd("Inefficient way");

console.time("Efficient way");
const parts = [];
for (let i = 0; i < 10000; i++) {
  parts.push("a");
}
const efficientString = parts.join("");
console.timeEnd("Efficient way");

// ----- Practical String Patterns -----

// Case conversion example
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

console.log(
  "camelToKebab('backgroundColor'):",
  camelToKebab("backgroundColor")
);
console.log("camelToKebab('userFirstName'):", camelToKebab("userFirstName"));

// URL slug creator
function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

console.log(
  "createSlug('10 Tips for JavaScript Developers!'):",
  createSlug("10 Tips for JavaScript Developers!")
);

// Text truncation
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

const longText =
  "This is a very long sentence that needs to be truncated for display purposes.";
console.log("truncateText:", truncateText(longText, 20));
