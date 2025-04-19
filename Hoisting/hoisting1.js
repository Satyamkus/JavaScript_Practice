// 📌 What is Hoisting?

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) before code execution.
// 💡 In simple words:

// JavaScript "hoists" (lifts) the declarations (not initializations) of variables and functions to the top of their scope during compilation./




// 🧠 What Gets Hoisted?
// Item	                      Hoisted?	                 Behavior
// var variables	              ✅ Yes	                  Declaration hoisted, value is undefined

// let / const	                ✅ Yes	                  Declaration hoisted, but not initialized
//                                                       (Temporal Dead Zone)

// Functions (function)	       ✅ Yes	                Whole function is hoisted

// Function expressions 	       ❌ Only variable is hoisted, not the function
// (const foo = function())




1.//var hoisting
console.log(a); // undefined (not error)
var a = 5;

// Why?
// JS interprets this as:
// var a;
// console.log(a); // undefined
// a = 5;





2.// let / const Hoisting (TDZ)
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;
// Even though b is hoisted, it's in a Temporal Dead Zone from the start of the block to the declaration.


// 📦 Temporal Dead Zone (TDZ)
//     A let or const variable is inaccessible before its declaration in the code.
//     It exists, but accessing it throws an error.
function test() {
  console.log(x); // ReferenceError
  let x = 5;
}



3.//Function Hoisting
greet(); // ✅ Works: "Hello"
function greet() {
  console.log("Hello");
}
// This is because the entire function definition is hoisted.


4. // Function Expression (Not Hoisted Fully)
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi");
};

// why
// var sayHi;
// sayHi(); // sayHi is undefined at this point
// sayHi = function () { ... };



5.//Hoisting in Block Scope
{
  console.log(a); // undefined
  var a = 1;
}

{
  console.log(b); // ❌ ReferenceError
  let b = 2;
}




// ✅ Interview Pro Tips
//     Only declarations are hoisted, not initializations.
//     let and const are hoisted too, but not initialized – they're in Temporal Dead Zone.
//     Function declarations are hoisted fully.
//     Function expressions and arrow functions are not hoisted fully.
//     var is function-scoped, let and const are block-scoped.



// 🎯 Final Tip
// In an interview, code and explain like this:
//     “In JavaScript, variable and function declarations are hoisted to the top of their scope. For var, the variable is hoisted and initialized as undefined. For let and const, they’re hoisted too, but uninitialized, which leads to the Temporal Dead Zone. Function declarations are fully hoisted, while function expressions are not.”


// ⚙️ Real-World Use Cases of Hoisting in Projects
// 1. ✅ Function Hoisting Enables Top-Level Logic Flow
// In real apps, you’ll often see function declarations at the bottom, but used at the top.
// login.js

// Called at the top
handleLogin(userInput);

function handleLogin(data) {
  // logic here...
}

// 📌 Why it works: function handleLogin() is hoisted.
// 👉 Used in:
//     Express route handlers
//     DOM event initializers
//     Utility scripts



// 2. ⚠️ Avoiding var Hoisting Pitfalls in Loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Outputs: 3 3 3 (because `var` is hoisted and shared)
// 📌 Industry Insight: Legacy projects often use var. Understanding hoisting helps avoid this classic bug.
// ✅ Fix with let (block scoped, not hoisted the same way):

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Outputs: 0 1 2






//3.🛑 Preventing TDZ Errors with let/const
function setupUser() {
  console.log(user); // ❌ ReferenceError
  const user = getUserFromStorage();
}
// 📌 Why it matters in real apps: You may pull configs, env vars, or user data too early. Knowing about TDZ (Temporal Dead Zone) helps you structure your functions right.






// 4. 🧪 Understanding Hoisting Helps with Testing & Mocks
// In unit tests (e.g., using Jest):
test('user is authenticated', () => {
  expect(isAuthenticated()).toBe(true);
});

function isAuthenticated() {
  return true;
}
// ✅ Works fine because the function is hoisted.
const isAuthenticated = () => true;
test('user is authenticated', () => {
  expect(isAuthenticated()).toBe(true); // ❌ ReferenceError if declared after
});
// 📌 Lesson: Function declarations are safer for top-down flow in tests.





// 🧠 So When Is Hoisting Useful in Projects?
// Scenario	                                       Why Hoisting Helps
// Clean, readable top-down logic	            Call functions before they are defined
// Avoiding duplicate declarations	            Be aware of how var hoists
// Legacy code maintenance	                    Know how hoisting affects logic bugs
// Refactoring JS to modern standards	        Convert var to let/const carefully
// Writing safer tests and setup scripts	      Predict hoisting to avoid errors




// ✅ Pro Tip for Interviews
//     “In projects, understanding hoisting is less about using it deliberately, and more about avoiding issues that arise due to it—especially with var, TDZ, or function expressions. It also helps us write cleaner and more predictable initialization code.”



