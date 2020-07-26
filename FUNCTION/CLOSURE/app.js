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


//complete exemple