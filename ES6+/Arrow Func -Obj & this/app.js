//reg function : 'this' refers parent, left of the dot
//arrow function : refers to it's current surrounding scope

const Helene = {
    firstName: 'Helene',
    lastName: 'Magnus',
    sayName: function(){
        self = this; 
        setTimeout(function(){
            console.log(this);
            console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
        } ,2000)
    },
};

//OR Use fat arrow function on the setTimeout
const Sam = {
    firstName: 'Samantha',
    lastName: 'Carter',
    sayName: function(){
        setTimeout(() =>{
            console.log(this);
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        } ,2000)
    },
};


const Amanda = {
    firstName: 'Amanda',
    lastName: 'Tapping',
    sayName: () => {
        console.log(this);
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
}

Helene.sayName();
Sam.sayName()
//Amanda.sayName();//Hello, my name is undefined undefined. Because 'this' in this situation refers to the suroundind scope wich is window.