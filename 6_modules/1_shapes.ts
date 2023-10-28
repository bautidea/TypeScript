//  In this code ill have all my shapes
// The classes defined here we can only use them in this file, unless
// we export them.
// To export them us just add the keyword 'export' in front of class creation.
export class Circle1 {
  constructor(public radius: number) {}
}

export class Square1 {
  constructor(public width: number) {}
}

// I imported this using 'ctrl+.' -> 'move to file'.
interface Product1 {
  name: string;
}
