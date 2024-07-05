

const images = [
    '/images/cheesecake.jpg',
    '/images/tiramisu.jpg',
    '/images/chocolate_lava_cake.webp',
    '/images/image7.webp',
    '/images/image6.jpeg',
    '/images/image5.webp',
    '/images/image4.jpeg'
    
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('home').style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changeBackgroundImage, 5000);


changeBackgroundImage();

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}


function addToCart(item, price) {
    const cart = getCart();
    cart.push({ item, price });
    saveCart(cart);
    alert(`${item} has been added to your cart.`);
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    if (!cartList || !totalPriceElement) {
        console.error('Element with ID "cart-list" or "total-price" not found.');
        return;
    }

    const cart = getCart();
    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(({ item, price }) => {
        totalPrice += price;

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${item} <span class="badge badge-primary badge-pill">$${price.toFixed(2)}</span>`;
        cartList.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}


function checkout() {
    alert('Checkout is not implemented yet.');
}


document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});
