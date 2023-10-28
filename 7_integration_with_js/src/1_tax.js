// In this file we cannot use any TS feature, that means we cannot annotate
// the type of the 'income' parameter, its a regular js file.
export function calculateTax(income) {
  return income * 0.3;
}
