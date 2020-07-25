/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance
*/

//In ES6 All properties are gonna be in the instance. The methods in the prototype
class Account{
    constructor(name, initialBalance){
        this.name = name;
        this.balance = initialBalance; 
    }
    bank = 'Chapai';
    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}$`);
    }
}

const Sam = new Account('Sam', 0);
console.log(Sam);
console.log(Sam.name, Sam.balance);
Sam.deposit(500);
console.log(Sam.bank);

const Helene = new Account('Helene', 1500);
console.log(Helene);
console.log(Helene.name, Helene.balance);
Helene.deposit(1500);
console.log(Helene.bank);