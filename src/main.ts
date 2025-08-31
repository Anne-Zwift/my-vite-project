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

/*function isEligibleForPromo(user: {
  age: number;
  hasSubscribed: boolean;
}): boolean {
  if (user.age > 21 && user.hasSubscribed) {
    return true;
    } else {
      return false;
    }
}
*/
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

/*function formatUser(user: {
  firstName: string;
  lastName: string;
}): boolean {
  if (user.firstName == "Anne" && user.lastName == "Zwift") {
    return true;
    } else {
      return false;
    }
}*/

/*const user = {firstName: "Anne", lastName: "Zwift"};
const newUser = formatUser(user);

//console.log(formatUser);
console.log(user);*/

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

/*interface Points {
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

console.log(greetUser(newUsers));*/

// Exercise type alias

// Create a type alias named HttpVerbs 
// that is a union of the following string literals: "GET", "POST", "PUT", "DELETE".

/**
 * Defines a type alias named HttpVerbs.
 * It is a union of the specific string literals "GET", "POST", "PUT", and "DELETE".
 * A variable of this type can only be one of these four values.
 */
//type HttpVerbs = "GET" | "POST" | "PUT" | "DELETE";

/**
 * A function that handles a web request. The 'method' parameter is typed as HttpVerbs,
 * which ensures that only the allowed string literals can be used.
 * @param url The URL for the request.
 * @param method The HTTP verb for the request.
 */

/*function handleRequest(url: string, method: HttpVerbs) {
  console.log(`Handling a ${method} request to ${url}.`);
}

handleRequest("/users", "GET");*/


//Create a type alias named ApiRequest for an object. 
// The object should have two properties: url (of type string) and method (of type HttpVerbs).


/**
 * Defines a type alias for a union of specific string literals
 * representing valid HTTP verbs.
 */
type HttpVerbs = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Defines a type alias for the shape of an API request object.
 * It requires a url (string) and a method (HttpVerbs).
 */
type ApiRequest = {
  url: string;
  method: HttpVerbs;
};

function createRequestMessage(url: string, method: HttpVerbs): string {
  // use the function parameters directly
  return `This is my url ${url} using ${method}.`;
  
}

// create an object that conforms to the ApiRequest type...
const myRequest: ApiRequest = {
  url: "users/123",
  method: "GET"
};

// ...and then call the function with its properties.
console.log(createRequestMessage(myRequest.url, myRequest.method));
console.log(createRequestMessage("/users", "GET"));


// Create a function named makeRequest that takes one parameter of type ApiRequest
//  and logs a message like "Making a GET request to https://example.com".

function makeRequest(request: ApiRequest) {
  // access the properties directly from the single 'request' object.
  console.log(`Making a ${request.method} request to ${request.url}`);
}

// Now we can create a variable of the ApiRequest type...
const myApiRequest: ApiRequest = {
  url: "https://example.com",
  method: "GET"
};

// ...and pass the entire object to the function.
makeRequest(myApiRequest);

// Create another valid ApiRequest object.
const anotherApiRequest: ApiRequest = {
  url: "https://example.com/items/5",
  method: "GET"
};

// Pass the new object to the function.
makeRequest(anotherApiRequest);



//Create an interface named Vehicle 
// with the following properties: make (string) and model (string).

interface Vehicle {
  make: string;
  model: string;
}

// Create another interface named Car that extends the Vehicle interface. 
// It should add a new property: numberOfDoors (number).

interface Car extends Vehicle {
  numberOfDoors: number;
}

// Create a variable of type Car and assign it a valid object with all the required properties.

const myCar: Car = {
  make: "BMW",
  model: "Tiger",
  numberOfDoors: 4,
};

//Log your Car object to the console.
console.log(myCar);



// Creating a Generic Function

function getFirstNumber(items:number[]): number {
  return items[0];
}

function getFirstString(items:string[]): string {
  return items[0];
}

// using any
// We lose all type safety. We can't use number or string methods on firstItem without a risk of runtime errors.

function getFirstElementAny(items:any[]): any {
  return items[0];
}

const firstItem = getFirstElementAny([1, 'a', true]);

//Here is a generic function that solves our problem.

function getFirstElement<T>(items:T[]): T {
  return items[0];
}

const numbers = [10, 20, 30];
const firstNumber = getFirstElement(numbers);

const strings = ['apple', 'banana', 'cherry'];
const firstString = getFirstElement(strings);

console.log(strings);


//create a function that takes some data 
// and returns it in a standardized object format.

function createDataResponse<T>(data: T): {success: boolean; data: T } {
  return {
    success: true,
    data: data,
  };
}

const user = { name: 'Alice', id: 1};
const userResponse = createDataResponse(user);

console.log(user);
console.log(userResponse);