// With re-exporting we can have a single module combined the exports of
// different modules.
// Sometimes we want to work with classes in different modules, for example in
// './5_reexporting_Shapes' we are splitting the classes in different modules.

//* We can use reexporting to combine all the modules we want to export into a
//* single module, and import only that.
// in 'index.ts', in the mentioned folder, we are combining all modules we want to
// export.

// Importing two different modules from 'index.ts'
//* import { Circle5, Square5 } from './5_reexporting_Shapes/index';

// We can take this to the next level, by importing them from the shapes folder,
// or sometimes we refer to this as 'package' so 'shapes package'
import { Circle5, Square5 } from './5_reexporting_Shapes';

// But by doing this we might get a compilation error, saying that we cannot find
// module './5_reexporting_Shapes'.
// To fix this problem we have to go to the config file, and in 'Modules' section,
// the default 'moduleResolution' is classic, so its a good practice to uncomment this line
// and set the module resolution to 'node' as opposed to 'classic'.
