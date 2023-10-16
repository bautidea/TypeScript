// Define a class called Logger that takes the name of a file in its constructor
// and provides a method for writing messages to that file. Don’t worry about the actual
// file I/O operations. Just define the class with the right members.
class Logger {
  constructor(public fileName: string) {}

  writeOnFile(textToAdd): void {
    console.log(`${textToAdd} added on file ${this.fileName}`);
  }
}

let log = new Logger('myfile.txt');
log.writeOnFile('Hello'); // --> Hello added on file myfile.txt .

// Given the Person class below, create a getter for getting the full name of a person.
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }
}
let newPerson = new Person('Bauti', 'Wick');
console.log(newPerson.fullName); // --> Wick Bauti

// Create a new class called Employee that extends Person and adds a new property called salary.
class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

let newEmployee = new Employee('John', 'Mosh', 1500);

// Given the data below, define an interface for representing employees:
interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface IEmployee {
  name: string;
  salary: number;
  address: IAddress;
}

let employee: IEmployee = {
  name: 'John Smith',
  salary: 50_000,
  address: { street: 'Flinders st', city: 'Melbourne', zipCode: 3144 },
};
