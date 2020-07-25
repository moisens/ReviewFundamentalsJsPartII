/*
Prototypal inherutance Model
Javascript uses prototypal inheritance model. That means every
contructor function/class has a prototype property that is shared
by every instance of the contructor/class.
So any property and method or property can be accessed by every
instance. Prototype property returns an object.
*/

function Account(name, initialBalance){
    this.name = name;
    this.balance = initialBalance;
}

const Stewie = new Account('Stewie Griffin', 1500);
const Brian = new Account('Brian Griffin', 150);

//Account.prototype.bank = 'TheBank';

Account.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}$`);
}
console.log(Account.prototype);

console.log(Stewie.bank);
console.log(Brian.bank);

Stewie.deposit(200);
Brian.deposit(200);