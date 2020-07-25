//Object basics
/*
Objects  are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and
functions however if the value property is a function, 
it's called  a method
*/

//object litteral syntax, {}
//dot notation

const person = {
    name: 'Amanda',
    age: 44,
    married: true,
    siblings: ['Helene', 'Peter'],
    greet: function(){
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`);
    }

};
console.log(person);
console.log(person.name);
const name = person.name;
console.log(name);
person.age = 48;
person.city = 'Vancouver'


//delete property
const siblings = delete person.siblings;
console.log(siblings);//true, successfully deleted



//dot notation vs braquet notation

const age = 44//set variable as property value
//with the braquet we can also access to objects dynamically
let random = 'random-value';

//nested objects
const person2 = {
    name: 'Helene',
    age: age,// Can also write: age, if the property match the variable
    married: true,
    siblings: ['Amanda', 'Peter'],
    greet: function(){
        console.log(`Hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`Hello, my name is ${name}`);
    },
    job: {
        title: 'Adventurer Hero',
        company:{
            name:'Sanctuary',
            adresse: '1234 Praxis Vancouver BC',
        },
    },
    //braquet notation
    'random-value': 'random',

};
console.log(person2.age);
console.log(person2.job.title);
console.log(person2.job.company.name);
console.log(person2.job.company.adresse);
console.log(person2[random]);
//We can also use the braquets to access a normal object, instead of dots
console.log(person2['job']['title']);
