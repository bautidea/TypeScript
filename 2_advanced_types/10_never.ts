// Never type represents values that never ocurr. Its not a type used that often.

// As an example we want this function to run continuosly and process a bunch of
// events.
function processEvents() {
  while (true) {
    // Read a messager from a queue
  }
}

// If we call this function, and then right after we do something else, we know that the next
// line after calling the function will never get executed becuase the function wont return anything,
// we have an infinite loop.
processEvents();
console.log('Hello World');

// Thats when we anotate the type of the function as 'never' to tell the compiler that this function
// never returns.
function processEvents2(): never {
  while (true) {
    // Read a messager from a queue
  }
}
processEvents2();
// The last line gets grayed out, this means that its not going to get executed.
console.log('Hello World');

// We can go to the 'tsconfig.json' file and in the 'Type Checking' section we have a compiler option called
// 'allowUnreachableCode', if we set it to 'false' it will be marked as an error.

// This is the benefit of useing the never type, both developers and the compiler can reason about sections of the code
// that are unreachable.

// Same with this function
function reject(message: string): never {
  // it throws an error but it doesnt return anything
  throw new Error(message);
}
