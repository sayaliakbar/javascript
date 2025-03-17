/**
 * JavaScript Strings - Exercise Solutions
 * ====================================
 */

/**
 * Exercise 1: String Creation and Properties
 */
const city = "New York";
const contraction = "I don't know why I love New York";
const description = `${city} is a beautiful place`;

console.log("City:", city);
console.log("With contraction:", contraction);
console.log("Description:", description);
console.log("City name length:", city.length);

/**
 * Exercise 2: Accessing Characters
 */
const phrase = "JavaScript is fun";
console.log("5th character:", phrase[4]); // a (zero-based indexing, so 5th is at index 4)
console.log("Last character using brackets:", phrase[phrase.length - 1]); // n
console.log("Last character using charAt:", phrase.charAt(phrase.length - 1)); // n

/**
 * Exercise 3: String Methods - Basic Manipulation
 */
const messyText = "   Learn JavaScript   ";
// Step by step approach
const trimmed = messyText.trim(); // "Learn JavaScript"
const uppercase = trimmed.toUpperCase(); // "LEARN JAVASCRIPT"
const replaced = uppercase.replace("JAVASCRIPT", "JS"); // "LEARN JS"
console.log("Final result (step by step):", replaced);

// Method chaining approach
const finalResult = messyText.trim().toUpperCase().replace("JAVASCRIPT", "JS");
console.log("Final result (chained):", finalResult); // "LEARN JS"

/**
 * Exercise 4: Extracting Substrings
 */
const fullName = "John Michael Doe";
const firstName = fullName.slice(0, 4); // "John"
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1); // "Doe"

// Get middle 3 characters (adjusting for shorter names)
const startPosition = Math.floor(fullName.length / 2) - 1;
const middleChars = fullName.substr(startPosition, 3);

console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Middle 3 characters:", middleChars);

/**
 * Exercise 5: Searching Within Strings
 */
const sentence = "The quick brown fox jumps over the lazy dog";

const containsFox = sentence.includes("fox");
console.log("Contains 'fox':", containsFox); // true

const foxIndex = sentence.indexOf("fox");
console.log("Index of 'fox':", foxIndex); // 16

const startsWithThe = sentence.startsWith("The");
console.log("Starts with 'The':", startsWithThe); // true

const endsWithDog = sentence.endsWith("dog");
console.log("Ends with 'dog':", endsWithDog); // true

const lastE = sentence.lastIndexOf("e");
console.log("Last index of 'e':", lastE); // 33

/**
 * Exercise 6: Template Literals
 */
const product = "book";
const price = 12.99;
const quantity = 3;

// Simple version
let orderMessage = `Your order of ${quantity} ${product}${
  quantity > 1 ? "s" : ""
} will cost $${(price * quantity).toFixed(2)}`;

// Alternative with more explicit handling
const plural = quantity > 1 ? "s" : "";
const totalCost = (price * quantity).toFixed(2);
orderMessage = `Your order of ${quantity} ${product}${plural} will cost $${totalCost}`;

console.log(orderMessage);

/**
 * Exercise 7: String Splitting and Joining
 */
const fruitList = "apple,banana,orange,grape,mango";
// Split into array
let fruits = fruitList.split(","); // ['apple', 'banana', 'orange', 'grape', 'mango']

// Add kiwi
fruits.push("kiwi");

// Remove banana (find its index first)
const bananaIndex = fruits.indexOf("banana");
if (bananaIndex !== -1) {
  fruits.splice(bananaIndex, 1);
}

// Join with dashes
const finalFruitString = fruits.join(" - ");
console.log("Final fruit string:", finalFruitString);
// "apple - orange - grape - mango - kiwi"

/**
 * Exercise 8: Practical Application - Email Validation
 */
function isValidEmail(email) {
  // Basic validation rules
  if (!email.includes("@")) return false;

  // Check for character before @
  if (email.indexOf("@") === 0) return false;

  // Check parts after @
  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const domainParts = parts[1].split(".");
  if (domainParts.length < 2) return false;

  // Check for characters between @ and dot
  if (domainParts[0].length === 0) return false;

  // Check for at least 2 chars after last dot
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) return false;

  return true;
}

// Test cases
console.log("Valid email test:", isValidEmail("user@example.com")); // true
console.log("No @ symbol:", isValidEmail("userexample.com")); // false
console.log("No username:", isValidEmail("@example.com")); // false
console.log("No domain:", isValidEmail("user@.com")); // false
console.log("Short TLD:", isValidEmail("user@example.c")); // false
console.log("Multiple @ symbols:", isValidEmail("user@example@com")); // false

/**
 * Exercise 9: String Case Manipulation
 */
function toCamelCase(text) {
  // Replace hyphens and underscores with spaces, then split
  const words = text.replace(/[-_]/g, " ").split(" ");

  // First word stays lowercase
  let camelCase = words[0].toLowerCase();

  // Capitalize first letter of remaining words and add them
  for (let i = 1; i < words.length; i++) {
    if (words[i]) {
      // Skip empty strings
      camelCase +=
        words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }

  return camelCase;
}

console.log("hello-world →", toCamelCase("hello-world")); // helloWorld
console.log("first_name →", toCamelCase("first_name")); // firstName
console.log("background-color-main →", toCamelCase("background-color-main")); // backgroundColorMain
console.log("user_profile_data →", toCamelCase("user_profile_data")); // userProfileData

/**
 * Exercise 10: Challenge - Password Strength Checker
 */
function checkPasswordStrength(password) {
  const result = {
    strength: "weak",
    messages: [],
  };

  // Check length
  if (password.length < 8) {
    result.messages.push("Password should be at least 8 characters long");
  }

  // Check for numbers
  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) {
    result.messages.push("Add at least one number");
  }

  // Check for uppercase
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    result.messages.push("Add at least one uppercase letter");
  }

  // Check for special character
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  if (!hasSpecial) {
    result.messages.push("Add at least one special character");
  }

  // Determine strength based on criteria met
  if (password.length >= 8) {
    if (hasNumber && hasUppercase && hasSpecial) {
      result.strength = "strong";
    } else if (hasNumber) {
      result.strength = "medium";
    }
  }

  return result;
}

console.log("\nPassword Strength Tests:");
console.log("'pass' →", checkPasswordStrength("pass"));
console.log("'password123' →", checkPasswordStrength("password123"));
console.log("'Password123' →", checkPasswordStrength("Password123"));
console.log("'Password123!' →", checkPasswordStrength("Password123!"));
