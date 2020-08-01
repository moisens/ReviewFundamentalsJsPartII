
const fetchDrinks = async (url) => {
    try{
        const response = await fetch(url);//GET IS Set by default with fetch
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default fetchDrinks;