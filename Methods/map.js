const numbers = [1, 2, 3, 4];

const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared); // [1, 4, 9, 16]

// How It Works:
// map() goes through each element of numbers
// Applies the function: num * num
// Collects the results into a new array squared

const users = [
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Bob", lastName: "Smith" },
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

console.log(fullNames); // ["Alice Johnson", "Bob Smith"]


// 📦 Behind the Scenes: How map() Works in Memory
// Let’s say you call array.map(fn).

// JavaScript:
//     Creates an empty array internally.
//     Loops through each item in the original array.
//     Applies fn to the current item.
//     Pushes the result to the new array.
//     Returns the new array.
// ✅ The original array is untouched.


// 🧠 Why Use map()?
// Feature	Benefit
// Non-destructive -> 	  Doesn’t change original array
// Functional programming	->   Clean, concise, and expressive
// Immutability	->     Encouraged in modern JS, React, Redux, etc.
// Easily chainable	->  Can be used with .filter(), .reduce(), etc.
// Cleaner than for loops ->  	Less boilerplate and easier to read


// Wrong: undefined array
const result = [1,2,3].map(num => { num * 2 }); 
console.log(result); // [undefined, undefined, undefined]

// Fix: Use return or remove curly braces
const result2 = [1,2,3].map(num => num * 2);


// 🔁 When NOT to Use map()
// Use map() only when:
//     You need a new array
//     You're transforming data
// If you're just looping without returning new values → use forEach() instead.

