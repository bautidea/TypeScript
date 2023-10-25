// Decorators are atributes that we apply to our classes and their members, and with
// this we can change how they behave.
// By applying a decorator, we can convert this class, to a component for a web application.
// Here we have a compile error becouse TS doesnt have this component or any built in decorators,
// we have to create our own (Frameworks like Angular or vue comes with a bounch of built-in decorators).
@Component
class ProfileComponent0 {}

// Under the hood decorators are functions that gets called by the JS runtime. The JS runtime or the
// JS engine that executes our code is going to call that function and pass our class to it.
// In that function we hace a chance to modify this class, so we can add new properties, new methods,
// or change the implementation of existing methods.

//! Before we can create any decorators we have to enable a special compiler option, because,
//! decorators are an experimental feature and their standards and implementation might change in future.
// In our config file, in the 'Language and Environment' section, we have a setting called
// 'experimentalDecorators', we have to enable it.
