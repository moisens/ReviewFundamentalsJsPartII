//Blue print
//Factory functions and Constructor function
//factory functions

//new - create a new object, points to it, omit return

//Constructor function
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        console.log(`My full name is ${this.firstName} ${this.lastName} and I 'am an adventurer`);
    }
}

const Amanda = new Person('Amanda', 'Tapping');
Amanda.fullName();

const Helene = new Person('Helene', 'Magnus');
Helene.fullName();


/*All object in javascript have access to constructor
property that returns a contructor function that created it.
Built in contructor functions, arrays an functions are object in javascript.
*/

const Sam = new Person('Samantha', 'Carter');
console.log(Sam.constructor);

const Stewie = {}
console.log(Stewie.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function(){};
console.log(sayHi.constructor);

//we can use constructor to create new object
const Stew = new Amanda.constructor('Stewie', ' G.Griffin');
Stew.fullName();