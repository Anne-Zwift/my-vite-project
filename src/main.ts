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

const user = {age: 25, hasSubscribed: true };
const eligible = isEligibleForPromo(user);

console.log(isEligibleForPromo);
console.log(user);

function displayError(message: string): void {
  const errorElement = document.getElementById('error-container');
    if(errorElement){
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  
}

displayError('Invalid username or password');