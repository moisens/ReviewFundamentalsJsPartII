//spread operator
//Allows an iterable to spread/expand individually inside reciever
//split into single items and copy them
//ES2018 - ES8 
//spraed operator for the arguments
//rest operator for parameters

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

console.log('------Rest operator----');

//Rest spread operator
//gathers/collects the items

//arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'grape'];
const [first,second, ...fruits] = fruit; //...fruits refers to the rest in the array
console.log(first, fruits);

//objects
const personn = {nom: 'Helene', lastname: 'Magnus', job: 'Scientist'}
const {job, ...rest} = personn;
console.log(job, rest);

const testScores = [99,200, 790, 800]

//Collecting parameters when passing into a function

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    let total = 0;
    for(const score of scores){
        total += score;
    }
    console.log(total);//addition of all scores
    console.log(`${name}'s average score is ${total/scores.length}`);
}
getAverage(person.name, 99,200, 790);
getAverage(person.name, ...testScores)