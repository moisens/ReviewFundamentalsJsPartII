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