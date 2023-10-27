// Parameter decorators is not used that often.

// Let define a new type.
type WatchParameter = {
  // There are two pieces of information we need to know about these
  // watch parameter.
  methodName: string;
  parameterIndex: number;
};

// Now that we have this new type lets define an Array of watch parameters.
const watchedParameters: WatchParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  // Quite ofter we store some metadata about these parameters, so later our framework
  // can do something about it.
  // So all we can do in this decorator function is store an object in the created array above.
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
  // This object will collect the passed metadata, and our framework later on can use this metadata
  // to do something, perhaps we're going to create objects, and we want to know what parameter we should watch.
}

class Vehicle {
  move(direction: string, @Watch speed: number) {}
}

// Lets log the list of watched parameters on console
console.log(watchedParameters); // --> [ { methodName: 'move', parameterIndex: 1 } ]
