// We have another way for providing type information, and that is using a
// 'declaration' or a 'type definition file'.
// This is useful if you dont want to modify your JS code.
// In the folder that the JS file is located we create a new file called '-name-.d.ts',
// The name of the file should be the same as the corresponding file, but extension must be
// '.d.ts' - d is short for 'declaration'.

//* When using this approach you should describe all the features in the target module, everything
//* that is not described will be invisible to the compiler.
// Here we cannot import the sayHello function.
import { calculateTax4, sayHello } from './src/4_tax';

let tax4 = calculateTax4(10000);
console.log(tax4); // --> 3000

// Again if we pass nothing or a sting we will get a compilation error.
let tax4b = calculateTax4();
let tax4c = calculateTax4('a');
