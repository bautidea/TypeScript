// enum represents a list of related constants.
// Lets say we want to represent the size of T shirts as constants.
// One way is to define three constants like this.
const small = 1;
const medium = 2;
const large = 3;

// Another way is to group this constants inside an enum.
// PascalCase - The first letter of every word should be uppercase.
// By default the TS compiler assigns the first member a value of
// { Small = 0, Medium = 1, Large = 2}
// If we dont want to use these values we can explicitly set them.
// If we set the value to a string then, we have to set the values for the rest of the
// members.

// Im going to set the 1st value to 1 and let the compiler set the other members.
enum Size {
  Small = 1,
  Medium,
  Large,
}

// Now we can declare a variable
let mySize: Size = Size.Medium;
console.log(mySize);

// If we compile this code and see the generated code, we will see that is pretty verbose
// *  var Size;
// *  (function (Size) {
// *      Size[Size["Small"] = 1] = "Small";
// *      Size[Size["Medium"] = 2] = "Medium";
// *      Size[Size["Large"] = 3] = "Large";
// *  })(Size || (Size = {}));

// But if we define the enum as 'const' the compiler will generate a more optimized code.
const enum OtherSize {
  ExtraSmall = 1,
  ExtraLarge,
}
let otherSize: OtherSize = OtherSize.ExtraLarge;
// This is how its seen in .js file.
//*  var otherSize = 2 /* OtherSize.ExtraLarge */;
