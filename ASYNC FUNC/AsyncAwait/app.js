//Async Await
//await waits till promise is settled
//error handling - try catch

//How to write it ?
// async function someFunction(){
//     await
// }
// //or
// const onotherFunction = async () => {
//     await
// }

//async retuns a promise by default

const headings1 = document.querySelector('.one');
const headings2 = document.querySelector('.two');
const headings3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
    try{
        //when returning data we need to asign to a variable -> const first = await addColor(1000, headings1, 'red')
        await addColor(1000, headings1, 'red')
        await addColor(1000, headings2, 'orange')
        await addColor(1000, headings3, 'green')
    }
    catch(error){
        console.log(error);
    }
   
});


function addColor(time, element, color){
    return new Promise((resolve, reject) =>{
        if(element){
            setTimeout(() =>{
                element.style.color = color;
                resolve();
            } ,time)
        }else{
            reject(new Error(`There is no such element ${element}`));
        }
    })
}