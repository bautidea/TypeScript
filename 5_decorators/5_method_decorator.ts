// Lets see how we can enhance our methods using decorators.
// To apply a decorator on a method we need three parameters instead of the constructor function.
// The firs parameter is the object that owns the targeted method. The type of this parameter is 'any' because the
// compiler is expecting that type.
// The second is the name of the targeted method.
// The third parameter is the descriptor object or the target method. Every property in an object has a descriptor object
// that describes that property (Section 1 - Prototypes lesson 1 of JS advance course).
// The name of these properties doesn't matter, what matters is its number and types.
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
function Replace(target: any, method: string, descriptor: PropertyDescriptor) {
  // We can replace the 'say' method with an entirely new method.
  // The descriptor object has a property called vlaue that references the target method.
  descriptor.value = function () {
    console.log('New implementation from decorator');
  };
}

function LogReplaceParameter(
  target: any,
  method: string,
  descriptor: PropertyDescriptor
) {
  // To do something before, after or in the middle of method execution, we need to get a reference to the original method.
  // We want to define it using const because we dont want to accidentally reset the variable to something else.
  const original = descriptor.value as Function; // We need to use Type assertion because the compiler doesn't know this is a Function.

  // To call the original function we use the '.call' method. We need to pass two arguments
  // The first one is the 'this' keyword.
  // The second one is the argument/s we want to pass to the called function.
  //* When we call and pass a value to this function with the Person object, this implementation will overwrite by the hard coded value
  //* from decorator.
  descriptor.value = function () {
    console.log('Before');
    original.call(this, 'Blue Sky');
    console.log('After');
  };
}

function LogUseParameter(
  target: any,
  method: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value as Function;

  //* To use the same parameter that we pass to the method we add the parameter used by the method, 'message' in this case.
  //* and we pass it to the 'call' method.
  descriptor.value = function (message: string) {
    original.call(this, message);
  };

  //! With this implementation we can only apply this decorator on functions or methods that have one parameter of type string
  // not very flexible.
  // To make this more flexible, so we can apply this decorator on any type of method, we need to replace the type of the parameter
  // passed to the method with 'any' and then we want to use the rest operator '...'  to allow this function to take a varying
  // number of parameters. We can apply this method with 0 or more parameters.
  // And when calling the original function we are going to use the spread operator '...' so we spread all the arguments one by one
  // to the original function.
  descriptor.value = function (...args: any) {
    original.call(this, ...args);
  };

  //! Another important this here is that when we are modifying the function logic (line 59) we are NOt using an arrow function
  //! because arrow functions dont define their own 'this' keyword. We cannot use them as method in the class.
  // When redefining methods we always have to use function expressions.
}

// Lets define a class with a method that takes an argument and implement a decorator in that method.
class Person {
  // Replacing this method from decorator, most of the times we dont want to do this, you want to enhance an existing method.
  @Replace
  replace() {
    console.log('This method will be replaces');
  }

  // We can do something before, after or in the middle of method execution.
  // In the LogReplaceParameter im replacing the parameter that is passed to this method.
  // In the LogUseParameter im using the passed value from the method
  @LogReplaceParameter
  say(message: string) {
    console.log(`Person says ${message}`);
  }

  @LogUseParameter
  sayOtherThing(message: string) {
    console.log(`Person says ${message}`);
  }
}

let person = new Person();
person.replace(); // --> New implementation from decorator.

// If i pass a value here it will be overwritten by the decorator.
person.say('Hello'); // --> Before --> Person says Blue Sky --> After
person.sayOtherThing('Greetings'); // --> Person says Greetings
