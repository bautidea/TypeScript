interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // This method will return a instance of 'T' or undefined if theres no object that satifies the .find() criteria.
  // By using the keyword 'keyof' we are telling the compiler that we are working with actual properties of type 'T',
  // so the property we pass here can only be one of the keys or property of type 'T'.
  // If 'T' is product, keyof T => 'name' | 'price'.
  //* 'keyof' operator returns a union of properties of the given type.
  find(propety: keyof T, value: unknown): T | undefined {
    // Because we are using square brackets syntax, the compiler thinks we are using an index signature propery. We use
    // index signature propertues for dinamically adding new properties (class 6 of section 3) to an object.
    // But in this case we are dealing with actual propertues of an object.
    return this._objects.find((obj) => obj[propety] === value);
  }
}

// To use this implemntation
let store = new Store<Product>();
store.add({ name: 'a', price: 1 });
// We can call the find method.
store.find('name', 'a');
store.find('price', 1);

// With this implementation we cannot call the find method and pass a non-existing propery.
// When we run our program it will crash, because there will be no product with the passed name,
// so by using the 'keyof' operator we can catch this issue on compile time.
store.find('nonExistingProp', 5);
