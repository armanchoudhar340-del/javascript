// ============================================
// XN ZERO - JavaScript Fundamentals
// ============================================

// 1. VARIABLES
// -----------------
// var (function-scoped, can be redeclared)
var oldWay = "I am var";
console.log("var:", oldWay);

// let (block-scoped, can be reassigned)
let modernVar = "I am let";
console.log("let:", modernVar);
modernVar = "Updated let value";
console.log("updated let:", modernVar);

// const (block-scoped, cannot be reassigned)
const constantVar = "I am const";
console.log("const:", constantVar);

// 2. DATA TYPES
// -----------------
// Primitive Types
let stringType = "Hello World";
let numberType = 42;
let booleanType = true;
let undefinedType;
let nullType = null;
let symbolType = Symbol("unique");
let bigIntType = 12345678901234567890n;

console.log("Data Types:", {
  string: typeof stringType,
  number: typeof numberType,
  boolean: typeof booleanType,
  undefined: typeof undefinedType,
  null: typeof nullType
});

// 3. ARRAYS
// -----------------
let fruits = ["Apple", "Banana", "Orange"];
console.log("Array:", fruits);
console.log("First item:", fruits[0]);
console.log("Array length:", fruits.length);

// Array methods
fruits.push("Mango");           // Add to end
fruits.pop();                   // Remove from end
fruits.unshift("Grape");        // Add to beginning
fruits.shift();                 // Remove from beginning
fruits.forEach(f => console.log("Fruit:", f));

// 4. OBJECTS
// -----------------
let person = {
  name: "John",
  age: 30,
  city: "New York",
  isStudent: false
};

console.log("Object:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding new property
person.job = "Developer";
console.log("Updated object:", person);

// 5. FUNCTIONS
// -----------------
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log("Multiplication:", multiply(5, 3));

// Arrow Function
const add = (a, b) => a + b;
console.log("Addition:", add(10, 20));

// 6. CONDITIONALS
// -----------------
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary operator
let result = score >= 60 ? "Pass" : "Fail";
console.log("Result:", result);

// Switch statement
let day = 2;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// 7. LOOPS
// -----------------
// For loop
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// While loop
let i = 0;
console.log("While loop:");
while (i < 3) {
  console.log("Index:", i);
  i++;
}

// ForEach loop
console.log("ForEach loop:");
[1, 2, 3].forEach(num => console.log("Number:", num));

// For...of loop
console.log("For...of loop:");
for (let item of ["a", "b", "c"]) {
  console.log("Item:", item);
}

// 8. DOM MANIPULATION
// -----------------
// Selecting elements
const elements = {
  allParagraphs: document.querySelectorAll("p"),
  firstParagraph: document.querySelector("p"),
  idElement: document.getElementById("myId"),
  classElements: document.getElementsByClassName("myClass")
};

// Changing content
// document.querySelector("p").textContent = "New text";

// Changing styles
// document.querySelector("p").style.color = "blue";

// 9. EVENT HANDLING
// -----------------
// Example event listener
// document.querySelector("button").addEventListener("click", function() {
//   alert("Button clicked!");
// });

// 10. PROMISE & ASYNC
// -----------------
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

myPromise.then(result => console.log("Promise result:", result));

// Async/Await example
async function asyncExample() {
  try {
    const result = await myPromise;
    console.log("Async result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
asyncExample();

// 11. CLASS (OOP)
// -----------------
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Buddy");
dog.speak();

// 12. EXPORT (for modules)
// -----------------
// export { greet, multiply, add, person };
// export default class XNZero;

