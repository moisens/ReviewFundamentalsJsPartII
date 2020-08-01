import getelement from './getElement.js';
import showDrinks from './presentDrink.js';


const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getelement('.search-form');
const input = getelement('[name="drink"]')

form.addEventListener('keyup',(e) => {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    showDrinks(`${baseURL} ${value}`);
});

