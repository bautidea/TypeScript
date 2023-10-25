// We can also apply multiple decorators to a class or its members.
type ComponentOptions4 = {
  selector: string;
};
function Component(options: ComponentOptions4) {
  return (constructor: Function) => {
    console.log('Component decorator called');

    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertinDOM = () => {
      console.log('Inserting the component in the DOM');
    };

    constructor.prototype.options = options;
  };
}

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}
// Passing an object as an argument of the decorator
@Component({ selector: '#my-profile' })
// Applying a 2nd decorator
@Pipe
class ProfileComponent4 {}

// --> Pipe decorator called
// --> Component decorator called
//* Decorators are applied in the reverse order.
