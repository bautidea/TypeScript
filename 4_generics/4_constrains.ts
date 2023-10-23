//  Sometimees we need to constrain generic Type arguments. Lets define a simple generic
// function
function echo<T>(value: T): T {
  return value;
}

// Now we can call the function an pass any value that we want.
echo('hi');
echo(2);
//  But if we want to constrain or limit the type of objects we can pass here?
// Right after the generic type parameter we use the 'extends' keyword and then we specify the type 
// cn be assigned
function echo2<T extends>(value: T): T {
    return value;
  }