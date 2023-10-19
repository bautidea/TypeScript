// We can also make the interfaces generic.
// Lets imagine we have an endpoint for getting the list of users at a website
// http://mywebsite.com/users and similarily we have an endpoint for getting a list of products
// http://mywebsite.com/products.
// Lets define an interface for representung the result of calling of one of these API end points.

interface Result<T> {
  // The type of this can be generic or null, because if we might get an error we dont have data.
  data: T | null;
  // Sometimes when callling an API we might get an error
  error: string | null;
}

// To use the interface, we use a function in which we give it an URL and it will return the data we want, of
// type Result.
// Because this function is returning a generic result, we should also add the generic type parameter to the function.
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

// Lets define two more interfaces and see how we can use the fetch function with this interfaces.
interface User {
  username: string;
}

interface Products {
  title: string;
}

// If we dont type the generic type argument '<T>' we will get a compiler error, the TS compiler cannot infer the generic
// type argument, we will have to explicitly specify it.
let result = fetch<User>('url');
// If we type 'result.data' we can see that data is an User Object
result.data?.username;
