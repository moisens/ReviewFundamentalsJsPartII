//var, let, const
//define,  update, redefine
//const can't mutate primitive type
console.log('--------var-------');
//define
var number = 100;
console.log(number);
//update
number = 200;
console.log(number);
//redefine
var number = 'orange';
console.log(number);

console.log('-----------let---------');

//define
let amount = 90;
console.log(amount);
//update
amount = 92;
console.log(amount);
//redefine
//let amount = 'sweets';// Uncaught SyntaxError: Identifier 'amount' has already been declared
//So we can't redefine let.

console.log('------const--------');

//define
const total = 80;
console.log(total);
//update
//total = 88; //Uncaught TypeError: Assignment to constant variable.
//const don't allows us to update, to mutate primitive type

const person = {name: 'bob'};
person.name = 'Brian';
console.log(person.name); //With reference type can mutate the values in the object or arr
//but we can't reassign the variable itself.

console.log('----Function scope and Block Scope');
//let, const - blocked scoped {} - anything within {}
//var - function scoped

//Global scope
var amounts = 11;

function greet(){
    //local scope
    var random = 'Some random value'
    console.log(`hello there ${amounts} ${random}`);
}
//console.log(random);//Uncaught ReferenceError: random is not defined => it'll be the same for let and const
greet();

//with var, we can reassign the global variable in a if statement
var totaux = 1000;
var test = true;
if(test){
    var totaux = 'You like poscicles ?'
    console.log('Hello little fella');
}
console.log(totaux);

var food = 'fish';

//with let, from outside the sope, we can't access to a local variable
//It'll works the same for const
let aTotal = '1000';
let aTest = true;

if(aTotal){
    //local scope
    let aTotal = 'hmmmmmhhhh';
    let val = 'somme random value';
    console.log('yes mr Herbert');
}

//console.log(val);//Uncaught ReferenceError: val is not defined

{
    let aTotal = '8';
    console.log(aTotal);
}

{
    let aTotal = '222'
    console.log(aTotal);
}

console.log(aTotal);




