// When working with nullable object we offten have to do null checks.
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }; // Returning an object if not null;
}

let customer = getCustomer(0);

// If we want to get the customer birthday, we will get a compilation error, because customer
// might possible be null.
console.log(customer.birthday);

// One way to solve this problem is to check if customer its null
if (customer != null && customer != undefined) console.log(customer.birthday);

// There is a simpler way to write this code in TS, we can use
// * Optional Property access operator ('?.' question mark followed by the chaining operator '.')
// With this, the line of code gets executed only if you have a customer that is not null or undefined.
console.log(customer?.birthday);

// We can also make the birthday property optional.
type Customer2 = {
  birthday?: Date;
};
function getCustomer2(id: number): Customer2 | null | undefined {
  return id === 0 ? null : { birthday: new Date() }; // Returning an object if not null;
}

let customer2 = getCustomer2(0);

// If we want to print the full year of the birth date, we have the same compilation error because, the birthday
// property might possibly be undefined.
console.log(customer2?.birthday?.getFullYear());

// * Optional element access operator, its useful when working with arrays.
// We might have an array of customers, and we want to print the first customer, if this array is going to be null
// or undefined we will need to have it in consideration.
// ! customers?.[0]

// * Optional call operator, which has the exact same syntax.
// Imagine we have a null function
let log: any = null;

log('a'); // If we run this program it will crash because 'log' is null.
// This is were we use the optional call operator
log?.('a'); // This code will be executed only if 'log' is referencing an actual function otherwise we get undefined.
