# JavaScript Strings

## What Are Strings?

In JavaScript, strings are sequences of characters used to represent text. They can include letters, numbers, symbols, and special characters.

**Real-life example:** Think of strings like sentences or words in everyday language - they're how we represent textual information in code.

## Creating Strings

There are three ways to create strings in JavaScript:

### 1. Single Quotes

```javascript
let greeting = "Hello, world!";
```

### 2. Double Quotes

```javascript
let greeting = "Hello, world!";
```

### 3. Template Literals (Backticks)

```javascript
let greeting = `Hello, world!`;
```

**When to use each:**

- Single and double quotes work almost identically
- Use double quotes when your string contains single quotes: `"I'm learning JavaScript"`
- Use single quotes when your string contains double quotes: `'He said "Hello" to me'`
- Use template literals for:
  - String interpolation (embedding variables)
  - Multi-line strings

## String Properties

### Length

The `length` property returns the number of characters in a string:

```javascript
let message = "Hello";
console.log(message.length); // 5
```

**Real-life example:** Checking if a username is too short or a password meets minimum length requirements.

## Common String Methods

### Basic Methods

#### 1. Changing Case

```javascript
let text = "Hello World";
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
```

**Real-life example:** Ensuring consistent formatting of user input.

#### 2. Trimming Whitespace

```javascript
let email = "  user@example.com  ";
console.log(email.trim()); // "user@example.com"
console.log(email.trimStart()); // "user@example.com  "
console.log(email.trimEnd()); // "  user@example.com"
```

**Real-life example:** Cleaning user input from forms.

### Extracting Parts of Strings

#### 1. Specific Characters

```javascript
let text = "JavaScript";
console.log(text[0]); // "J" (zero-based indexing)
console.log(text.charAt(0)); // "J" (alternative method)
```

#### 2. Substrings

```javascript
let language = "JavaScript";

// slice(start, end) - extracts from start up to (but not including) end
console.log(language.slice(0, 4)); // "Java"
console.log(language.slice(4)); // "Script"

// substring(start, end) - similar to slice
console.log(language.substring(0, 4)); // "Java"

// substr(start, length) - starts at position and extracts length characters
console.log(language.substr(4, 6)); // "Script"
```

**Real-life example:** Extracting the first name from a full name.

### Searching Within Strings

#### 1. Finding Positions

```javascript
let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.indexOf("fox")); // 16 (position where "fox" starts)
console.log(sentence.indexOf("cat")); // -1 (not found)

// Last occurrence
console.log(sentence.lastIndexOf("e")); // 33 (position of last "e")
```

#### 2. Including and Matching

```javascript
let email = "user@example.com";

console.log(email.includes("@")); // true
console.log(email.startsWith("user")); // true
console.log(email.endsWith(".com")); // true
```

**Real-life example:** Validating that an email contains an @ symbol.

### Replacing Content

```javascript
let text = "Hello, world!";

// Replace first occurrence
console.log(text.replace("world", "JavaScript")); // "Hello, JavaScript!"

// Replace all occurrences
let repeatedText = "Hello world, world!";
console.log(repeatedText.replace(/world/g, "JavaScript")); // "Hello JavaScript, JavaScript!"
```

**Real-life example:** Find and replace functionality.

## String Manipulation

### Concatenation

Joining strings together:

```javascript
let firstName = "John";
let lastName = "Doe";

// Using the + operator
let fullName = firstName + " " + lastName; // "John Doe"

// Using concat() method
fullName = firstName.concat(" ", lastName); // "John Doe"
```

**Real-life example:** Building a complete greeting with a user's name.

### Template Literals

Modern way to work with strings (ES6):

```javascript
let name = "Alice";
let age = 30;

// String interpolation with variables
let greeting = `Hello, my name is ${name} and I am ${age} years old`;

// Multi-line strings
let multiLine = `This is line one.
This is line two.
This is line three.`;
```

**Real-life example:** Creating email templates with dynamic content.

### Splitting Strings

```javascript
let csvData = "John,Doe,35,New York";
let dataArray = csvData.split(",");
console.log(dataArray); // ["John", "Doe", "35", "New York"]

let sentence = "The quick brown fox jumps";
let words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox", "jumps"]
```

**Real-life example:** Parsing CSV data or breaking a sentence into words.

### Joining Arrays into Strings

```javascript
let words = ["JavaScript", "is", "fun"];
let sentence = words.join(" ");
console.log(sentence); // "JavaScript is fun"
```

**Real-life example:** Creating a comma-separated list from an array of items.

## Working with Special Characters

### Escape Characters

```javascript
// Using quotes inside strings
let quote = 'He said, "JavaScript is awesome!"';
let singleQuote = "It's a beautiful day";

// Other escape characters
let newlines = "Line 1\nLine 2"; // \n creates a new line
let tabbed = "Name:\tJohn"; // \t creates a tab
```

### Unicode Characters

```javascript
let heart = "\u2764"; // ❤
let smiley = "\u{1F600}"; // 😀 (requires ES6 support)
```

## Regular Expressions with Strings

Regular expressions (regex) provide powerful pattern matching for strings.

```javascript
let text = "My phone number is 555-123-4567";
let phoneRegex = /\d{3}-\d{3}-\d{4}/;

// Testing if a string matches a pattern
console.log(phoneRegex.test(text)); // true

// Extracting the matched pattern
let match = text.match(phoneRegex);
console.log(match[0]); // "555-123-4567"

// Advanced: Extract all numbers from a string
let message = "Contact us at 555-123-4567 or 555-987-6543";
let allNumbers = message.match(/\d{3}-\d{3}-\d{4}/g);
console.log(allNumbers); // ["555-123-4567", "555-987-6543"]
```

**Real-life example:** Validating that a user's input matches a specific format like an email or phone number.

## String Performance

- Strings in JavaScript are immutable - they cannot be changed after creation
- Each string operation creates a new string
- For intensive string manipulation, consider using array methods or specialized libraries

```javascript
// Inefficient for large operations
let longText = "";
for (let i = 0; i < 10000; i++) {
  longText += "a"; // Creates a new string each iteration
}

// More efficient using an array
let characters = [];
for (let i = 0; i < 10000; i++) {
  characters.push("a");
}
let efficientLongText = characters.join("");
```

## Common String Patterns

### Converting Between Case Styles

```javascript
// camelCase to kebab-case
function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

console.log(camelToKebab("backgroundColor")); // "background-color"
```

### Creating Slugs for URLs

```javascript
function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

console.log(createSlug("10 Tips for JavaScript Developers!")); // "10-tips-for-javascript-developers"
```

### Truncating Text

```javascript
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

console.log(truncateText("This is a long sentence that needs truncating", 20));
// "This is a long sente..."
```

## Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Additional Resources

- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info: Strings](https://javascript.info/string)
- [Regular Expression Tester](https://regex101.com/)
