// Lets talk about ther problem generic classes try to solve.
// Lets say we want to represent a key value pair
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

let pair = new KeyValuePair(1, 'Apple');
// What if someone wanted to usea a string value for the key, with the current implementation thats not possible
// we are goin to get a compilation error.

// Here we have two solutions the first is to use 'any' type for the key.
//* (public key: any, public value: string)
// But we should avoid using any as much as possible, because with 'any' we loose type safety.
// Another valid implementation is to create a class tht takes the key as a string
class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}

// And we can use it here
let strPair = new StringKeyValuePair('2', 'orange');
// The problem with this implementation is that it's redundant, if somewhere else in the app,
// if we want to use an object as 'value' instead of a string, then again we will have to create yet again another kind
// of 'keyValuePair' class. We wold have to constantly create new classes.
// So we need a generic or a common and reusable solution.

// Lets see how we can use a generic class to solve this problem, right after the class name we type angle brackets, and inside them
// we type one or more generic parameters.
// We use the letter T as short for 'Templates'
class GenericKeyValuePair<Tkey, Tvalue> {
  constructor(public key: Tkey, public value: Tvalue) {}
}
// When we create a KeyValuePair object, we type angle brackets once again, here we pass the type of value we are going to pass
// to the function.
let genericPair = new GenericKeyValuePair<number, string>(10, 'Potatoe');
// Now if we use dot notation we will be able to see all the methods for the secified type.
genericPair.key.toExponential();
genericPair.value.toLowerCase();

//* If we dont specify the type generic type argument, the compiler can infere the type of the key and the value.
//! Most of the time we dont have to expicitly supply generic type arguments.
let genericPair2 = new GenericKeyValuePair(10, 'Potatoe');

genericPair2.key.toExponential();
genericPair2.value.toLowerCase();
