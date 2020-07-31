import getElement from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';


const btn = getElement('.btn');

const showUser = async () => {
    //get user from api
    const person = await getUser();
    console.log(person);
    
    //display User
    displayUser(person);
}

//Listen to Events
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
