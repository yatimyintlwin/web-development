class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

let myAcc = new BankAccount(223, 4000);
myAcc.deposit(30);
console.log(myAcc.balance);

myAcc.withdraw(50);
console.log(myAcc.balance);
