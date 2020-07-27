//destructuring
//faster easier way to access/unpack values from arrays
//objects into variables
//Array

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['Sam', 'Tealc', 'Daniel', 'Jack', 'Cameron'];
//Old way
const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];

console.log(orange, banana, lemon);

//Destructuring
const [sam, tealc, daniel,, cameron] = friends
console.log(sam, tealc, daniel, cameron);



