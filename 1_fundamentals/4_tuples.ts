// TS has a new type called tuple, which is fixed lenght array where each element has a particular type
// we offten use them when working with a pair of values.

// For example lets say for a given user we want to represent two values, and ID and a Name
// 1, 'Bauti'
let user: [number, string] = [1, 'Bauti'];
// If we add a third element, we get a compilation error.
user = [2, 'Mosh', 3];

// Here we also get code completion.
// If we acces the first element, we see all methods for number type
// * 'user[0].' --> user[0].toExponential();
// And if we acces the second element, we see all properties and methods of string
// * 'user[1].' --> user[1].split();

// * Tuples internally are represented using plain JS arrays.
// If we complie our code we will see a regular JS array
// When compiling we are going to see in line 6 --> let user = [1, 'Bauti']

// So using dot notation in an array we are going to see all the methods of Array objects
// 'user.'
// The push method is a little troublesome, because we can store a new value in the array,
// the value could be of any type, and the compiler is not going to complain about it.
user.push(1);

// As a best practice we should restrict our tuples to only two value, because anything more than that
// is probably going to make our code a bit hard to understand.
