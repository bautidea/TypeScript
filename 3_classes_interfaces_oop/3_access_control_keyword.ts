// In Ts we have other modifiers for controling access to to properties and methods.
// We use these properties to write more robust code.
// In TS we have three Access Modifiers
//  - Public.
//  - Private.
//  - Protected.

class Account {
  // When we declare properties at the beggining of the class, all of them are public by defualt
  // So we dont have to declare 'public' properties.
  readonly id: number;
  owner: string;
  //  But when we declare it as private, we get a compilation error when we try to access it from outside
  // the Account class. But we can acces it from within this class.
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    this.nickname = nickname;
  }

  // We have this method for updating the balance.
  // Lets say in the future we also want to record transactions in this account, every time we deposit or
  // withdraw money we want to record it.
  // If the balance property isnt private there is going to be a problem
  // because once we have an account object we can direclty update its balance (like line 50), this is where we can use
  // * Access Control Keywords or Access modifiers.
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');

    this._balance += amount;
  }

  // The Access Modifiers can also be applied to methods.
  // Lets define a method that we are going to use internally within this class.
  private calculateTax(): void {
    console.log('Calculating Tax');
  }

  // If we want to show the balance to the user we use a getter.
  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Bauti', 0);
account._balance += 10; // --> Compilation error: _balance its private and cant only be accessed in Account Class

// We cant access the 'calculateTax()' method
account.calculateTax(); // --> Compilation error: calculateTax its private and cant only be accessed in Account Class
