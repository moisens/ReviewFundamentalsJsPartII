//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart-btn');
const clearCartBtn = document.querySelector('.clear-btn');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDom = document.querySelector('.products-center');
//cart
let cart = [];

//getting the product
class Products{
    async getProduct(){
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
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article>`;
        });
        productDom.innerHTML = result;
    };

}

//local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }

}

document.addEventListener('DOMContentLoaded', () => {
    //create new instance of class UI
    const ui = new UI();
    //create new instance of Product
    const products = new Products();

    //get all products
    products.getProduct()
    .then((products) => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    });
    
});





