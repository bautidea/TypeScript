// Lets import the function declared the src folder
import { calculateTax } from './src/1_tax';

// We got a compilation error because by default JS code is not included
// in the compilation process, so the TS compiler cannot see our code.
// To solve this problem we have to go to the config file, in the section
// JavaScript support, we have to turn on the compiler option called 'allowJS'

// We can call the imported function
let tax1 = calculateTax(1000);

// If we run our program we will get an error stating 'Cannot use import statement outside
// a module', its because the module format might be ES6 and that is used by browsers,
// we can use that in node, but it requires more work.
// To solve this we have to go to our config file and change the module format to 'CommonJS'.
// with that we run 'npx ts-node .\1_including_js.ts' in terminal and it will work.
console.log(tax1); // --> 300
