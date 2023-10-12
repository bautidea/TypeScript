// In Ts we have modifiers that we can apply to our properties, this helps us write
// more robust code.
class Account {
  // Lets say the id of the Account should never change, we can solve this problem using the
  // 'readonly' modifier.
  readonly id: number;
  owner: string;
  balance: number;
  // Now let assume that there is an optional property.
  nickname?: string;

  constructor(id: number, owner: string, balance: number, nickname?: string) {
    // The id property can only be set in the constructor, if we try to reset it anywhere else,
    // we get a compilation error.
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');

    this.balance += amount;
  }
}

let account = new Account(1, 'Bauti', 0);
account.id = 5;

let account2 = new Account(2, 'Jhon', 0, 'JhonW');
