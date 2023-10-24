//  Sometimees we need to constrain generic Type arguments. Lets define a simple generic
// function
function echo<T>(value: T): T {
  return value;
}

// Now we can call the function an pass any value that we want.
echo('hi');
echo(2);

// But if we want to constrain or limit the type of objects we can pass here?
// Right after the generic type parameter we use the 'extends' keyword and then we specify the type
// can be assigned to 'T'.
// In this function we can only pass number or string types.
function echo2<T extends number | string>(value: T): T {
  return value;
}

echo2(true); // --> compilation error.

// We can pass the shape of an object.
function echo3<T extends { name: string }>(value: T): T {
  return value;
}

echo3({ name: 'a' });

// We can also constrain by an interface.
interface InterfPerson {
  name: string;
}
function echo4<T extends InterfPerson>(value: T): T {
  return value;
}

// We can constrain by class.
class ClassPerson {
  constructor(public name: string) {}
}
function echo5<T extends ClassPerson>(value: T): T {
  return value;
}
// Now we can pass an instace of that class or any classes that derives from ClassPerson.
class Customer extends ClassPerson {
  // Here im not going to add any extra logic is just to show that when calling echo
  // we can pass this class that directly derives from Person.
}

echo5(new ClassPerson('Bauti'));
echo5(new Customer('Jiu'));
