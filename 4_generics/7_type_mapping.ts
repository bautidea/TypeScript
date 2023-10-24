// Sometimes we need to base a type on another type, this is called 'type mapping'
interface Product {
  name: string;
  price: number;
}

// What if somewhere else in our application, we need a product with read only properties?
// one option is to duplicate the above interface, and make each property readonly
//* interface ReadOnlyProduct {
//*   readonly name: string;
//*   readonly price: number;
//* }
// This can be very repetitive, and every time we add a new property in Product we have to remember to add
// it in this second interface as well.

// A better solution is to use type mapping.
// We are going to create a new type based on an existing one, but we want to add all these properties dynamically
// and make them read only.
// We cannot use interfaces, we need to use type aliases.
type ReadOnlyProduct = {
  // We are going to us 'Index Signature' and the 'keyof' operator.
  // Instead of hardcoding the properties we are going to use index signature syntax to dynamically add properties.
};
