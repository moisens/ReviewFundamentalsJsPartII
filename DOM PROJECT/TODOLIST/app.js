// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);
//clear item
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const groceryValue = grocery.value;
    const id = new Date().getTime().toString();
    
    //if val is true && editFlag === false
    if(groceryValue && !editFlag){
        const article = document.createElement('article');
        article.classList.add('grocery-item');
        //createAttribute
        const attr = document.createAttribute('data-id');
        attr.value = id;
        //setAttributeNode
        article.setAttributeNode(attr);
        article.innerHTML = ` <p class="title">${groceryValue}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
             <i class="fas fa-trash"></i>
         </button>
        </div>`;
        //At this time, we have access to the delete & edit btn
        const deleteBtn = article.querySelector('.delete-btn');
        const editBtn = article.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        
        //append article to the list
        list.appendChild(article);
        //display alert message
        displayAlert('The item has been added to the list', 'success');
        //show container
        container.classList.add('show-container');
        //add to LocalStorage
        //addToLocalStorage(id, groceryValue);
        //set back to default
        setBackToDefault();

    }else if(groceryValue && editFlag){
        editElement.innerHTML  = groceryValue;
        displayAlert('Item edited', 'success');
        //edit Local Storage
        editLocalStorage(editId, value);
        setBackToDefault();
    }else{
        displayAlert('The input must be filled.', 'danger');
    }
}

//display alert message
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}

//Clear Items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach((item) =>{
            list.removeChild(item);
        });
    }
    //hide the clear btn
    container.classList.remove('show-container');
    displayAlert('items were successfully cleared', 'success');
    //set back to dedault
    setBackToDefault();
    //localStorage.removeItem('list');
}


//*******DELETE FUNCTION******
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item successfully deleted', 'success');
    setBackToDefault();
    //remove from local storage
    //removeFromLocalStorage(id);
    
}

//********EDIT FUNCTION
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}

//******SET BACK TO DEFAULT******
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){//verif la value
    
}

function removeFromLocalStorage(id){
    
}

function editLocalStorage(editId, value){
    
}



// ****** SETUP ITEMS **********