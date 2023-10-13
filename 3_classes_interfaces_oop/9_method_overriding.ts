// Sometimes we want to change something in the inherited code, thats when we use
//* Method Overriding --> Change the implementation of a method in a child class.
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(): void {
    console.log('Walking');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log('Taking a test');
  }
}

class Teacher extends Person {
  // If i dont want any extra properties in this class we dont define a constructor,
  // that way this class will inherit the constructor of the Parent class.

  // If we want to change the implementation of a method we need to prefix the method with
  // 'override' keyword to tell the compiler we are overriding or changing the implementation
  // of this method.
  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

let teacher = new Teacher('Mary', 'Simon');

console.log(teacher.fullName); // --> Professor Mary Simon
