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


//Destructuring swap variables
let first = 'McKey';
let second = 'shepard';

// let temp = second;
// second = first;
// first = temp;


[second, first] = [first, second]

console.log(first, second);


console.log('-----destructuring--object----');
//Destructuring 
//Object into variables
//object

const dean = {
    firsts: 'Dean',
    last: 'Winchester',
    city: 'everywhere',
    siblings:{
        brother: 'Sam'
    }
}

// const firstName = dean.firsts;
// const lastName = dean.last;
// const city = dean.city;
// const sibling = dean.siblings.brother;

// console.log(firstName, lastName, city, sibling);

const {firsts: firstname, last, city, zip, siblings:{brother:Sam}} = dean;
console.log(firstname, last, zip, city, Sam);

console.log('----destructuring---function---');

//destructuring function as an argument

const chris = {
    first: 'Chris',
    last: 'Griffin',
    city: 'Quahog',
    siblings:{
        brother: 'Stewie',
        sister: 'Meg'
    }
};

function printPerson({first, last, city, siblings:{brother:stew, sister:meg}}){
    // const {first, last, city, siblings:{brother:stew, sister:meg}} = person;
    console.log(first, last, city, stew, meg);
}
printPerson(chris);