// Create a decorator for adding a sauce to Pizza instances:
//* @Sauce('pesto')
//* class Pizza {}

function Sauce(addSauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = addSauce;
  };
}

@Sauce('pesto')
class Pizza {}

let pizza = new Pizza();
// Since i defined this property on the prototype i have to access it from there
console.log(Object.getPrototypeOf(pizza)); // --> Pizza { sauce: 'pesto' }

console.log(Object.getPrototypeOf(pizza).sauce); // --> pesto
