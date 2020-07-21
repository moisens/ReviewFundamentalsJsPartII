let counter = document.getElementById('value');
let btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) =>{
    btn.addEventListener('click', changeCounter)

});

function changeCounter(e){
    if(e.currentTarget.classList.contains('decrease')){
        count--
    }else if(e.currentTarget.classList.contains('increase')){
        count++
    }else if(e.currentTarget.classList.contains('reset')){
        count = 0;
    }
    

    if(count > 0){
        counter.style.color = 'green';
    }
    if(count < 0){
        counter.style.color = 'red';
    }
    if(count === 0){
        counter.style.color = '#000'
    }


    counter.textContent = count;

    

    
}



