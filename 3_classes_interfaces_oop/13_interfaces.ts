// In OOP we have another buliding block called interface, beside classes (blueprints for creating objects).
//* We use interfaces to define the shape of objects.
// Lets say we want to represent a calendar concept. We have different types of calendar (google, iCal, Outlook)
// all these calendars shold have common properties and methods. So we define all these commonalities in a base
// class.
abstract class Calendar {
  constructor(public name: string) {}
  // Now defining some methods that are common to calendars.
  // None of these methods can have an implementation, because the implementation really depends on the type of calendar.
  // So we should declare this methods as abstract
  abstract addEvent(): void;
  abstract removeEvent(): void;
}

// Lets use an interface to define the same concept.
// Using an interface we should have a name property, as well as the two methods.
interface ICalendar {
  // Here we should describe the shape of every Calendar object.
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// If we compile the code to js. We will see that we wont have Interfaces in JS.
// The interfaces that we define, is purely used by TS compiler for type checking.

//* So should we use an abstract class or an interface?, it depends.
// In this case our calendar class is not providing any logic that subclasses can reuse,
// so in this case its better to use an interface because our code will be more concise and shorter.
// But in contrast if we have some logic that we want to share to subclasses, then we couldnt use an interface,
// because interfaces cannot have method implementations, we only have method declarations.

// We can use inheritance as well with Interfaces.
interface CloudCalendar extends ICalendar {
  // It going to inherit all these members, or add something extra
  sync(): void;
}

// Once we have an interface, we have to add real implementations, so we define a new class, but instead of using
// the extend keyword, we use the 'implements' keyword.
// We are going to get a compilation error as soon as we implement the interface, stating that "Class 'GoogleCalendar'
// incorrectly implements interface 'ICalendar'. Type 'GoogleCalendar' is missing the following properties from type 'ICalendar':
// name, addEvent, removeEvent".
//* If we stand in the compilation error and press 'ctrl .' and select 'implement interface calendar', vscode will generate the
class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}

// Now we have a class that implement the ICalendar interface, in the future we can create another class that implements this interface
// and both this classes will end up having the same shape.
//! Using an interface we can describe the shape of an object.
