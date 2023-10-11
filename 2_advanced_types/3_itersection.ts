// WE have another technique for combining types, called
//* Intersection --> Represents an object that has multiple types
// Instead of '|' we use '&'.
let weight: number & string;
// This represents an object that is both, a number and a string at the same time.
// Lets define a custom type using Type Alias.
// This represents an object that can be dragged on the screen.
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Using Intersection we can combine them and create a new type
type UIWidget = Draggable & Resizable;

// With this type in place, we can declare a variable, which is type UIWidget, and is an object.
let textBox: UIWidget = {
  drag: () => {
    console.log('dragging');
  },
  resize: () => {
    console.log('resizing');
  },
};
