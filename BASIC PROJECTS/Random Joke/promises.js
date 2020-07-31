const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', ()=>{
    getData(URL)
    .then((response) =>{
        displayData(response);
    })
    .catch((error) => {
        console.log(error);
    })
});

function getData(url){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function(){
            if(xhr.readyState !== 4) return;
            if(xhr.status === 200){
               resolve(xhr.responseText);
            }else{
                reject({
                    status: xhr.status,
                    text: xhr.statusText
                })
            }
        }
        xhr.send();

    });
    
}

function displayData(data){
    img.classList.add('shake-img');
    const {value:joke} = JSON.parse(data);
    content.innerHTML = joke;
    const random = Math.floor(Math.random() * 1000);
    setTimeout(() =>{
        img.classList.remove('shake-img');
    }, random);
}
