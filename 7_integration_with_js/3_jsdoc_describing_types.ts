// One way to describe type information for JS code is using JS doc,
// which is a special type of comment we can add to our code '/** */'
//* Using JSDoc we can provide type information to the TS compiler, but we can also explain our code.
// and when we hover over the function name we will get a description of the function.
import { calculateTax3 } from './src/3_tax';

// Now we get type checking, if we pass a string or nothing we will get a compilation error.
let tax3 = calculateTax3(10000);
console.log(tax3); // --> 3000

// let tax3b = calculateTax3('a');
// let tax3c = calculateTax3();
