import fetchDrinks from './fetchDrink.js';
import displayDrinks from './DisplayDrink.js';
import setDrink from './setDrink.js';


const showDrinks = async (url) => {
    console.log(url);
    //fetch drinks
    const data = await fetchDrinks(url);
    

    //display drinks
    const section = await displayDrinks(data);
    if(section){
        setDrink(section);
    }

}

export default showDrinks;