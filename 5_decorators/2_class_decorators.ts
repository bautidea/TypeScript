// Depending on where we are going to apply this decorator, the number and type of
// parameters varies. If we are going to apply this on a class, we should have a single
// parameter that represents the constructor (it can have any name).
// What matters in this argument is the type (Function). As indicating the type as 'Function'
// the compiler assumes that we are going to apply this on a class.
function Component(constructor: Function) {
  // Here we have the chance to enhance or modify our class.
  // We can add, modify and even delete properties and methods.
  console.log('Component decorator called');

  // We can go to the constructor prototype and add new properties and methods, then or any class that
  // has the '@Component' decorator or any instance of a class with that decorator, will inherit those
  // new properties and methods.
  constructor.prototype.uniqueId = Date.now(); // Adding a property
  // Adding a method.
  constructor.prototype.insertinDOM = () => {
    console.log('Inserting the component in the DOM');
  };
}

@Component
class ProfileComponent {}

// We could also solve this problem using inheritance
class InheritanceComponent {
  insertInDOM() {
    console.log('Inserting the component in the DOM using inheritance');
  }
}

class ProfileComponent2 extends InheritanceComponent {}
