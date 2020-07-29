//Array.from an array of - NOT ON THE PROTOTYPE
//Array.from
//Array.of
//of creates a new array instance from a variable number of arguments

const example = ['one', 'two', 'three'];
console.log(example);
console.log(example.map);
console.log(example.from);
console.log(example.of);

console.log('----Array of()----');
//Array of
const friends = Array.of('true', 1, 'Sam');
console.log(friends);

console.log('----Array fom------');
//from returns array object from any object with a length
//property or an iterable object
//from turns array-like/ish  into array - string, nodeList, set

const udemy = 'udemy';
console.log(Array.from(udemy));//["u", "d", "e", "m", "y"]

function countTotal(){
    console.log(arguments);
    let total = Array.from(arguments).reduce((total, curr) =>{
        return total += curr;
    }, 0);
    console.log(total);
}
countTotal(67,99, 59,400)