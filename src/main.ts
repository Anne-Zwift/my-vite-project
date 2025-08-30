import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello, Vite!</h1>
    <input id="error-container" placeholder="Invalid username or password">
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// Add types to the variables below: Exercise
let courseName: string = 'Front-End Development';
let lessonCount: number = 10;
let isCourseActive: boolean = true;
let topics: string[] = ['HTML', 'CSS', 'JavaScript'];

// This should work after you've added the types
console.log(courseName, lessonCount, isCourseActive, topics);

// TypeScript - errors are caught at compile time
function add(a: number, b: number) {
  return a + b;
}

add(5, 10); // Works as expected, returns 15.
// add(5, '10'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(add(5, 10));

function isEligibleForPromo(user: {
  age: number;
  hasSubscribed: boolean;
}): boolean {
  if (user.age > 21 && user.hasSubscribed) {
    return true;
    } else {
      return false;
    }
}

/*const user = {age: 25, hasSubscribed: true };
const eligible = isEligibleForPromo(user);

console.log(isEligibleForPromo);
console.log(user);*/

function displayError(message: string): void {
  const errorElement = document.getElementById('error-container');
    if(errorElement){
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  
}

displayError('Invalid username or password');

// Function 1: add types to parameters and a return type

function multiply(a: number, b: number):number {
  return a * b;
}
multiply(5, 2);
console.log(multiply(5, 2));

// Function 2: add a type for the 'user' parameter and return type

function formatUser(user: {
  firstName: string;
  lastName: string;
}): boolean {
  if (user.firstName == "Anne" && user.lastName == "Zwift") {
    return true;
    } else {
      return false;
    }
}

const user = {firstName: "Anne", lastName: "Zwift"};
const newUser = formatUser(user);

//console.log(formatUser);
console.log(user);

// Function 3: Add a type for the 'message' parameter and a return type


function logMessage(message: string): void {
  console.log(message);
  // There is no 'return' statement.
}

logMessage('This is a notification.');


// unions and intersection types
// Create a function named processInput. 
// This function should accept one parameter that can be either a string or an array of numbers (i.e., number[]).

function processInput(input: string | number[]) {
  if (typeof input === 'string') {
    console.log(`Input is a string: "${input.toLocaleUpperCase()}"`);
    console.log(`Length: ${input.length}`);
  } else{
    const sum = input.reduce((total, current) => total + current, 0);
    console.log(`Input is an array of number: [${input.join(', ')}]`);
    console.log(`Sum: ${sum}`);
  }
}

processInput("This is a string");
processInput([24 + 25]);
processInput([1, 2, 3]);

// Define two types:

//Product: with properties id (number) and name (string).

//StockInfo: with properties quantity (number) and warehouse (string).

type Product = {
  id: number;
  name: string;
}

type StockInfo = {
  quantity: number;
  warehouse: string;
}

type CombinedProduct = Product & StockInfo;

const newProduct: CombinedProduct = {
  name: 'Brilliant',
  id: 26,
  quantity: 100,
  warehouse: 'Oslo',
}

console.log(newProduct);

//Create an intersection type named InventoryItem that combines the Product and StockInfo types.

type InventoryItem = Product & StockInfo;

const myInventoryItem: InventoryItem = {
  id: 22,
  name: "Coffee table",
  quantity: 3,
  warehouse: 'vest-side',
};

console.log(myInventoryItem);
console.log(`Item Name: ${myInventoryItem.name}`);
console.log(`Quantity: ${myInventoryItem.quantity}`);

//  create aliases for a simple union and an object shape

type ID = string | number;

// an alias for an object shape

type Point = {
  x: number;
  y: number;
};

let userId: ID = 'abc-123';
let mapCoordinate: Point = {x: 10, y: 20};

console.log(userId.toLocaleUpperCase());
console.log(mapCoordinate);

//  create a User type alias. 
// This makes our function signatures much cleaner and more descriptive

/*type User = {
  id: string | number;
  username: string;
  isPremium: boolean;
};*/

// Use the alias function in a function signature

/*function greetUser(user: User): string {
  return `Hello, ${user.username}! Welcome back.`;
}

const currentUser: User = {
  id: 101,
  username: 'dev_jane',
  isPremium: true,
};

console.log(greetUser(currentUser));*/

// Interfaces with interface

interface Points {
  x: number;
  y: number;
}

let mapCoordinates: Points = { x: 10, y: 20};
console.log(mapCoordinates);

interface User {
  id: number;
  username: string;
  isPremium: boolean;
}

// Create a variable 'newUsers' that conforms to the 'User' interface.
const newUsers: User = {
  id: 102,
  username: 'dev_Nick',
  isPremium: true,
}

function greetUser(user: User): string {
  // Inside the function, use the parameter name 'user' to access its properties.
  return `Hello, ${user.username}! Welcome back.`;
}

console.log(greetUser(newUsers));