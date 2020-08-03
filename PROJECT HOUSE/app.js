//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDom = document.querySelector('.products-center');


//cart
let cart = [];
//btns
let buttonsDom = [];



//getting the product
class Products{
    async getProducts(){
        let result = await fetch('products.json');
        try {
            let data = await result.json();
            let products = data.items;

            products = products.map((item) => {
                const {title, price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                
                return {title, price, id, image}
            });
            return products;

        } catch (error) {
            console.log(error);
        }
    }
}



//display products
class UI{
    displayProducts(products){
        let result = '';
        products.forEach((product) => {
            result += `
            <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" class="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to cart
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article>`;
        });
        productDom.innerHTML = result;
    };

    getBagButtons(){
        const buttons = [...document.querySelectorAll('.bag-btn')];
        buttonsDom = buttons;

        buttons.forEach((button) => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart){
                button.innerText = 'In Cart';
                button.disabled = true;
            }
            button.addEventListener('click', (e) => {
                e.target.innerText = 'In Cart';
                e.target.disabled = true;
                //get product from products
                let cartItem = {...Storage.getProduct(id), amount: 1};
                

                //add product to the cart
                cart = [...cart, cartItem];

                //save cart in local storage
                Storage.saveCart(cart);

                //set cart values
                this.setCartValues(cart);

                //display cart item
                this.addCartItem(cartItem);

                //show the cart
                this.showCart();
            });
            

        });
    }

    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item =>{
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    //display cart item
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        console.log(div);
        div.innerHTML = `<img src=${item.image} alt="product">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>`;
        cartContent.appendChild(div);
    }

    //show cart
    showCart(){
        cartOverlay.classList.add('transparentBcg');
        cartDom.classList.add('showCart');

    }

    //set up app
      setupAPP(){
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
      }

      //populate Cart method
      populateCart(cart){
        cart.forEach((item) => {
            this.addCartItem(item);
        });

      }

      //hide cart
      hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        cartDom.classList.remove('showCart');
      }

      //cartLogic
      cartLogic(){
          //clear cart Btn
          clearCartBtn.addEventListener('click', ()=> {
            this.clearCart();
          });
          //Cart functionality
          cartContent.addEventListener('click', (e) => {
              if(e.target.classList.contains('remove-item')){
                  let removeItem = e.target;
                  let id = removeItem.dataset.id;
                  //removing from the DOM
                  cartContent.removeChild(removeItem.parentElement.parentElement);
                  this.removeItem(id);//remove from the cart

              }else if(e.target.classList.contains('fa-chevron-up')){
                let addAmount = e.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                //update the local storage
                Storage.saveCart(cart);
                //increasing the amount and total
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;

              }else if(e.target.classList.contains('fa-chevron-down')){
                let lowerAmount = e.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;

                if(tempItem.amount  > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
              }

          });
      }
      
      //Clear Cart method
      clearCart(){
          let cartItems = cart.map((item) => {
              return item.id;
          });
          cartItems.forEach((id) => {
              this.removeItem(id);
          });
          console.log(cartContent.children);
          //remove item from the dom
          while(cartContent.children.length > 0){
              cartContent.removeChild(cartContent.children[0])
          }
          this.hideCart();
          
      }

      //remove Item from the cart
      removeItem(id){
          cart = cart.filter(item => item.id !== id);
          this.setCartValues(cart);
          Storage.saveCart(cart);
          let button = this.getSingleButton(id);
          button.disabled = false;
          button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
        
      }
      getSingleButton(id){
          return buttonsDom.find(button => button.dataset.id === id);
      }
    

}



//local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }

    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }

    static saveCart(cart){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart(){
        return localStorage.getItem('cart') 
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
    }
    

}



document.addEventListener('DOMContentLoaded', () => {
    //create new instance of class UI
    const ui = new UI();
    //create new instance of Product
    const products = new Products();

    //set up Application
    ui.setupAPP();

    //get all products
    products.getProducts()
    .then((products) => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    })
    .then(() => {
        ui.getBagButtons();
        ui.cartLogic();
    })
    
});





