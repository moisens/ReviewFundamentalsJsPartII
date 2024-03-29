import {showLoading} from './toggleLoading.js'


const fetchDrinks = async (url) => {
    showLoading();
    try{
        const response = await fetch(url);//GET IS Set by default with fetch
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default fetchDrinks;