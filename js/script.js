// import file Storage
import Storage from "./Storage.js";

// Define UI Element
const addToCartBtn = document.querySelector('#product-list')
const cartList = document.querySelector('#cart-list');

// Add Event Listener
addToCartBtn.addEventListener('click', addToCart);
cartList.addEventListener('click', removeItem);
document.addEventListener('DOMContentLoaded', render)


// Add Product in List
function addToCart(e) {
    e.preventDefault()
    if(e.target.hasAttribute('href')) {
        const title = e.target.parentElement.previousElementSibling.textContent;
        const img = e.target.parentElement.parentElement.previousElementSibling.getAttribute('src');
        Storage.addItem({ title, img });
        render();
    }
}

// Remove Items
function removeItem(e) { 
    if(e.target.className == 'btn btn-danger ml-auto') {
        const title = e.target.previousElementSibling.textContent
        const img = e.target.parentElement.firstElementChild.getAttribute('src')
        Storage.removeItem({title, img})
        render()
    }
}

// Display item
function render(e) {
    const list = Storage.getItems();
    let items = ''
    list.forEach(({title, img}) => {
        items += `
        <li class="list-group-item">
            <div class="row align-items-center">
                <img src="${img}" alt="" style="width: 60px; height: 60px;" class="rounded">
                    <p class="lead mb-0 ml-2">${title}</p>
                    <span class="btn btn-danger ml-auto">remove</span>
            </div>
        </li>
        `
    })

    cartList.innerHTML = items
}