//find - gets specific item
//findexIndex - gets the indexof the item
//every - every item in the array-true or false
//some - at least onse item true or false

const people = [
    {id: 1, name: 'Dean'},
    {id: 2, name: 'Sam'},
    {id: 3, name: 'Castiel'}
]

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

const dean1 = people.filter((person) =>{
    return person.name === 'Dean';
});
console.log(dean1);//filter return an array
console.log(dean1[0]);
console.log(dean1[0].id);

//filter
const dean = people.find((people) =>{
    return people.name === 'Dean';
});
//find
console.log(dean.name);//find return one single item
console.log(dean.id);

//findIndex & slice it.
const person = people.findIndex((item) =>{
    return item.id === 3
});
console.log(person);//2
const newPeople = people.slice(0, person);
console.log(newPeople);


//every
const allGoodGrades = grades.every((grade) =>{
    return grade !== 'C';
});
console.log(allGoodGrades);

const allGoodGrades2 = goodGrades.every((grades) => {
    return grades !== 'C'
});
console.log(allGoodGrades2);

//some
const oneBadGrade = grades.some((item) =>{
    return item === 'C'
});
console.log(oneBadGrade);//true

const oneBadGrade2 = goodGrades.some((item) =>{
    return item ==='C'
});
console.log(oneBadGrade2);//false
