// This file is importing the shapes defined in '1_shapes.ts'.
// To import a module in TS, if we press 'ctrl+space' inside the curly braces
// we are going to see all exported objects.
// While importing this we can also rename it to something else.
import { Circle1 as MyCircle1, Square1 } from './1_shapes';

//* Vscode help us with importation if we type 'let circle1 = new Circle1' Vs code
//* will generate the import code for us.

// Now that we imported the classes wee can use them just as before.
let circle1 = new MyCircle1(2);
console.log(circle1.radius); // --> 2

// Another good shortcut for example if we have this interface (it can be an object)
// and we stand in the name of it, and press 'ctrl+.' we can move this interface
// to a new file, this will generate a new file with this interface in it.
// Or we can select 'move to file' to move it to other created file.
interface Product1 {
  name: string;
}
