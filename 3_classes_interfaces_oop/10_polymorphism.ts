// Polymorphism is one of the core principles on OOP, it means many forms.
// It refers to the situation where an object can many differents forms.
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
  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

let namesToPrint: Person[] = [
  new Student(1, 'Bauti', 'De Ange'),
  new Teacher('Mosh', 'Hamedani'),
];

// Function for printing name of people
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// Depending on the type of person we get a different output.
printNames(namesToPrint); // --> Bauti De Ange // --> Professor Mosh Hamedani
// What we are seeing here is polymorphism in action, its called like that because in each executon of the
// 'for (let person of people)' the person object is taking a different form.
// In the 1st iteration it takes the form of a student (because the 1st element on the array is a Student object)
// In the 2nd iteraction the person object takes form of a Teacher object, thats why we get different outputs.

// This is powerfull because tomorrow we can create a new class and pass it to this function without
// making a single change to it.
// For example lets create a new class
class Principle extends Person {
  override get fullName(): string {
    return 'Principle ' + super.fullName;
  }
}

namesToPrint.push(new Principle('Jhon', 'Wick'));

printNames(namesToPrint); // --> Bauti De Ange  // --> Professor Mosh Hamedani // --> Principle Jhon Wick
// We have enhanced our program without a single change to that function.
// This bring us to another principle of OOP
//* Open Close Principle --> Classes should be open for extension and close for modifications.
// We should be able to extend or inherit from classes, but we should not modify them, because if we do it
// we might brake something.
// ! If class is working you dont have to touch it, we can ennhace our application by simply adding new classes.
