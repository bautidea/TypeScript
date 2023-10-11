//* Literal --> When we want to limit the values we can assign to variables.
// They dont have to be numbers, they can also be strings.
// Lets assume that the next variable can be either 50 or 100 but nothing else.

// if we annotate it with number 'quantity:number' this can take any number.
// Instead of anotating this with number type, we will anotate it with a
// Literal (or exact, especific) value
let quantity: 50 = 50; // it an only be seted to 50 if seted as a different value we'll get a compilation error
let quantity2: 50 = 52;

// We can apply the union operator here
let quantity3: 50 | 100 = 100;

// We can create a custom type using a type alias.
type Quantity = 50 | 100;
let quantity4: Quantity = 100;
