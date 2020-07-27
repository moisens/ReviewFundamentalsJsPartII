//New string method
//startsWith(), endsWith(), includes(), repeat()

const person = 'Helene Magnus';
const employee = '55900-ATM-HELENE-MAGNUS';
const manager = '55900-SCM-SAMANTHA-CARTER';

//startsWidth
console.log(person.startsWith('Hel'));//true
console.log(person.startsWith('hel'));//false
console.log(employee.startsWith('ATM', 6));//true

//endsWidth
console.log(manager.endsWith('SCM', 9));//true

//includes
console.log(employee.includes('HELENE'));//true

const multiplyPeople = (person, amount = 5) => person.repeat(amount);
const people = multiplyPeople(manager, 2);
console.log(people);


//FOR OF LOOP
//for of - loops trough the values of an iterable object
//string, Array, Map, Set etc - NOT OBJECT
//unlike forEach, we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longNname = 'James Tiberius Kirk';
let shortName = '';

for (const letter of longNname){
    //console.log(letter);
    if(letter === ' '){
        continue;
    }else{
        shortName += letter;
    }

}
// document.body.innerHTML += shortName
console.log(shortName);

for(const fruit of fruits){
    //console.log(fruit);
    if(fruit === 'banana'){
        continue;
    }else{
        console.log(fruit);
    }
}


