// Lets see how we can apply a decorator to accessors, meaning, getters and setters.
// Accessor decorators are very similar to method decorators, because accessors under the hood are just
// methods
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // In this function just as before we need to get a reference to he original method/getter.
  // Here we cant use 'descriptor.value' because it only works for regular methods.
  // We need to use the '.get' property
  const original = descriptor.get;

  // getters cannot have any parameters so here we wont have '...args'.
  descriptor.get = function () {
    const result = original?.call(this); // Here we have optional chaining because descriptor can return any.
    // if we check 'result' type its any, so we should check if result is a sting
    if (typeof result === 'string') return result.toUpperCase();
    // else
    return result;
  };
}

class Person6 {
  constructor(public firstName: string, public lastName: string) {}

  // We are going to define a decorator to capitalize the full name
  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person6 = new Person6('mosh', 'hamedani');
console.log(person6.fullName); // --> MOSH HAMEDANI
