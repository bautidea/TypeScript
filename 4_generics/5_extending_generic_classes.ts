// Lets talk about generic classes and inheritance.
// We are building an E-comerce application and we can have objects like Products, Categories, Shopping Carts, etc.
// Lets start by defining an interface called
interface Product {
  name: string;
  price: number;
}

// We need a mechanism for storing these objects, we want to store diferent kinds of objects (Products, Orders, Shopping Carts)
// So we need to make this class generic.
class Store<T> {
  // We make this array private so it cannot be modified from outside this class.
  // private _objects: T[] = [];
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

//! When extending a generic class we have three options.
// 1- Pass it on the child class.
// 2- Restrict the generic type parameter.
// 3- Fix the generic type parameter

// 1- We are goin to create a new class, we need to add a generic type parameter to the child class, because whatever we pass for T in the
// child class (Compressiblestore)  is going to be used as argument for the parent generic class.
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
// In this store we have two methods 'add' (Takes a product Object) and 'compress' (We implemented in the child class)
store.add({ name: 'pi', price: 150 });
store.compress();

//! In this scenario we are passing on the Generic Type Parameter.
//* The Generic Type Parameter that we have in the base class is also gonna be used in the child class.

// 2- Lets define another class that also extends from Store.
// Here we apply a constrain to the generic class, because the compiler doesnt know that the type 'T' has a propert named 'name'.
// So by applying this constrain we can use this generic class, for finding any kind of object that has a 'name' propery. It doesnt
// have to be 'Product' it can be anything as long as it has a 'name' property in that object, we can use this class to store that object
// and find it.
class SearchableStore<T extends { name: string }> extends Store<T> {
  // In this class we want to implement a method for finding objects, returns T or undefined in case we cannot find the given object.
  // Here we cannot acces the _objects array in the base class, because its a private property. Private members are not inherited
  // in child classes, so to fix this we need to change this property from private to protected.
  find(name: string): T | undefined {
    // .find() method need an arrow function that takes an object and returns a boolean value.
    // So we compare the .name property of the given object, and it should be equal to the name argument that we receive in the method of
    // the class.
    return this._objects.find((obj) => obj.name === name); // --> If we would have constrained the type of the class we would have a compilation error stating that property 'name' doesnt exits on type 'T'.
  }
}

//! In this second scenario we are Restricting the generic type Parameter.

// 3- Lets say there are certain operations that can obly be performed on products.
// In this scenario we dont have a generic type parameter, because we are dealing with a specific Store,
class ProductStores extends Store<Product> {
  filterByCategory(category: string): Product[] {
    // For simplicity im goin to return an empty array.
    return [];
  }
}

//! In this scenario we are fixing or terminating the generic type Parameter
