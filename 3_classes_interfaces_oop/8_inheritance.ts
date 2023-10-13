// With inheritance we extract the common properties or methods and put them in a
// separated class, and then have other classes inherit from these commonalities.
// It allow us to reuse code, the class that has the common code is called Parent / Base / Super
// and the class that reuses that code is called Child / Derived / Sub class.
class Person {
  constructor(public firstName: string, public lastName: string) {}

  // Now we need a getter to combine the first and last name.
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log('Walking');
  }
}

// To tell a class to inherit from another, we use the 'extends' class.
class Student extends Person {
  // In TS we have a special keyword called 'super' to refer Base class.
  // Here we need the first and last name, becuase they are parameters of the Person class,
  // that means that we need to add these parameters in the constructor.
  constructor(
    public studentId: number,
    // In this cases we dont want to use the 'public' modifier because these properties are already
    // created in the Person class.
    firstName: string,
    lastName: string
  ) {
    // Here we use 'super' to call the constructor of the base.
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log('Taking a test');
  }
}

// Lets create a student obejct
let student = new Student(1, 'Bauti', 'De Ang');

// If we use dot notation we will see the methods from Parent class.
student.walk();
