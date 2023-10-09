// In JS we declare an array like this.
// * let number = [1, 2, '3', 'a'];
// JS is dynamic so each element can be of different type.

// In TS we can explicitly apply a type annotation
let numbers: number[] = [1, 2, '3']; // Throws an error, because a element is a string
// If all elements were numbers theres no need in indicating a type annotation.

// But if we had an empty array, we have to avoid 'any arrays', this is when we declare an empty array and dont
// apply a type annotation --> let numbers = []
let numArray: number[] = [];

// A benefit of using TypeScript is code completion. Because TS knows the type of elements in the given array we are going
// to see all methods related to the type of element.
// using dot notation we can scroll trough all methods.
// * numArray.forEach(n => n.)
