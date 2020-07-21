const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColorHexDec);

function changeColorHexDec(){
    let hexDies = '#';
    for(let i=0; i<6; i++){
        hexDies += hex[randomHexColor()];
        console.log(hexDies);
    }

    document.body.style.backgroundColor = hexDies;
    color.textContent = hexDies;
}

function randomHexColor(){
    return Math.floor(Math.random() * hex.length);
}