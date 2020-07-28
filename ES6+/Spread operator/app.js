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
