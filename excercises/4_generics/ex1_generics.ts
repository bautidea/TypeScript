// Convert the function below to a generic function:
//* function echo(arg) { returnarg; }

function echo<T>(arg: T) {
  return arg;
}

let echo1 = echo(1);
let echo2 = echo('a');

// When compiling the following piece of code, we get an
// error saying ‘Property name does not exist on type T’. How can we solve this problem?
//* function printName<T>(obj:T) {
//* console.log(obj.name);
//* }
// We get this error because the generic type doesnt know about the shape of the passed object.
// So we need to apply a constrain on the generic type parameter so the TS compiler knows that the passed
// object has a property named 'name'.
function printName<T extends { name: String }>(obj: T): void {
  console.log(obj.name);
}

// An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case.
// In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc.
// Represent the entity using a generic class.

class Entity<T> {
  constructor(public id: T) {}
}

// Given the following interface, what does keyof User return?
interface User {
  userId: number;
  userName: string;
}
// It will return the union of 'userId' | 'userName'.
