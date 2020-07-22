//USING SELECTORS INSIDE THE ELEMENT
const questions = document.querySelectorAll('.question');

questions.forEach((question) =>{
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach((item) =>{
            if(item !== question){
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle('show-text');

    });
});





// TRAVERSING THE DOM
// btns = document.querySelectorAll('.question-btn');
// btns.forEach((btn) =>{
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     });
// })