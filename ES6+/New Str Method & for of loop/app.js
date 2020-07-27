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
