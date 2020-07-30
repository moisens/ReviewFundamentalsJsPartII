//Promises
//Promises - Can be: Pending, Resolved, Rejected
//then catch - pass another callback

const headings1 = document.querySelector('.one');
const headings2 = document.querySelector('.two');
const headings3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

const container = document.querySelector('.img-container')
const url = 'https://source.unsplash.com/random';




const promise = new Promise((resolve, reject)=>{
    let value = true;
    if(value){
        resolve('Hey value is true');
    }else{
        reject('There was an error, value is false')
    }
})

.then((res) =>{
    console.log(res);
})
.catch((error) =>{
    console.log(error);
})

console.log(promise);

console.log('--------------------------------------');
//Reject example
btn.addEventListener('click', ()=>{
    //console.log(loadImage(url));
    loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err))
});

function loadImage(url){
    // const getImage = new Promise((resolve, reject) =>{

    // })
    // return getImage; //long way

    return new Promise((resolve, reject) =>{
        //create new image
        let img = new Image();
        img.addEventListener('load', () => {
            resolve(img)
        });
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load image from the source: ${url}`))
        });
        img.src = url;

    });
    
}



