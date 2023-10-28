// Sometimes we need quite a few objects from our modules, so importing the one by one can be
// a hassle.
// We can use a wildcard import to simplify our code like
import * as Shapes from './1_shapes';

// Now we are importing all exported objects from that module, and putting the inside a bucket or
// container called Shapes.
let circle4 = new Shapes.Circle1(3);
