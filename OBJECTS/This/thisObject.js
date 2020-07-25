console.log('--------this--------');
//this
//points to the left of the dot

const Amanda = {
    firstName: 'Amanda',
    lastName: 'Tapping',
    fullName: function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

const Helene = {
    firstName: 'Helene',
    lastName: 'Magnus',
    fullName: function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

Amanda.fullName();
Helene.fullName();

/*In Reg function (not arrow) 'this'
determined by 'HOW'!!! a function is invoked (left of .)

defaults to glogal - window
arrow functions - pump the breaks

*/

//console.log(this);//window global object

function showThis(){
     console.log(this);
}

const Sam = {
    name: 'Sam',
    showThis: showThis,
}

const Dean = {
    name: 'Dean',
    showThis: showThis,
}

Sam.showThis();
Dean.showThis();

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);
btn2.addEventListener('click', function(){
    showThis();//point to the global object - window
});