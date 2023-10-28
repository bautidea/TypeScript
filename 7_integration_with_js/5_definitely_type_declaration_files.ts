// Lets see how we can use third party JS libraries in our TS project
// i installed lodash.
// When we import this we will get an error saying 'Could not find a declaration file for
// module 'lodash', because this library is pure JS it doesnt have JSDoc comments, declaration files.

//* This is when we use a very popular github repository - https://github.com/DefinitelyTyped/DefinitelyTyped
// In this repository we can find declaration files for all the popular JS libraries.\
// So in the terminal we run 'npm i @types/-packagename-' after the forward slash we type the name
// of the target package.
//! We want to install this as a development dependency, because we're not going to deploy this with our application.
// npm i --save-dev @types/lodash
import * as _ from 'lodash';

// And now we have type annotation.
// The type of this empty is 'unknown', but if we pass a number array, we are going to see that
// the type will change to number array
_.clone([1, 2, 3]);

// With TS getting more popular many Js libraries comes with declaration files, but we dont need to install their
// declaration files separately from the mentioned repository, they come with a declaration file from installation.
