const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log(this);
    setTimeout(() => {
        this.style.color = '#000';
    }, 2000);
});
//If we use a fat arr function on the same event, it'll throw an error
//because this in a fat arr func refers to the window object. In this case, better to use regular function
//but if we add in the event a method like setTimeout, reg func will throw an err, fat arr func can solve the problem



