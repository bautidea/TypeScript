// Lets define a decorator for enhancing a property.
// Property decorators are very similar to method decorators, but the difference is that
// they dont have a propertyDescriptor, instead we define a propertyDescriptor for the targeted
// property.
function minLength(length: number) {
  // Here we are going to return the actual decorator function.
  return (target: any, propertyName: string) => {
    //  Creating variable to store the new value of the property.
    let value: string;

    const descriptor: PropertyDescriptor = {
      // if we press ctrl+space we can see all properties and methods of descriptor objects
      // Here we are going to use a setter to perform data validation.
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} character long.`
          );
        }
        // If the data is valid then we are going to store it in the variable created above.
        value = newValue;
      },

      // We also need a getter for returning the value of the 'value' variable.
      get() {
        return value;
      },
    };

    // Now that we have a descriptor property we have to assign it to the target property.
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User7 {
  // With this decorator we are going to ensure that the password is 'X' characters long.
  @minLength(4)
  password: string;

  // Here we cannot use the public modifier here, because we're going to apply a decorator on that
  // property.
  constructor(password: string) {
    this.password = password;
  }
}

let user7 = new User7('1234');
console.log(user7.password); // --> 1234

let user7b = new User7('123');
console.log(user7b.password); // --> password should be at least 4 character long.
