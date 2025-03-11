// Product Database
const products = [
    {
        id: 1,
        name: "Laptop Pro X",
        price: 1299.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(9).jpeg",
        category: "laptops",
        description: "Powerful laptop for professionals"
    },
    {
        id: 2,
        name: "Smartphone Ultra",
        price: 899.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(8).jpeg",
        category: "phones",
        description: "Latest smartphone with amazing features"
    },
    // A 
    
    {
        id: 1,
        name: "MacBook Pro M2",
        price: 1499.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(7).jpeg",
        category: "laptops",
        description: "Latest MacBook Pro with M2 chip, 14-inch display",
        stock: 15,
        rating: 4.8
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: 999.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(11).jpeg",
        category: "phones",
        description: "Latest iPhone with A17 Pro chip and advanced camera system",
        stock: 20,
        rating: 4.9
    },
   
    {
        id: 3,
        name: "Sony WH-1000XM4",
        price: 349.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(12).jpeg",
        category: "accessories",
        description: "Premium noise-canceling wireless headphones",
        stock: 30,
        rating: 4.7
    },
    {
        id: 4,
        name: "Dell XPS 15",
        price: 1299.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(13).jpeg",
        category: "laptops",
        description: "Powerful laptop with 4K display and RTX graphics",
        stock: 12,
        rating: 4.6
    },

    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        price: 1199.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(14).jpeg",
        category: "phones",
        description: "Advanced Android smartphone with S-Pen support",
        stock: 25,
        rating: 4.8
    },
    {
        id: 6,
        name: "iPad Pro 12.9",
        price: 1099.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(15).jpeg",
        category: "tablets",
        description: "Large display tablet with M2 chip",
        stock: 18,
        rating: 4.7
    },

    {
        id: 7,
        name: "AirPods Pro 2",
        price: 249.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(16).jpeg",
        category: "accessories",
        description: "Wireless earbuds with active noise cancellation",
        stock: 40,
        rating: 4.8
    },
    {
        id: 8,
        name: "Gaming PC RTX 4080",
        price: 2499.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(17).jpeg",
        category: "computers",
        description: "High-end gaming PC with latest RTX graphics",
        stock: 8,
        rating: 4.9
    },

    {
        id: 9,
        name: "Microsoft Surface Laptop 5",
        price: 999.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(18).jpeg",
        category: "laptops",
        description: "Sleek and powerful Windows laptop",
        stock: 15,
        rating: 4.5
    },
    {
        id: 10,
        name: "Google Pixel 8 Pro",
        price: 899.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(19).jpeg",
        category: "phones",
        description: "Google flagship with advanced AI features",
        stock: 22,
        rating: 4.7
    },

    {
        id: 11,
        name: "Samsung 49\" Gaming Monitor",
        price: 999.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(20).jpeg",
        category: "accessories",
        description: "Ultra-wide curved gaming monitor",
        stock: 10,
        rating: 4.6
    },
    {
        id: 12,
        name: "ROG Gaming Laptop",
        price: 1799.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(21).jpeg",
        category: "laptops",
        description: "High-performance gaming laptop with RGB",
        stock: 14,
        rating: 4.8
    },

    {
        id: 13,
        name: "Apple Watch Series 9",
        price: 399.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(22).jpeg",
        category: "accessories",
        description: "Latest Apple Watch with health features",
        stock: 35,
        rating: 4.7
    },
    {
        id: 14,
        name: "Sony PS5",
        price: 499.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(23).jpeg",
        category: "gaming",
        description: "Next-gen gaming console",
        stock: 20,
        rating: 4.9
    },

    {
        id: 15,
        name: "Samsung Galaxy Tab S9",
        price: 699.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(24).jpeg",
        category: "tablets",
        description: "Premium Android tablet with S-Pen",
        stock: 16,
        rating: 4.6
    },
    {
        id: 16,
        name: "Mechanical Gaming Keyboard",
        price: 149.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(25).jpeg",
        category: "accessories",
        description: "RGB mechanical keyboard with custom switches",
        stock: 45,
        rating: 4.5
    },

    {
        id: 17,
        name: "4K Webcam",
        price: 199.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(26).jpeg",
        category: "accessories",
        description: "High-quality webcam for streaming",
        stock: 25,
        rating: 4.4
    },
    {
        id: 18,
        name: "Gaming Mouse",
        price: 79.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(27).jpeg",
        category: "accessories",
        description: "High-DPI gaming mouse with programmable buttons",
        stock: 50,
        rating: 4.6
    },

    {
        id: 19,
        name: "External SSD 1TB",
        price: 159.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(28).jpeg",
        category: "accessories",
        description: "Portable SSD with USB-C connection",
        stock: 30,
        rating: 4.7
    },
    {
        id: 20,
        name: "Smart Home Hub",
        price: 129.99,
        image: "file:///C:/Users/ALVIN/Downloads/download%20(29).jpeg",
        category: "accessories",
        description: "Central hub for smart home devices",
        stock: 28,
        rating: 4.5
    }
    
    
    
];

// Cart Array
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initializeStore();
    setupEventListeners();
});

function initializeStore() {
    displayProducts();
    updateCartFromLocalStorage();
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            filterProducts(e.target.dataset.category);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterProducts('all', searchTerm);
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        const cartOverlay = document.getElementById('cartOverlay');
        if (e.target.closest('.cart-btn') || e.target.closest('.cart-content')) return;
        cartOverlay.classList.remove('active');
    });
}

function displayProducts(productsToShow = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category, searchTerm = '') {
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Item added to cart!');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Item removed from cart!');
}

function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    // Implement checkout logic here
    showNotification('Order placed successfully!', 'success');
    cart = [];
    updateCart();
    toggleCart();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function updateCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}