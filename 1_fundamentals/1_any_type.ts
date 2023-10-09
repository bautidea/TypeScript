// JS has built in types as: number, string, boolean, null, undefeined, object
// TS extends this list and introduces new types like:
// - any
// - unknown
// - never
// - enum
// - tuple
// We will learn about all of them, but first, lets see how we can play with primitive
// types in TS.

// In TS if we have a large number we can sparate it by using a '_', it makes the code more readable.
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// * In TS we dont have to always anotate our variables, because TS compiler can infere or detect the type
// * of our variables based on the value that was assigned to them.
let sales2 = 123_456_789; // if we hover the mouse over the variable name, we will see 'sales2: number'
let course2 = 'TypeScript';
let is_published2 = true;

// Now if we declare a variable but we dont initialize it, this variable is of type 'any'
let level; // level: any
// This is a new kind of type wich can represent any kind of values.
// We can set it to a number
level = 1;
// And later on we an set it to a string
level = 'a';
// But this is against the whole idea of using TS because we use TS to get Type checking.
// * So if we use the any type we loose that feature and the benefit of using TS.
// As a best practice we should //! avoid using the 'any' type as much as possible.

// Lets say we have the next function
function render(document, document2: any) {
  // In the 'document' parameter we have a compilation error, saying that the compiling is inferring or guessing
  // the type of this parameter.
  // We have two ways of solving this.
  //  We can explicitly anotate this parameter as 'any' type.
  //  But if we have tons of this kind of errors we dont want to go to every function and explicitly anotate various
  //  parameters with any.
  console.log(document);
  console.log(document2);
}

// To solve the previous warning we go to the 'tsconfig.json' file, and in the 'Type Checking' section we look for
// 'noImplicitAny', if the feature is turned on, the compiler will complain about 'implicit any tags'.
// So if we set it to 'false' we should no longer see the error.
