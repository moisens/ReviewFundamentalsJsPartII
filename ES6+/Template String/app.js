//Templete Strings/Litterals
//``backticks

console.log('---template string---');
const name = 'Helene';
const lastName = 'Magnus';
const age = 100;

const phrase = 'My full name is ' + name + ' ' + lastName + ' ' + 'and I am' + ' ' + age + ' ' + 'years old';
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'am ${age * 2} years old`;
console.log(phrase);
console.log(phrase2);


console.log('-----template string---Html-----');

const person = {
    name: 'Helene',
    job: 'Adventurer, Scientist, hero',
    hobbies: ['fighting vilains', 'make trip', 'saving people']

}

const result = document.getElementById('result');
// result.innerHTML = '<h2>' + person.name +'</h2>' +
//                     '<p>' + person.job + '</p>';

result.innerHTML = `<h2>${person.name}</h2> 
                    <p>${person.job}</p> 
                    <ul>${person.hobbies.map(item =>{
                        return `<li>${item}</li>`;
                    }).join('')}</ul>
                    
                    `;


console.log('------stagging----template--litteral-----');
//Running template litteral trough a function
const author = 'Some Author';
const statement = 'Some Statement';

const quote = highlight `Here is the ${statement} by ${author} and it couldn't be more true`;

console.log(quote);
result.innerHTML += quote;


function highlight(text, ...vars){
    const theText = text.map((item, index) =>{
        return `${item}<strong class="blue">${vars[index] || ''}</strong>`;
    });
    return theText.join('');
}
