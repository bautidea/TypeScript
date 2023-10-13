// Every time we create a class in TS we have to repeat the patter of creating a constructor
// with a bounch of parameters and write the propety initialization code in the that constructor.
// We can initialize properties in a different way
class Account {
  // In the constructor parameters we define the properties type, so its not necesary to define
  // them before constructor.

  // When we create the constructors parameters we can prefix it with an Access Modifier.
  // This are called parameter properties.
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');

    this._balance += amount;
  }

  private calculateTax(): void {
    console.log('Calculating Tax');
  }

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Bauti', 0);
