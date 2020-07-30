const headings1 = document.querySelector('.one');
const headings2 = document.querySelector('.two');
const headings3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    addColor(1000, headings1, 'red')
    .then(() => {
        addColor(2000, headings2, 'orange');
    })
    .then(() => {
        addColor(3000, headings3, 'green');
    })
    .catch((error) => console.log(error))
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