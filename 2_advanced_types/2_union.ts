//* Union Types --> We can give a variable or a function parameter more than one type.
// Lets assume that the weight parameter can be either a number or a string, using a
// vertical bar ( '|' ) we can create a 'Union Type'
function kgToLbs(weight: number | string): number {
  // Since the parameter has not a defined type, when we use the dot notation on it
  // we are going to see methods that are for strings and numbers.
  // Thats when we use a technique called
  //* Narrowing
  if (typeof weight === 'number') {
    // Here the compiler will know that the parameter is a number, if we use dot notation
    // we are going to see all methods that are available in number objects.
    return weight * 2.2;
  } else {
    // If we are here its because its a string object
    return parseInt(weight) * 2.2;
  }
}

// Now we can call this function in two ways, by giving a number, or a string.
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

// If we compile the code, we are going to see that the union type wont be part of the generated
// JS code, is purely for the compiler to do a type check.
