// The syntax we have here for exporting and importing modules
import { Circle1 as MyCircle1, Square1 } from './1_shapes';

export class Circle2 {
  constructor(public radius: number) {}
}
// Is part of ES6 modules, this format is supported in pretty much all
// browsers and JS runtimes out there.

// But there are other module formats that were used in the pasts
// and its good to know they exist:
// AMD
// UMD
// CommonJS
// ES6 --> became natively supported and is the actual.

// To change the used module format we go to the config file and in
// 'Modules' section we specify the module we want to use in  'module' option.
// If you press 'ctr+space' between the quotes, we can see all the available
// formats.
// So depending on the module format, we sat in our TS config file, the generated
// JS code is going to be different.

// The good thing of using TS is that you dont have to know learn all this formats
// we can use 'import' and 'export' statements, and the TS compiler will
// translate the code to the format you want.
