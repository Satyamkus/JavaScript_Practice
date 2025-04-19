// The reduce() method reduces an array to a single value by applying a callback function to each element, one by one, carrying forward an accumulator.
// It can be used for:
//     Summing numbers
//     Flattening arrays
//     Counting
//     Grouping
//     And much more

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15

// 🔍 What Happens Internally:
// Step	acc	curr	Result
// 1    	0	  1	    1
// 2	    1	  2	    3
// 3	    3	  3	    6
// 4	    6	  4	    10
// 5   	  10	5	    15
// Final output: 15



// const sum = [1, 2, 3].reduce((acc, curr) => acc + curr);
// Here, acc starts as the first element 1, and curr starts from the second element.
// ⚠️ Best practice: Always use an initialValue to avoid bugs, especially with empty arrays.



const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }




// Flattening an array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]


// 🧠 How reduce() Works in Memory
//     JavaScript creates a local accumulator (starting with initialValue)
//     Iterates through the array, updating the accumulator
//     Passes the updated value to the next iteration
//     Returns the final value at the end

// Original array is not modified.


// 📦 Why Use reduce()?
// Feature            	               Benefit
// Powerful + flexible	               Can solve many problems
// Functional & expressive	           Cleaner code than loops
// Combines logic into one step	       Avoids multiple loops
// Immutable operations	               Doesn't touch original array



//common mistakes
// let val = [].reduce((acc, val) => acc + val); // ❌ Error on empty array
// console.log(val);
let val1= [].reduce((acc, val) => acc + val, 0); // ✅ Returns 0
console.log(val1);


// 🔥 Use Cases for .reduce()
//     Summing values
//     Grouping items
//     Flattening arrays
//     Building strings
//     Counting occurrences
//     Removing duplicates
//     Implementing custom map() or filter() (advanced)


//reverse a string
const str = "hello";
const reversed = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed); // "olleh"











// 🔧 Use Case 1: 💵 E-commerce Cart Total Calculation
// In an e-commerce application (like Amazon, Flipkart), you often need to calculate the total price of items in a cart.

const cart = [
  { product: "Laptop", price: 60000, quantity: 1 },
  { product: "Mouse", price: 1500, quantity: 2 },
  { product: "Keyboard", price: 3000, quantity: 1 },
];

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log(`Total Amount: ₹${totalAmount}`); // ₹66000



// 🔧 Use Case 2: 📊 Aggregating User Stats in a Dashboard
// Let’s say you are building an admin dashboard and need to summarize user activities.
const users = [
  { name: "Alice", posts: 10 },
  { name: "Bob", posts: 7 },
  { name: "Charlie", posts: 5 },
];

const totalPosts = users.reduce((acc, user) => acc + user.posts, 0);

console.log(`Total posts: ${totalPosts}`); // 22



// 🔧 Use Case 3: 📅 Grouping Events by Date
// In calendar or task management apps (like Google Calendar or Trello), grouping by date is very common.

const events = [
  { title: "Meeting", date: "2025-04-18" },
  { title: "Code Review", date: "2025-04-18" },
  { title: "Client Call", date: "2025-04-19" },
];

const grouped = events.reduce((acc, event) => {
  if (!acc[event.date]) {
    acc[event.date] = [];
  }
  acc[event.date].push(event.title);
  return acc;
}, {});

console.log(grouped);
/*
{
  "2025-04-18": ["Meeting", "Code Review"],
  "2025-04-19": ["Client Call"]
}
*/



// 🔧 Use Case 4: 📦 Building an Inventory Summary from Products
// For a shop management system, you might want to count the total quantity of each product category.

const inventory = [
  { category: "Electronics", name: "Phone", quantity: 10 },
  { category: "Clothing", name: "T-Shirt", quantity: 5 },
  { category: "Electronics", name: "Laptop", quantity: 2 },
];

const categoryCount = inventory.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + item.quantity;
  return acc;
}, {});

console.log(categoryCount);
// { Electronics: 12, Clothing: 5 }


// 🛠 Summary
// Industry Use Case	                       What .reduce() Does
// Shopping cart	                           Calculates total amount
// Admin dashboards	                         Aggregates user stats
// Task management / calendar apps	         Groups data by date or category
// Inventory system	                         Aggregates items by category
// Social media platform	                   Counts likes, shares, comments, etc.
// Chat applications	                       Calculates unread messages per user/group





// ✅ Use Case: Build a Log Aggregation System Using reduce()
// Imagine you have log entries like this:

const logs = [
  { user: "Alice", action: "login", timestamp: "2025-04-18T10:00:00Z" },
  { user: "Bob", action: "logout", timestamp: "2025-04-18T10:05:00Z" },
  { user: "Alice", action: "upload", timestamp: "2025-04-18T10:10:00Z" },
  { user: "Charlie", action: "login", timestamp: "2025-04-18T10:20:00Z" },
  { user: "Alice", action: "logout", timestamp: "2025-04-18T10:25:00Z" },
];

// 🎯 Goal:
//     Group logs per user
//     Show list of their actions
//     Keep timestamps

const userLogMap = logs.reduce((acc, log) => {
  const { user, action, timestamp } = log;

  if (!acc[user]) {
    acc[user] = [];
  }

  acc[user].push({ action, timestamp });
  return acc;
}, {});
console.log(userLogMap);

/*
{
  Alice: [
    { action: "login", timestamp: "2025-04-18T10:00:00Z" },
    { action: "upload", timestamp: "2025-04-18T10:10:00Z" },
    { action: "logout", timestamp: "2025-04-18T10:25:00Z" }
  ],
  Bob: [
    { action: "logout", timestamp: "2025-04-18T10:05:00Z" }
  ],
  Charlie: [
    { action: "login", timestamp: "2025-04-18T10:20:00Z" }
  ]
}
*/






