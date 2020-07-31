//fetch is promise base by default

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', () => {
    fetch(URL)//by default the method is GET
    .then((data) => {
        return data.json();//json() return a promise
    })
    .then((response) => {
        return displayData(response)
    })
    .catch((error) => {
        console.log(error);
    })
});

function displayData(data){
    img.classList.add('shake-img');
    const {value: joke} = data;
    content.innerHTML = joke;
    const random = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        img.classList.remove('shake-img');
    }, random);
}

//We can also write it like this: put directly the object as a value
// function displayData({value: joke}){
//     img.classList.add('shake-img');
//     // const {value: joke} = data;
//     content.innerHTML = joke;
//     const random = Math.floor(Math.random() * 1000);
//     setTimeout(() => {
//         img.classList.remove('shake-img');
//     }, random);
// }
