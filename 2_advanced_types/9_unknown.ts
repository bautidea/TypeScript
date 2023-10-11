//* Using unknown type is prefferred than using the any type, because the compiler forces
//* us to do some type checking to make sure the methods we're calling exist on the target object.

function render(document: any) {
  // With 'any', we can call any method we want and theres no going to be type checking
  document.doAFlip(); // no compilation error.
  // So if the document object doesnt have that method the program is going to crash
}

// If we use unknown
function render2(document: unknown) {
  // We get a compilation error.
  document.doAFlip();
  // The compiler doesnt know about the type of the object.
  // Here we use Type Narrowing to get more specific.
  if (typeof document === 'string') {
    // Here we have access to all string methods
    document.toUpperCase();
  }
  // * 'typeof' operator only works for primitive types (string, boolean, number)
  // If we have custom objects created with classes we have to use another operator
  if (document instanceof MyCustomType) {
    // ...
  }
}
