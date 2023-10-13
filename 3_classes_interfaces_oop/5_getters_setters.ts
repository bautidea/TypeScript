class Account {
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

  // Here we modified the previous getter that was like this.
  //* getBalance(): number {
  //*   return this._balance;
  //* }
  // What we have here is called a getter, its a method inside a class that we use
  // for getting the value of a property.
  // With this we can access the balance property, but we cannot modify it.
  get balance(): number {
    return this._balance;
  }

  // We implement a setter to get a value and validate it.
  // By using a setter we are not assiging the value of a property directly
  // insead, each time we assign a value to the property 'balanceupdate' this setter gets called
  // and we use that to validate data.
  set balanceUpdate(value: number) {
    if (value < 0) throw new Error('Invalid value');
    this._balance = value;
  }
}

let account = new Account(1, 'Bauti', 0);
// We cannot set it.
account.balance = 10; // --> cannot assign to balanace its an only read property
console.log(account.balance); // --> 0

account.balanceUpdate = 10;
console.log(account.balance); // --> 10
