// What is .filter()?
// The filter() method creates a new array filled with elements that pass a test (i.e., the callback returns true).
// Just like .map(), it does not modify the original array.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

// 🔍 What Happened?
//     .filter() goes through each element of numbers
//     Only keeps the ones where num % 2 === 0 is true
//     Returns a new array with the even numbers


const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true }
];

const activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);
// Output: 
// [
//   { name: "Alice", isActive: true },
//   { name: "Charlie", isActive: true }
// ]



// 🧠 How It Works in Memory
//     JavaScript creates a new empty array
//     Iterates over the original array
//     For each element, runs the callback
//     If the callback returns true, the element is pushed to the new array
//     Returns the new array
//     The original array remains unchanged



// 🧠 Why Use filter()?
// Reason	Explanation
// ✅ Clean code	-> Expresses intent better than for loops
// ✅ Functional style	-> Encourages immutability
// ✅ Readable	-> Easy to read when filtering complex data
// ✅ Chainable -> Works great with .map(), .reduce(), etc.

// Wrong: returns all items
const result = [1,2,3].filter(num => num * 2); 
console.log(result); // [1,2,3] because non-zero values are truthy

// Correct: use a proper condition
const even = [1,2,3].filter(num => num % 2 === 0);
console.log(even);  // [2]


const cleaned = [0, "", null, "Hello", undefined, 42].filter(Boolean);
console.log(cleaned); // ["Hello", 42]

