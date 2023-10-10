// TS helps us prevent common problems when working with functions.
// The TS compiler inferre the type of the type of the returned value, if we hover over the next
// function we are going to read --> function test(income: number) : number
function test(income: number) {
  return 0;
}

// But as a good practice we should always annotate the functions, so all the parameters as well as the
// return type should be properly annotated. To annotate the type of the return value.
// * We can specify the type 'void' if we are not going to return a value.
function test2(income: number): number {
  return 0;
}

// Annotating the type in a function has a number of benefits, if we forgot to return a value or if we
// return a different kind of value (a string for example) we will get a compilation error
function test3(income: number): number {
  return 'a';
}

// We have a compiler option for detecting unused parametters in the 'tsconfig.json' file, in the 'Type Checking'
// section, we have a compiler option called "noUnusedParmeters", we have to set it to true.
// This setting is not part of the 'strict' setting, after doing this we will see a compilation warning (yellow underline
// we see on income on all functions above)

// Here we have another compilation error, stating 'function lacks ending return statement and return type does not include
// "undefined"'. What this is saying is that if the condition is false then the function would be returning a 'undefined' value.
function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.2;
}
// If we remove the annotation type of the function we wont get this error. But the function stil has the same problem, of the income
// being greater than 50_000.
// We have another compiler option for detecting these kind of issues where we forgot to return a value.
// In the 'Type Checking' section we have a setting called 'noImplicitReturns', we have to set it to true.
function calculateTax2(income: number) {
  if (income < 50_000) return income * 1.2;
}
// After enabling that config option we will see the compile warning stating 'Not all code paths return a value'

// We ave another option for detecting unused variables, we have to set to true 'noUnusedLocals'.
function calculateTax3(income: number): number {
  let x;
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}
// After enabling we have a yellow warning sying '"x" is declared, but its value is never read'.

// We can make an parameter optional by adding a '?' //* taxYear?: number
// Or we can set a default value //* taxYear = 2022
function calculateTax4(
  income: number,
  taxYear?: number,
  newTaxYear = 2023
): number {
  //  If the user dont provide a value undefined will be used, thats why we are getting a compilation error.
  // One option is to use JS trick of using the 'OR' operator //* (taxYear || 2022)
  if (taxYear < 2022) return income * 1.2;
  if (newTaxYear > 2025) return income * 2.0;
  return income * 1.3;
}

// If we want to call the above function we have to pass EXACTLY thre parameters, no more, nothing less.
calculateTax4(10_000, 2022, 2023);
// If we add an extra parameter we get a compilation error.
calculateTax4(10_000, 2022, 2023, 2);
// If we want to add less parameters we should make the parameters optional.
