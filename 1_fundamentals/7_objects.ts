// In Js objects are dynamic, their shape can change throughout the lifetime of our project,
// we can give them new properties.
// But in TS this is not valid
let employee: { id: number } = { id: 1 };
// We get a compiler error saying "Property 'name' does not exist on type"
employee.name = 'Bauti';
// Just as variables, TS inferred the shape of the object, we have to explicitly annotate properties
// in order to change them.

// We can see that the error on the line of declaring a property is gone, but we have a new error,
// the compiler is complaining because while initializing this object, we havent supplied the
// name property.
let employee2: { id: number; name: string } = { id: 2 };
employee2.name = 'Bauti';

// We have two options for solving this
// One option is to set the name as an empty string.
let employee3: { id: number; name: string } = { id: 2, name: '' };
employee3.name = 'Bauti';
// Or we can make the 'name' property optional, while TS allow us to do this, we shouldnt do it, because conceptually
// it doesnt make sense to have an employee without a name. It would have sense to make a faxphone for example, as optional,
// because not all employees have a fax machine.
// * Always make sure that the code you write conceptually make sense.
let employee4: { id: number; name?: string } = { id: 2 };
employee4.name = 'Bauti';

// Sometime we want to make some properties 'READ ONLY', so we dont accidentally change them later on. To do this
// we apply the 'readonly' modifier before the name of the property.
let employee5: { readonly id: number; name: string } = { id: 3, name: 'Bauti' };

// To define a method, we need to define the signature of the method in out type annotation, we need to specify how
// many parameters is going to have, and what is the type of the return value.
// Type of return value is 'void' because we are not going to return any value.
let employee6: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 3,
  name: 'Bauti',
  retire: (date: Date) => {
    console.log(date);
  },
};
