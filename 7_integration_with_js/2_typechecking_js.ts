// By using Js code by default we dont get Type checking.
// That means we can call the function without supplying an argument and we wont know
// about this issue until runtime.
import { calculateTax } from './src/2_tax';

let tax2 = calculateTax();
console.log(tax2);
// So we have to compile and run our program to see an error.
// To solve this error we go to config file and in the 'JavaScript Support' section
// we have a compiler option called 'checkJs', if we turn it on we get some basic Type
// checking.

// If we run our code we will get an error stating
//! 'Parameter 'income' implicitly has an 'any' type'.
// We are seeing this because theres is a compiler option enabled by default for catching
// this kind of errors, so we shouldnt use the 'any' type unless we explicitly type it out.

// So we have two options:

//* 1- Describe type information to the TS compiler:
// its next lesson topic.

// 2- Temporarily tell the compiler to stay silent.
// for that we go to the JS file we are importing and add a special comment
// '@ts-nocheck' we add this once on the top of a file that we dont want the TS
// compile to check.
//  if we run the program just as it is, we wont get any compilation error now, but we are
// going to get 'NaN' as result.
