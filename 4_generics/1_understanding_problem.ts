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
