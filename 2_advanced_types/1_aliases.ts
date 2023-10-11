// There are three problems in current implementation of creatin an object
let testEmployee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Bauti',
  retire: (date: Date) => {
    console.log(date);
  },
};
// The 1st problem if that if we want to create another employee object, we have to repteat the structure
// which will end up duplicating our code, we want always to stick to DRY (Dotn Repeate Yourselves) concept.
// The 2nd problem is that the other employee object might have other properties, so there isnt going to be
// a consistent shape between the two objects. Because we dont have a single place to define the shape of
// an employee object.
// The 3rs problem, this structure is making our code a bit hard to read and understand. This is were we
// use a //* Type Alias.

// * By using a Type Alias, we can define a custom type.
// the name of the Alias is in Pascalcase.
// Inside the braces we define all the properties and methods an employee object should have/
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Bauti',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Now we have a single place where we define the shape of the objects, we can reuse it in multiple places.
