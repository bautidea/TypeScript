// When working with nulls or undefined values, sometimes we need to fall back to a default value.
// Imagine we receive this from the user (can be a valid speed or null)
let speed: number | null = null; // Initializing to null, meaning the user didnt provided a value.
// Ride object
let ride = {
  // Set the speed to either the value we receive from the user or a default value.
  // In plain JS we can implement this like
  // * speed: speed || 30
  // If speed is trythy we are going to use that value, otherwise 30 as default value.
  // What if 0 is a valid value for speed, 0 is Falsy (Undefined, null, '', false, 0)
  // In current implementation 0 will be ignored, because its a falsy value, and 30 will be used.
  // We can check if the value is not null
  // * speed: speed !== null ? speed : 30
  // in TS we have a better way
  speed: speed ?? 30, // * Nullish coalescing operator
};

// The reason why its called nullish is because this value can be null or undefined.
