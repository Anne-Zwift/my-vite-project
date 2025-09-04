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
//type HttpVerbs = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Defines a type alias for the shape of an API request object.
 * It requires a url (string) and a method (HttpVerbs).
 */
/*type ApiRequest = {
  url: string;
  method: HttpVerbs;
};*/

/*function createRequestMessage(url: string, method: HttpVerbs): string {
  // use the function parameters directly
  return `This is my url ${url} using ${method}.`;
  
}*/

// create an object that conforms to the ApiRequest type...
/*const myRequest: ApiRequest = {
  url: "users/123",
  method: "GET"
};*/

// ...and then call the function with its properties.
/*console.log(createRequestMessage(myRequest.url, myRequest.method));
console.log(createRequestMessage("/users", "GET"));*/


// Create a function named makeRequest that takes one parameter of type ApiRequest
//  and logs a message like "Making a GET request to https://example.com".

/*function makeRequest(request: ApiRequest) {
  // access the properties directly from the single 'request' object.
  console.log(`Making a ${request.method} request to ${request.url}`);
}*/

// Now we can create a variable of the ApiRequest type...
/*const myApiRequest: ApiRequest = {
  url: "https://example.com",
  method: "GET"
};*/

// ...and pass the entire object to the function.
//makeRequest(myApiRequest);

// Create another valid ApiRequest object.
/*const anotherApiRequest: ApiRequest = {
  url: "https://example.com/items/5",
  method: "GET"
};*/

// Pass the new object to the function.
//makeRequest(anotherApiRequest);



//Create an interface named Vehicle 
// with the following properties: make (string) and model (string).
/*
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

const products = ['Laptop', 'Mouse'];
const productResponse = createDataResponse(products);

console.log(productResponse);



// Generic Constraints, using extends
//constrain T to be any type that has a 'length' property of type 'number'

interface WithLength {
  length: number;
}

function logLength<T extends WithLength>(arg:T):void {
  console.log(`Length is: ${arg.length}`);
}

logLength('Hello, world!');*/


// A generic interface for API responses

interface ApiResponse<DataType> {
  data: DataType;
  meta: {
    requestTime: number;
    source: string;
  };
}

// Specific types for application data

interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  price: number;
}


// Reusable generic function that accepts any ApiResponse
function processResponse<T>(response: ApiResponse<T>) {
  console.log(`Processing response from ${response.meta.source}`);
  console.log(`Request time: ${response.meta.requestTime}ms`);
  console.log('Received data:', response.data);

  // You can even add logic that depends on the data type
  if (Array.isArray(response.data)) {
    console.log(`This is a list with ${response.data.length} items.`);
  }
}


// Now we can reuse our ApiResponse for different endpoints.

const userResponse: ApiResponse<User> = {
  data: {
    id: 1,
    name: 'Alice',
  },
  meta: {
    requestTime: 55,
    source: 'user-api',
  },
};

const productListResponse: ApiResponse<Product[]> = {
  data: [
    {sku: 'LPT-01', price: 1200},
    {sku: 'MOU-02', price: 50},
  ],
  meta: {
    requestTime: 80,
    source: 'inventory-api',
  },
};

// Calling the function with a user response
console.log('--- Calling with User Response ---');
processResponse(userResponse);

// Calling the function with a product list response
console.log('\n--- Calling with Product List Response ---');
processResponse(productListResponse);


// task 1: generic function
/**
 * A generic function that reverses the order of elements in an array.
 * @param items The array of elements to reverse.
 * @returns A new array with the elements in reverse order.
 */

function reverseArray<T>(items: T[]): T[] {
  return [...items].reverse();
}

/*const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = reverseArray(numbers);
console.log('Original numbers array', numbers);
console.log('Reversed numbers array', reverseNumbers);

const strings = ['apple', 'banana', 'watermelon'];
console.log('Original strings', strings);
const reveredStrings = reverseArray(strings);
console.log('Reversed strings', reveredStrings);*/


// task 2: Create a generic interface named Collection.

interface Collection<T> {
  name: string;
  items: T[];  
}

/*type Movie = {
  title: string;
  year: number;
}*/

/*const movieCollection: Collection<Movie> = {
  name: 'My favorite movies',
  items: [
    { title: 'Alice in Wonderland', year: 1990 },
    { title: 'What I learned of an Octopus', year: 2000 },
    { title: 'The man who knew Infinity', year: 2010 },
  ],

};*/

//console.log(movieCollection);

//Enums: Giving Names to Sets of Values
//Numeric Enums
/*enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let playerDirection: Direction = Direction.Down;

if (playerDirection === Direction.Down) {
  console.log('Player is moving down.'); // This will be logged.
}

console.log(playerDirection); // Logs: 1

//String Enums
enum LogLevel {
  Info = 'INFO',
  Warning = 'WARNING',
  Error = 'ERROR',
}

function logMessages(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

logMessages('User logged in successfully.', LogLevel.Info);
logMessages('API key is about to expire.', LogLevel.Warning);*/


// Tuples

/*let userProfile: [string, number];

// A valid assignment:
userProfile = ['Alice', 30];

// An invalid assignment (wrong order):
userProfile = [30, 'Alice'];

// An invalid assignment (wrong number of elements):
userProfile = ['Alice'];*/



// creating and using both enums and tuples


// Enum
// Create a string enum named PaymentStatus. 
// It should have the following members: Pending, Paid, Failed, and Refunded. 
// Make sure to initialize them with appropriate string values (e.g., Pending = 'PENDING').
/*enum PaymentStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Failed = 'FAILED',
  Refunded = 'REFUNDED',
}

 function logPaymentStatus(message: string, PaymentStatusValue: PaymentStatus) {
  console.log(`[${message}] - ${PaymentStatusValue}`);
 }

 logPaymentStatus('The payment status is pending', PaymentStatus.Pending);
logPaymentStatus('The payment was successful', PaymentStatus.Paid);

//Create an `interface` for an `Order`. 
//The order should have an `orderId` (number) and a `status` (of type `PaymentStatus`).*/  

/*enum PaymentStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Failed = 'FAILED',
  Refunded = 'REFUNDED',
}

interface Order {
  orderId: number;
  status: PaymentStatus;
}

//Create a variable of type `Order` 
// and assign it a valid object, 
// setting the status to `PaymentStatus.Paid`.  

const myOrder: Order = {
  orderId: 101,
  status: PaymentStatus.Paid,
};

console.log(myOrder);


//Create a type alias named `RgbColor` for a tuple that represents 
// an RGB colour. 
// It should be a fixed-length array of three numbers.  

type RgbColor = [number, number, number];

const myColor: RgbColor = [255, 128, 0];

console.log(myColor);

const backgroundColor: RgbColor = [255, 0, 128];
console.log(backgroundColor);


function toCssString(color: RgbColor): string {
  return `rgb (${color[0]}, ${color[1]}, ${color[2]})`;
}
console.log(toCssString(myColor));
console.log(toCssString(backgroundColor));*/

//The in Operator Guard



// Exercise: Define three interfaces to represent different kinds of media content:

//Movie: should have a kind property with the literal type "movie", a title (string), and a duration (number).

//TVShow: should have a kind property with the literal type "tvshow", a title (string), a season (number), and an episode (number).

//Audiobook: should have a kind property with the literal type "audiobook", a title (string), and a narrator (string).

/*interface Movie {
  kind: "movie";
  title: string;
  duration: number;
}

interface TvShow {
  kind: "tvshow";
  title: string;
  season: number;
  episode: number;
}

interface Audiobook {
  kind: "audiobook";
  title: string;
  narrator: string;
}

type MediaContent = Movie | TvShow | Audiobook;

function displayContentDetails(content: MediaContent) {
  switch (content.kind) {
    case "movie":
      console.log(`Movie: "${content.title}" (${content.duration} mins)`);
      break;
    case "tvshow":
      console.log(`TV Show: "${content.title}", Season ${content.season}, Episode ${content.episode}`);
      break;
    case "audiobook":
      console.log(`Audiobook: "${content.title}", Narrated by ${content.narrator}`);
      break;
  }
}

const movie: Movie = {
  kind: "movie",
  title: "Inception",
  duration: 148,
};

const tvShow: TvShow ={
  kind: "tvshow",
  title: "Breaking Bad",
  season: 2,
  episode: 3,
};

const audiobook: Audiobook = {
  kind: "audiobook",
  title: "Dune",
  narrator: "Scott Brick",
};

console.log("Display details for a movie");
displayContentDetails(movie);

console.log("Display details for a TV Show");
displayContentDetails(tvShow);

console.log("Display details for a audiobook");
displayContentDetails(audiobook);*/




//Practical Utility Types
// Partial, Required, Pick, and Omit

//Exercise

/*interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  publishedAt?: Date;
}

type BlogPostPreview = Pick<BlogPost, 'id' | 'title' | 'author'>;

type NewPostData = Omit<BlogPost, 'id' | 'createdAt'>;

type PublishedPost = Required<BlogPost>;

type PostUpdatePayload = Partial<BlogPost>;


const postPreview: BlogPostPreview = {
  id: 123,
  title: 'TypeScript',
  author: 'Anne',
};
console.log('---BlogPostPreview---');
console.log(postPreview);

const newPost: NewPostData = {
  title: 'The power of Utility Types',
  content: 'Content types like Pick and Omit',
  author: 'Jodi',
};
console.log('\n---NewPostData---');
console.log(newPost);

const publishedPost: PublishedPost = {
  id: 456,
  title: 'Utility Types',
  content: 'Guide to types like Pick and Omit',
  author: 'Jodi B',
  createdAt: new Date('2025-09-2'),
  publishedAt: new Date('2025-09-02'),
};
console.log('\n---PublishedPost---');
console.log(publishedPost);

const updatePayload: PostUpdatePayload = {
  publishedAt: new Date(),
};
console.log('\n---PostUpdatePayload---');
console.log(updatePayload);*/



//Advanced Object Destructuring
//destructuring statement that uses nesting, renaming, and default values to create specific variables

const movie = {
  id: 'm-001',
  details: {
    title: 'Inception',
    director: {
      name: 'Chris Nolan'
    },
  },
  meta: {
    rating: '8,8',
    genres: ['Sci-Fi', 'Action', 'Thriller'],
  },
}

const { details: {title: movieTitle} } = movie;
console.log(`Nested and Renamed Destructuring: The movie title is "${movieTitle}"`);

const {
  details: {
    director: { name: directorName },
  },
} = movie;

console.log(directorName);

const {
  meta: {
    genres: [primaryGenre]
  }
} = movie;

console.log(`Nested Array Destructuring: The primary genre is "${primaryGenre}."`);


const { releaseYear = 2010 } = movie;
console.log(`Default Value: The movie's release year is ${releaseYear}`);


// Skipping Elements

/*const newNumbers = [10, 20, 30, 40, 50];

// We want to get the first, third, and fifth elements.
// We skip the second and fourth elements.
const [first, , third, , fifth] = newNumbers;

console.log(first); // 10
console.log(third); // 30
console.log(fifth); // 50

//The Rest Operator in Array Destructuring

const scores = [98, 85, 76, 65, 54];

// Get the top score, and put the rest into a separate array.
const [topScore, ...otherScores] = scores;

console.log(topScore); // 98
console.log(otherScores); // [85, 76, 65, 54]



//Nested Array Destructuring

const nestedData = [1, 2, [30, 40]];

// Destructure the nested array.
const [first, second, [third, fourth]] = nestedData;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 30
console.log(fourth); // 40*/


// Exercise: destructure array

//const cart = ['Promo FREE_SHIPPING', 'Laptop', 'Mouse', 'Keyboard'];

//const [PromotionalItem, mainProduct, ...accessories] = cart;
//console.log(accessories);//array of mouse and keyboard

//const [ , second] = cart;
//console.log(second);

//const [ , , third, fourth] = cart;
//console.log([third, fourth]);

//const [, , , , discountCode = 'NO_DISCOUNT'] = cart;
//console.log(discountCode);



// The Rest Operator

/*function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(8, 9));*/

function logEntries(level, ...messages) {
  const timestamp = new Date().toISOString();
  for (const message of messages) {
    console.log(`[${level.toLocaleUpperCase()}] ${timestamp}: ${message}`);
  }
}

logEntries('info', 'User logged in.');


//Exercise: rest in function parameters

const mergeObjects = (...objs) => {
  return Object.assign({}, ...objs);
};

const userProfile = {
  id: 1,
  username: "Zoe",
  email: "zoe@example.com"
};

const userSettings = {
  theme: "dark",
  notifications: true,
  email: "new.email@example.com" 
}

const userStatus = {
  online: true,
  lastLogin: new Date().toISOString(),
  username: "ZoeFavDog" // This will overwrite the username from userProfile
};

const mergedResult = mergeObjects(userProfile, userSettings, userStatus);


console.log("Original Objects:");
console.log("  userProfile:", userProfile);
console.log("  userSettings:", userSettings);
console.log("  userStatus:", userStatus);
console.log("\nMerged Object:");
console.log(mergedResult);


//Exercise: Part 2 (Rest in Object Destructuring)

const product = {
  id: 'prod-001',
  name: 'Super Headphones',
  price: 99.99,
  _internalId: 'uuid-a1b2-c3d4',
  _lastUpdated: '2023-10-27',
};

const {_internalId, _lastUpdated, ...publicProduct } = product;

console.log("\nFiltered Product Object:");
console.log(publicProduct);


//Spread in Function Calls

const newNumbers = [5, 10, 2, 8];
const maxNumber = Math.max(...newNumbers);
console.log(maxNumber);

//Spread in Array Literals

const fruits = ['apple', 'blueberry'];
const vegetables = ['carrot', 'potato'];
const food = [...fruits, ...vegetables];

console.log(food);

//Exercise: part 1 spreading arrays

const listA = [1, 2, 3];

const listB = [7, 8, 9];

const combinedList = [...listA, 4, 5, 6, ...listB];

console.log(combinedList);


//Exercise: part 2 Spreading Objects

const baseConfig = {
  apiVersion: 'v1',
  environment: 'development',
};

const userConfig = {
  environment: 'production',
  featureFlags: {
    newDashboard: true,
  },
 };

//const finalConfig = {...baseConfig, ...userConfig};

//console.log(finalConfig);


//Exercise: part 3 Shallow Copy Demonstration

const finalConfig = {...baseConfig, ...userConfig};

const configCopy = { ...finalConfig };

configCopy.featureFlags.newDashboard = false;

configCopy.apiVersion = 'v2';

console.log(configCopy);
console.log(finalConfig);

//update a nested object and an array within it using immutable patterns

const blogPost = {
  id: 'post-1',
  author: 'Author One',
  content: 'This is a great post',
  comments: [
    { id: 'comment-1', text: 'I agree!' },
    { id: 'comment-2', text: 'Thanks for sharing.'},
  ],
};

const newBlogPost = {...blogPost, 
  content: 'This is an amazing post.', 
  comments: [...blogPost.comments, { id: 'comment-3', text: 'Excellent point.'}],
};

console.log("Original Blog Post (should be unchanged):");
console.log(blogPost);
console.log("\nNew Blog Post (with updates):");
console.log(newBlogPost);

/*newBlogPost.content = 'This is an amazing post.';
console.log(newBlogPost);
console.log(blogPost);

newBlogPost.comments = [{ id: 'comment-3', text: 'Excellent point.' }];

const nestedBlogPost = {...blogPost, ...newBlogPost};

console.log(nestedBlogPost);*/


// reduce()
// reduce() callback function
//accumulator acc, currentValue curr,

/*const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value; $${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log('Final Sum:', sum);


const cart = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 100 },
  { id: 3, name: 'Keyboard', price: 200 },
];

const totalCost = cart.reduce((total, item) => total + item.price, 0);
console.log(totalCost);*/


//Exercise:  reduce()

const transactions = [
  { type: 'income', amount: 1200 },
  { type: 'expense', amount: 50 },
  { type: 'expense', amount: 120 },
  { type: 'income', amount: 300 },
  { type: 'expense', amount: 80 },
];

const calculatedBalance = transactions.reduce((balance, transaction) => {
  //check the type of the transaction
  if (transaction.type === 'income') {
    // If it's an income, add the amount to the balance
    return balance + transaction.amount;
  } else {
    // If it's an expense, subtract the amount from the balance
    return balance - transaction.amount;
  }
}, 0); // The '0' here is the initial value for the balance.

console.log("Transactions:", transactions);
console.log("\nFinal Balance:", calculatedBalance); // Expected output: 1250

const transactionSummary = transactions.reduce((summary, transaction) => {
  if (transaction.type === 'income') {
    summary.totalIncome += transaction.amount;
  } else if (transaction.type === 'expense') {
    summary.totalExpense += transaction.amount;
  }
  return summary;
}, { totalIncome: 0, totalExpense: 0});

console.log('Transactions:', transactions);
console.log('\nTransaction Summary:', transactionSummary);



//Method chaining: array methods (`map`, `filter`, `slice`, etc.) 

/*const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((n) => n % 2 === 0).map((n) => n * n);

console.log(result);

//Exercise: chaining 

const books = [
  { title: 'The Hobbit', genre: 'Fantasy', pages: 310, rating: 4.8 },
  { title: 'A Game of Thrones', genre: 'Fantasy', pages: 694, rating: 4.4 },
  { title: 'Dune', genre: 'Sci-Fi', pages: 412, rating: 4.9 },
  { title: 'The Way of Kings', genre: 'Fantasy', pages: 1007, rating: 4.9 },
  { title: '1984', genre: 'Dystopian', pages: 328, rating: 4.7 },
];


const totalPagesOfTopFantasyBooks = books
  // Step 1: Filter the array to get only the fantasy books with a rating of 4.5 or greater.
  .filter(book => book.genre === 'Fantasy' && book.rating >= 4.5)
  // Step 2: Map the filtered books to an array containing only their page counts.
  .map(book => book.pages)
  // Step 3: Reduce the array of page counts to a single sum.
  .reduce((total, pages) => total + pages, 0);

  console.log("Books Data:", books);
  console.log(totalPagesOfTopFantasyBooks);*/



  //Conditional Checks with some(), every(), and includes()

  //Exercise: some(), every(), and includes()

  const students = [
  { name: 'Alice', grade: 90, hasSubmitted: true },
  { name: 'Bob', grade: 48, hasSubmitted: true },
  { name: 'Charlie', grade: 75, hasSubmitted: false },
  { name: 'David', grade: 82, hasSubmitted: true },
];
console.log(students);

const hasFailedGrade = students.some((student) => student.grade < 50);

if (hasFailedGrade) {
  console.log('There is at least one student with a failing grade.');
}

const allSubmitted = students.every((student) => student.hasSubmitted === true);

if (allSubmitted) {
  console.log('All students has submitted their assignment.');
} else {
  console.log('At least one student failed submitting the assignment.')
}

const approvedUsernames = ['user123', 'admin_jane', 'dev_alex'];

const isApproved = approvedUsernames.includes('dev_alex');
console.log(isApproved);