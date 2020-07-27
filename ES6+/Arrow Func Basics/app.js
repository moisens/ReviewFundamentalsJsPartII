//Arrow functions or Fat arrow functions
//no name, always expression, assign to variable
//no function key word
//'this'

// function sayHi(){
//     console.log('hello');
// }
// sayHi();

// const hello = function(name){
//     console.log(`Hello ${name}`);
// }
// hello('Sam');

// function triple(value1, value2){
//     return value1 * value2 * 3;
// }


const sayHi = () => {
    console.log('hello');
}
sayHi();
//Or 
const sayHi2 = () => console.log('Hi...');
sayHi2();

const double = value => value * 2;
const num = double(4);
console.log(num);

//two parameters and more than one line
const multiply = (num1, num2) => {
    const result = num1 * num2;
    //more code here
    return result;
}
const sum = multiply(20, 7);
console.log(sum);

//return Object
const obj = ()=> ({name: 'Sam', age: 34});
const person = obj();
console.log(person);

//arrow function as callback functions
const numbers = [1,2,3,4,5,6];
const big = numbers.filter(number => number > 2)
console.log(big);

bigger = numbers.filter((number, index) =>{
    console.log(index, number);
    return number > 2
});
console.log(bigger);


const btn = document .querySelector('.btn');

btn.addEventListener('click', () => console.log('You clicked...'));
