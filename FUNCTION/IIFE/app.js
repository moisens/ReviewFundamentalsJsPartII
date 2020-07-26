//IIFE Immediately-Invoked Function Expression
//Older approach - new Modules
//simple approach to avoid global scope pollution
//good way at protecting the scope of your function and the variables with in it.

//global name space, extra steps

const num1 = 30;
const num2 = 70;

function add(){
    console.log(`the result is: ${num1 + num2}`);
}
add();

(function(){
    const num1 = 40;
    const num2 = 70;
    console.log(`the result is: ${num1 + num2}`);
})();

//pass argument
(function(num3, num4){
    console.log(`the result is: ${num3 + num4}`);
})(877, 98);

//return/assing to variable
const result = (function(num3, num4){
    console.log(`the result is: ${num3 + num4}`)
    return num3 + num4;
})(900, 900);

console.log(result);