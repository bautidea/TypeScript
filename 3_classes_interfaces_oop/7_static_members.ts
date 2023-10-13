//* Static properties, is a property and belongs to a class an not an object.
// We use the 'static' keyword to indicate it.
// Lets imagine we are building a ride sharing app like Uber, people can use their
// phone app to request a ride.
class Ride {
  // Lets keep track of the active rides, we want to know how many active rides there are in the system.
  activeRides: number = 0; // We initialize the property here, not in constructor.

  start() {
    this.activeRides++;
  }

  stop() {
    this.activeRides--;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(ride1.activeRides); // --> 1
console.log(ride2.activeRides); // --> 1
// We see 1 in both, but we currently have two active rides.
// Its because we are dealing with two separate objects, and each object is in a different space in memory,
// each object is tracking an independet ride.

// What we need here is a single or global place where we can keep track of the active rides, thats when we use
// Static Properties, we are going to have one instance of a property in memory
class StaticRide {
  // Now this property belongs to the 'StaticRide' class and not the 'staticRide' object.
  // We need to use Access Modifiers, because if we dont, ar anytime in the code i can modify the property.
  // By making the property private and using a getter to obtain its value we can solve that issue.
  private static _activeRides: number = 0;

  // Here we need to remove the 'this' keyword, because 'this' is referencing to the current objet an instance of the
  // 'StaticRide' class, but since 'activeRides' is static it doenst belong to the object.
  // We need to replace 'this' with the name of the class.
  start() {
    StaticRide._activeRides++;
  }

  stop() {
    StaticRide._activeRides--;
  }

  // If we dont add the 'static' access modifier, this getter will be part of the 'StaticRide' object (staticRide1).
  // Here we have a single place in which we can keep track of active rides.
  static get staticActiveRides(): number {
    return StaticRide._activeRides;
  }

  // If this getter wasnt 'static' we can acces it through the object.
  get activeRides(): number {
    return StaticRide._activeRides;
  }
}

let staticRide1 = new StaticRide();
staticRide1.start();

let staticRide2 = new StaticRide();
staticRide2.start();

// To obtain active rides we replace the object with the class.
console.log(StaticRide.staticActiveRides); // --> 2

// Or if the property wasnt static, we could acces it through object.
console.log(staticRide1.activeRides); // --> 2
console.log(staticRide2.activeRides); // --> 2

// If the property wasnt private we could modify its value like this.
StaticRide.activeRides = 100;
