//Hoisting
//function and var are hoisted
//safer to access only after initialized

//We can't access to let and cont befor they has been declared
//console.log(firstName);//it'll return Uncaught ReferenceError: Cannot access 'firstName' before initialization
//console.log(lastName); //it'll return Uncaught ReferenceError: lastName is not defined

//for the var variable , we can technically access to it before it has been declared;
//console.log(random);//undefined
//moreComplex();// return app.js:26 Uncaught ReferenceError: Cannot access 'firstName' before initialization

const firstName = 'Stewie';
let lastname = 'Brian';
var random = 'radom';

//with function we can call the function before it has been declared.
display();
console.log(display);
function display(){
    console.log('Hello little fella...');
}
//carefull the same does not apply with variables: let, const and var in the function

function moreComplex(){
    console.log(`${firstName} ${lastname} ${random}`);
}

