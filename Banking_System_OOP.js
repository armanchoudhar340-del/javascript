// Bank class
class Bank {
    static bankName = "SBI Bank";

    static displayBankName() {
        console.log(`Welcome to ${this.bankName}`);
    }
}

// BankAccount class
class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero");
            return;
        }
        this.balance += amount;
        console.log(`₹${amount} deposited successfully`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully`);
        }
    }

    checkBalance() {
        console.log(`Current Balance: ₹${this.balance}`);
    }

    displayAccountDetails() {
        console.log("----- Account Details -----");
        console.log(`Account Number : ${this.accountNumber}`);
        console.log(`Account Holder : ${this.holderName}`);
        console.log(`Balance        : ₹${this.balance}`);
    }
}

// Inheritance example (Savings Account)
class SavingsAccount extends BankAccount {
    constructor(accountNumber, holderName, balance, interestRate) {
        super(accountNumber, holderName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        let interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        console.log(`Interest of ₹${interest} added`);
    }
}

// ----------------- Main Program -----------------

Bank.displayBankName();

// Creating bank accounts
let acc1 = new BankAccount(101, "Parth", 5000);
let acc2 = new SavingsAccount(102, "Rahul", 8000, 5);

// Operations on first account
acc1.displayAccountDetails();
acc1.deposit(2000);
acc1.withdraw(1500);
acc1.checkBalance();

// Operations on savings account
acc2.displayAccountDetails();
acc2.addInterest();
acc2.withdraw(3000);
acc2.checkBalance();
