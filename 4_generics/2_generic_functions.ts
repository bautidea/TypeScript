// We can also create generic functions or methods.
function wrapInArray<T>(value: T) {
  return [value];
}

// We can use generics to make this function generic or reusable.
let numbers = wrapInArray(2);
// If we pass a string we will get a string array.
// If we pass a number we will get a number array.

// This unction can also be a method on a class.
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let string = ArrayUtils.wrapInArray(1);
