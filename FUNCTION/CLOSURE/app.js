//Closure
//closure gives you an access to an outer function's scope
//form an inner function
//make private variables with closures

function outer(){
    console.log('hello, i\'am an OUTER function');
    let privateVar = 'secret'
    function inner(){
        console.log(`Hi, i\'am an INNER funciton, and listen to this : ${privateVar}`);
    }
    //inner(); //Or we can return the inner function and the invok it
    return inner;
}
//console.log(privateVar);//Impossible to access to privateVar from here
//but inner function has access to the privateVar


const value = outer();
console.log(value);
value();

//We can also write it like this:
// outer()();//:-)


//Basic exemple

function newAccount(name, initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    return showBalance;
}

newAccount('Helene', 800)();

const stewie = newAccount('Stewie', 700);
const brian = newAccount('Brian', 300);

stewie();
brian();

console.log('--------complete exemple--------');
//complete exemple

function newAccount2(name, initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);
    }

    function deposit(amount){
        balance += amount;
        showBalance();
    }

    function withdraw(amount){
        if(amount > balance){
            console.log(`Hey, ${name}, sorry not enough funds `);
            return;
        }
        balance -= amount;
    }

    return {
        showBalance: showBalance,
        deposit: deposit,
        withdraw: withdraw
    };
}



const peter = newAccount2('Peter', 1000);
const lois = newAccount2('Lois', 1300);

peter.showBalance();
lois.showBalance();
lois.deposit(2500);
lois.withdraw(3300);
lois.showBalance();