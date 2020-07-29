//Modules ES6
//global name space / hard to navigate

import {random, people} from './utils/data.js'
import showPeople from './utils/showPeople.js';
import getElement from './utils/getElem.js';

const container = getElement('.container');
const btn = getElement('.btn');
//const container1 = getElement('.container1');

btn.addEventListener('click', () => {
    showPeople(people);
    container.innerHTML = showPeople(people);
});







