//Blue print
//Factory functions and Constructor function
//factory functions

// const Amanda = {
//     firstName: 'Amanda',
//     lastName: 'Tapping',
//     fullName: function(){
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     }
// }

// const Helene = {
//     firstName: 'Helene',
//     lastName: 'Magnus',
//     fullName: function(){
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     }
// }

//FACTORY FUNCTIONS
function createPerson(firstName, lastName){
    return{
        firstName: firstName,
        lastName: lastName,
        fullName: function(){
            console.log(`My full name is ${this.firstName} ${this.lastName}`);
        }
    }
}

const Amanda = createPerson('Amanda', 'Tapping');
Amanda.fullName();

const Helene = createPerson('Helene', 'Magnus');
Helene.fullName();
