// Sometimes we want to export a single thing from a module, in those cases its
// better to use 'default export'.

// In this case i dont want to import all classes, because they might be
// a part of the implementation detail of this module, other modules should not know
// about it existence. Because other modules might potentially use those classes and become
// dependant on the, and the in the future, if we decide to change these classes other modules
// that are using this classes might potentially break.
// So we should reduce the surface area of our modules, in order to reduce dependency between our
// modules.

// Here we can only export our Store class only, then go to 'index' and imported as
// we saw earlier.
//* export class Store {}

// This is good but if we are importing a single module, there is a better way.
// we use 'export default' to indicate this is the default object exported from this module.
// And when importing this module in 'index' we wont need the curly braces, just
//* import from './3_default_exports'
export default class Store {}
class Compressor {}
class Encryptor {}

// Default exports can also coexist with 'named exports', for example lets imagine that
// other modules need to know about this Format enum.
// So we are going to export it as normal
export enum Format {
  Raw,
  Compressor,
}

// And while importing this object in 'index' module, first we import the default object,
// and the we add braces to import the 'name exports'
//* import Store, { Format } from './3_default_exports'
