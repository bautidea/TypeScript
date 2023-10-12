// im going to define a type alias for representing users.
type User = {
  name: string;
  age: number;
  occupation?: string;
};

let users: User[] = [
  { name: 'Jhon Smith', age: 30, occupation: 'Software engineer' },
  { name: 'Kate Muller', age: 28 },
];

// Use type aliases to represent
// - Birds fly.
// - Fish swim.
// - Pet can be a Bird or Fish.

type Bird = {
  fly: () => void;
};

let bird: Bird = {
  fly: () => console.log('Fly'),
};

bird.fly(); // --> Fly

type Fish = {
  swim: () => void;
};

let fish: Fish = {
  swim: () => console.log('Swim'),
};

type Pet = Bird | Fish;

// Define a type for representing days of the week.
type Weekday = {
  day: string;
};

type Monday = Weekday;
type Tuesday = Weekday;
type Wednesday = Weekday;
type Thursday = Weekday;
type Friday = Weekday;
type Saturday = Weekday;
type Sunday = Weekday;

type DaysOfWeek =
  | Monday
  | Tuesday
  | Wednesday
  | Thursday
  | Friday
  | Saturday
  | Sunday;

// Simplify the following code snippets

//* let user = getUser()
//* console.log(user && user.address ? user.address.street : undefined)
//! console.log(user?.address?.street)

//* let x = foo !== null && foo!== undefined ? foo : bar();
//! let x = foo ?? bar();

// What is the problem in this piece of code

let value: unknown = 'a';
//* console.log(value.toUpperCase());
// The problem here is since we have an unknown type, Ts compiler is telling us that we dont
// know the type of the variable and it probably couldnt have the '.toUpperCase()' method.
// This needs a type guard.
if (typeof value === 'string') console.log(value.toUpperCase());
