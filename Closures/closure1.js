var createCounter = function(n) {
    
  return function() {
      return n++;
     

  };
};
console.log( createCounter(10)());//10
console.log( createCounter(10)()); // 10     this is complety a new call 

// createCounter(10) is called → n = 10.
// It returns a function that remembers n = 10 via a closure.
// That returned function is immediately invoked: ()
// Inside the function: return n++
// So it returns 10.



// Why doesn't it return 11?
// Because you’re calling createCounter(10) twice, you're not reusing the same counter.
// Each call creates a new closure with its own n.


// to increment value You need to store the counter function and reuse it:
const counter = createCounter(20);
console.log(counter());  // 20
console.log(counter()); //21
console.log(counter());  //22




// 🔒 What is a Closure?
// A closure is a function that:
//     🔹 "Remembers" the variables from where it was created, even after that outer function has finished running.

// In simple terms:
//     A closure is a function bundled together with its surrounding (enclosed) variables.

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer(); // outer runs, returns inner

counter1(); // logs 1
counter1(); // logs 2
counter1(); // logs 3


// 🔍 What’s happening:
//     outer() creates count = 0
//     inner() has access to count even after outer() is done
//     counter() is a closure — it "remembers" count


// 🔁 Why Closures Are Useful:
//     Private variables (like count in the example)
//     Creating function factories
//     Maintaining state in functional programming

//     Event handlers and callback functions

// 💡 Real-Life Analogy
// Imagine you move out of your house (outer()), but you still have the key (inner()) to access what's inside — even though the house is "gone". That key is the closure.


// ✅ In short:
//     A closure is created every time a function is created inside another function and that inner function uses variables from the outer one.






// 🔍 Step-by-Step Execution in Memory

// 🧠 Step 1: Define outer and inner
// When the script loads:
//     JavaScript creates global memory.
//     It registers the function outer in memory.
//     Global Memory:
//       outer → function definition
//       counter → undefined



  // 🚀 Step 2: const counter = outer();
  //   A new execution context is created for outer().
  //   Inside it, count is declared and initialized to 0.
  //   Then, inner (a function) is returned, BUT:
  //       ✅ It returns with a closure over count, meaning it remembers the count variable even after outer() is done.
  //       Global Memory:
  // outer → function
  // counter → function inner (with closure over: count = 0)
  // So counter now holds the inner function, plus a hidden link to count.


//   ⚙️ Step 3: counter(); // logs 1
//     Calls the inner function from the closure.
//     count++ → now count = 1
//     console.log(1)
// Now count in the closure = 1.



// 🧠 Step 4: counter(); // logs 2
//     Calls the same inner again
//     count++ → count = 2
//     console.log(2)
// The closure still holds onto the same count, now updated.
// 🧠 Step 5: counter(); // logs 3
//     count++ → count = 3
//     console.log(3)



//    



// 🔁 Summary
//     outer() runs once, creates count = 0, and returns inner.
//     inner becomes counter, and keeps access to count via closure.
//     Every call to counter() updates and logs count.
//     Closure allows count to persist in memory.






//another Question

var createCounter = function(init) {
  let temp = init;
  return {
      increment:function(){
          return ++init;
      },
      decrement:function(){
          return --init;
      },
      reset:function(){
          init =temp;
          return init;
      }
  };
};


// 🔍 What It Does
// This function returns an object with three methods:
//     increment() → adds 1 to init and returns it.
//     decrement() → subtracts 1 from init and returns it.
//     reset() → resets init back to its original value stored in temp.
// All these methods share access to the same init and temp variables through a closure.


// 🧠 Step-by-Step Execution in Memory
// 🔹 When Script Loads:
//     JavaScript sets up Global Execution Context.
//     createCounter is defined and stored in global memory.
//     Global Memory:
//   createCounter → function


  // 🔹 You Call createCounter(5)
  // const counter = createCounter(5);


//   👉 What Happens:
//     A new execution context is created for createCounter.
//     init = 5
//     temp = 5 → this stores the original value for reset.
//     The function returns an object with 3 methods: increment, decrement, reset.
// Each method is a closure over the variables init and temp.
// counter = {
//   increment: function() { ... },
//   decrement: function() { ... },
//   reset: function() { ... }
// }
// ✅ And each function remembers init and temp through closure.


// 🧠 Closure Snapshot:
// Closure Environment:
//   init: 5
//   temp: 5
//   Even though createCounter has finished executing, its variables live on in the closures.


// 🔁 Memory Behavior Over Time
// Let's say you now run:
// counter.increment(); // returns 6
// 🔹 What Happens:
//     ++init → init = 6
//     Returns 6
//     temp is still 5

//     counter.increment(); // returns 7
//     ++init → init = 7
//     counter.decrement(); // returns 6
//     --init → init = 6
//     counter.reset(); // returns 5
//     init = temp → init = 5
//     So now everything is back to where it started.



//     🔐 Closure is the Key
// The beauty of this setup is:
//     All three functions share and manipulate the same init and temp — even though the createCounter() call is done.

// They don’t need to re-declare them. The variables stay alive in memory because the returned object’s methods form closures over them.



// 🧊 Memory Visualization
// Global Memory:
//   createCounter → function
//   counter → {
//       increment → function (closure: {init, temp})
//       decrement → function (closure: {init, temp})
//       reset → function (closure: {init, temp})
//   }
// Closure:
//   init: 6   ← changes dynamically
//   temp: 5   ← constant

  // Each method accesses the same environment (init and temp) — that’s what makes it so powerful!





