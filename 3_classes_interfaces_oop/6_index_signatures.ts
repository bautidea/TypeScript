// In JS we can create an empty object and add properties to it dynamically.
//* let person = {};
//* person.name = a;
// But this is not possible in Ts because its very strict about the sahpe of object.
// There might be situations in witch we need to add properties dynamically, this is were we use
//* Index Signatures.
// Suppose we are building an app for ticketing concert, we want to know who is sitting where..
class SeatAssignment {
  // Seat like -- A1, A2, ...
  // Who is sitting where -- 'Bauti - A1', 'Jhon - A2', ...
  // If the properties are going to vary its name and value  (eg seat names/number going to be different)

  //* This were were we use Index Signatures Property to create properties dinamically.
  // Instead of typing the name of the property we add square brackets, give it a property name, and the type
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
// We can assign properties dynamically like this, using dot notation.
seats.A1 = 'Bauti';
seats.A2 = 'John';

// In JS and TS we have another way of accessing a property, we can use the square bracket notation
seats['A1'] = 'Bauti';

// We allso get type checking.
seats['A3'] = 100; // --> number type cannt be assigned to 'string' type.
