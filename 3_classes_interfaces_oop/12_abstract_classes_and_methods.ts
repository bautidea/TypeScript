// Suppose we have 3 different classes that represents 3 objects to be draw in a canvas,
// these classes have common properties and method on a Shape class
class Shape {
  constructor(public color: string) {}
  // Here we have a property for rendering the shape.
  render() {}
  // At this point we dont know how to render a shape, because the rendering algorithm
  // really depends on the type of the shape, so we have to create another class thar
  // inherit from shape.
}

class Circle extends Shape {
  // Color doesnt has a public keyword because we already define this property in the base class
  constructor(public radius: number, color: string) {
    // we use 'super' to call the constructor of the base class/
    super(color);
  }

  // we overrite parent class.
  // If we would have other classes (eg Squares, Triangles) that implemented the render method,
  // we should override the render method.
  override render(): void {
    console.log('Rendering a circle');
  }
}
// There is a problem with this implementation
let shape = new Shape('red');
// We can call render method from shape and this doesnt make sense,
// we shouldnt be able to render the shape, because int not a real shape like a circle.
shape.render();

// This is when we use abstract classes and methods, when we want to stop us from creating
// an instance of the shape class, so we dont use the render method from that class.
//* we mark the class as abtract.
// Whit this we are telling the TS compiler that this class is abtract or simple not ready,
// another class has to extend it.
abstract class AbsShape {
  constructor(public color: string) {}
  // Sometimes in abstract classes we have abstract methods, these are methods that have
  // no implementation, is really no way for us to implement them, like the render method.
  //! Abstract methods can only exist in abstract classes.
  abstract render(): void;
}
// So another class has to extend it
class AbsCircle extends AbsShape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a circle');
  }
}

// Now with this when we try to create an instance of a shape we get a compilation error
let absShape = new AbsShape('blue'); // --> Cannot create an instance of an abstract class.
