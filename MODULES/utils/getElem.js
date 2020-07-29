function getElement(select){
    const element = document.querySelector(select);
    if(element){
        return element;
    }else{
        throw Error('you did not select element');  
    }
}

export default getElement;