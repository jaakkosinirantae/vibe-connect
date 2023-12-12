/*** filename: sophisticated_code.js ***/

// This code is a simulation of a simple bank account system.
// It allows users to create accounts, deposit and withdraw funds,
// and view their account balance and transaction history.

class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Error: Invalid amount for deposit");
      return;
    }

    this.balance += amount;
    this.transactions.push({
      type: "Deposit",
      amount,
      timestamp: new Date()
    });

    console.log(`Deposited ${amount} into account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.error("Error: Invalid amount for withdrawal");
      return;
    }

    if (this.balance < amount) {
      console.error("Error: Insufficient funds");
      return;
    }

    this.balance -= amount;
    this.transactions.push({
      type: "Withdrawal",
      amount,
      timestamp: new Date()
    });

    console.log(`Withdrew ${amount} from account ${this.accountNumber}`);
  }

  getBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  }

  getTransactionHistory() {
    console.log(`Transaction history for account ${this.accountNumber}:`);
    this.transactions.forEach(transaction => {
      console.log(`- ${transaction.type} of ${transaction.amount} on ${transaction.timestamp}`);
    });
  }
}

const account1 = new BankAccount("123456789", "John Doe");
account1.deposit(500);
account1.withdraw(200);
account1.getBalance();
account1.getTransactionHistory();

const account2 = new BankAccount("987654321", "Jane Smith");
account2.deposit(1000);
account2.withdraw(300);
account2.getBalance();
account2.getTransactionHistory();

// Additional code can be added here to further extend functionality or test various scenarios.
// This code aims to demonstrate a sophisticated and complex structure for a bank account system.