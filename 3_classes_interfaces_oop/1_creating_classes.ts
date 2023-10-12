// A class is a blueprint for creating objects.
// In Pascal naming convention.
class Account {
  // First we define our properties type.
  id: number;
  owner: string;
  balance: number;

  // After that we initialize our properties.
  // The constructor method should not have an anotation because it always returns an instance of
  // the Account object.
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  // We create the object methods afterwards
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');

    this.balance += amount;
  }
}

// Once we have a class we can create an object to start using that class.
let account = new Account(1, 'Bauti', 0);

// Let call deposit method
account.deposit(100);
console.log(account.balance); // --> 100

// Here we can see all properties of our account object.
console.log(account); // --> Account { id: 1, owner: 'Bauti', balance: 100 }

// Lets see the type of this account
console.log(typeof account); // --> object
// But what if we want to check the type of an object, an see if its an instance of a given class
console.log(account instanceof Account); // --> true
