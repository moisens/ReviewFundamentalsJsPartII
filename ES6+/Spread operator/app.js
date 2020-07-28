//spread operator
//Allows an iterable to spread/expand individually inside reciever
//split into single items and copy them
//ES2018 - ES8 

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john' ,'peter' ,'bob'];
const girls = ['susan', 'anna'];
const bestFiend = 'arnorld';

const friends = [...boys, bestFiend, ...girls];
console.log(friends);

//reference
const newFriends = friends;
newFriends[0] = 'Karina';//we are refencing the same place in the memory, then the two arrays are modified
console.log(newFriends);
console.log(friends);

//copy
const newNewFriends = [...friends];
newNewFriends[1] = 'robert';
console.log(newNewFriends);
console.log(friends);

console.log('------Spread Object------');
//Spreading into Object
const person = {
    name: 'Helene',
    job: 'Scientist, Adventurer'
}
console.log(person);

const newPerson = {...person, city: 'Vancouver', name: 'Samantha'};
console.log(newPerson);

console.log('----spread operator---DOM element----');

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');

console.log(headings);

const text = [...headings]
.map(item => `<span>${item.textContent}</span>`)
.join(' ')
result.innerHTML = text;


console.log('----spread operator within function');

//Spread operator - functions arguments
const numbers = [23, 44, 66,88, 876];
console.log(Math.max(numbers));//NaN Because Math.max don't accept arrays
console.log(Math.max(...numbers));

const amanda = ['Amanda', 'Tapping']
const sayHello = (name, lastName) =>{
    console.log(`Hello ${name} ${lastName}`);
}

sayHello(amanda[0], amanda[1])
//faster
sayHello(...amanda);

