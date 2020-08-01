import fetchDrinks from './fetchDrink.js';
import displayDrinks from './DisplayDrink.js';



const showDrinks = async (url) => {
    console.log(url);
    //fetch drinks
    const data = await fetchDrinks(url);
    

    //display drinks
    const section = await displayDrinks(data);
    console.log(section);

}

export default showDrinks;