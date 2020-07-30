//callback
// boilWater();
// console.log('chop carrots');

// function boilWater(){
//     console.log('boiling water..');
//     setTimeout(() =>{
//         console.log('done.');
//         console.log('add carrots.');
//         setTimeout(() =>{
//             console.log('Carrots are done'); 
//             console.log('add onions');
//             setTimeout(() =>{
//                 console.log('onion done.');
//             } ,5000)
//         }, 5000);
//         console.log('chop onions');
//     },10000)
    
// }

console.log('--------callbacks hell in DOM-------');

//callbacks in DOM
const headings1 = document.querySelector('.one');
const headings2 = document.querySelector('.two');
const headings3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    setTimeout(() =>{
        headings1.style.color = 'red';
        setTimeout(() =>{
            headings2.style.color = 'green';
            setTimeout(() =>{
                headings3.style.color = 'blue';
            },3000);

        },2000);

    },1000);

});
    
    
    