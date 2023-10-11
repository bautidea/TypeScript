// Sometimes we know more about the type of an object than TS.
// In JS we have this 'document' object that represents a document or a HTML page loaded
// in a browser, we have this method for getting a referent to an element on the page.
let phone = document.getElementById('phone');
// This method return either a HTMLElement or null, lets assume this returns an HTMLElement.
// HTMLElement is a class defined in JS that represents any kind on HTML element.

// Elements of HTML type have an extra property called 'value' for reading the value entered by the user.
// If we use dot notation we are going to see that we cannot see the '.value' property.
// * 'phone.' (no value property)

//* This is were we use Type assertion, we are going to tell the TS compiler the type of the received element.
let phoneNumber = document.getElementById('phone') as HTMLInputElement;
// Now the type of 'phoneNumber' changes and is HTMLInputElement, and if we use dot notation, we can see the value
// property.
phoneNumber.value;

// The 'as' keyword is not going to convert the object returned from the method to a different type of object, its purely
// for telling the compiler that we know more about the type of the object.
// If the object returned from that method is not an HTML input element, when we try to access the value property, our
// programm is going to crash.
// ! There is no type conversion happening during assertion.

// There is another syntax to use assertion, we prefix the expression with angle brackets and add the target type there.
let phoneCell = <HTMLInputElement>document.getElementById('phone');
