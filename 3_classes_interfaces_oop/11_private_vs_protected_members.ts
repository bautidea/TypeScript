// In TS we have private and protected members.
// Protected members is something you dont or shouldnt use too often unless you know
// what are you doing. they can create copuling in the applications.
// coupling is when two or more parts of a program depend on each other very closely.
//* So its better to stick to public and private variables.
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // If we make this method private will be able to access it from within the class, but we cannto access it from
  // the outside.
  private walk(): void {
    console.log('Walking');
  }

  // Protected members are the same, we can access them whithin the class but not from the outside.
  //* the difference is that protected members are inherited, but private are not.
  // So we can access it through
  protected think(): void {
    console.log('Tinking');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    // Here we can access the protected method from the parent class
    this.think();
    console.log('Taking a test');
  }
}

let person = new Person('bauti', 'Deang');
person.walk(); // --> This property is private and can only be accesss in 'Person' class.

let student = new Student(1, 'Jhon', 'Salchi');
student.takeTest(); //--> Thinkng --> Taking a test
