// Combining all modules we want to export in a single file.
//* import { Circle5 } from './circle';
//* import { Square5 } from './square';

// And exporting all of them next.
//* export { Circle5, Square5 };

// With this new structure we dont have to import separately this two
// objects.

// We have a short hand syntax for exporting and importing this classes in one go
// we change from the 'import' word to export.
export { Circle5 } from './circle';
export { Square5 } from './square';
