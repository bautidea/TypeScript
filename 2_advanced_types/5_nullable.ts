// when working with null values, by defualt TS is very strict when using null and undefined values,
// because this values are common bugs in applications.
function greet(name: string) {
  console.log(name.toUpperCase());
}

// In JS we can call this function and pass a null value. But when we run the program, it will crash,
// because we cannot call the method '.toUpperCase()' on a null or an undefined object.
// Because of that TS doesnt allow us to pass a null value, it raises a compilation error.
greet(null);

// A possible option is to change a config property in the 'tsconfig.json' file, on 'Type Checking' section.
// We can set to false the option 'strictNullChecks' (this is enabled by default as part of 'strict' option).
// * But we should never turn off this option.

// What we can do is to check the type of the parameter, and give the ability of using null values.
function greet2(name: string | null | undefined) {
  //truthy
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

// We have to use a union type, to indicate this value can be null | undefined
greet2(null);
