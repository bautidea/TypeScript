// Somtimes we need to pass arguments to our decorators, lets see how we can create parameterised decorators.
type ComponentOptions = {
  selector: string;
};
function Component(options: ComponentOptions) {
  // In this function we are going to return a decorator function, using an arrow function syntax.
  // This is called a Decorator Factory.
  return (constructor: Function) => {
    console.log('Component decorator called');

    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertinDOM = () => {
      console.log('Inserting the component in the DOM');
    };

    // Using the parameter of the function
    constructor.prototype.options = options;
  };
}

// Passing an object as an argument of the decorator
@Component({ selector: '#my-profile' })
class ProfileComponent3 {}