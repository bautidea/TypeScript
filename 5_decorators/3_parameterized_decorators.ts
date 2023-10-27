// Somtimes we need to pass arguments to our decorators, lets see how we can create parameterized decorators.
type ComponentOptions3 = {
  selector: string;
};
function Component3(options: ComponentOptions3) {
  // In this function we are going to return a decorator function, using an arrow function syntax.
  // This is called a Decorator Factory.
  return (constructor: Function) => {
    console.log('Component decorator called');

    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM');
    };

    // Using the parameter of the function
    constructor.prototype.options = options;
  };
}

// Passing an object as an argument of the decorator
@Component3({ selector: '#my-profile' })
class ProfileComponent3 {}
