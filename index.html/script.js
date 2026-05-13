const productsContainer = document.querySelector('.products');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.menu');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';
let searchTerm = '';
let products = []; // Ahora se carga desde la API


function formatPrice(priceInput) {
    if (!priceInput) return '$0';
    const numberString = String(priceInput).replace(/\D/g, '');
    const number = parseInt(numberString, 10);
    if (isNaN(number)) return '$0';

    return '$' + number.toLocaleString('es-CO');
}

// subir productos desde la api
async function cargarProductos() {
    try {
        const response = await fetch('https://elite-scentselite-scents-api.onrender.com/api/products');
        products = await response.json();
        console.log('Productos cargados desde la API:', products.length);
    } catch (error) {
        console.error('Error cargando productos desde la API:', error);
        products = [];
    }
}

function renderProducts() {
    if (!productsContainer) return;
    productsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => {
        const matchCategory = currentCategory === 'all' || product.category === currentCategory;
        const productName = product.name ? product.name.toLowerCase() : '';
        const matchSearch = productName.includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p style="text-align:center; color:#888; grid-column: 1/-1;">No se encontraron perfumes.</p>';
        return;
    }

    filteredProducts.forEach((product, index) => {
        const productArticle = document.createElement('article');
        productArticle.classList.add('product', 'reveal');
        productArticle.style.transitionDelay = `${index * 50}ms`;
        productArticle.style.display = 'flex';
        productArticle.style.flexDirection = 'column';
        productArticle.style.height = '100%';
        productArticle.style.position = 'relative';

        const formattedPrice = formatPrice(product.price);
        const detailLink = `product.html?id=${product.id}`;

        productArticle.innerHTML = `
            <a href="${detailLink}" style="text-decoration:none; color:inherit; flex-grow: 1; display: flex; flex-direction: column;">
                <div class="product-img"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
                <h3 style="flex-grow: 1;">${product.name}</h3>
                <p class="price" style="margin-top: auto; font-size: 1.2rem; margin-bottom: 15px;">${formattedPrice}</p>
            </a>
            <button onclick="addToCart(${product.id})" class="product-btn" style="margin-top: auto;">Añadir al Carrito</button>
        `;
        productsContainer.appendChild(productArticle);
    });

    observeElements();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderProducts();
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.filter;
        renderProducts();
    });
});

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', async () => {
    // Cargar productos desde la API
    await cargarProductos();

    if (document.querySelector('.products')) {
        renderProducts();
    }
    updateCartUI();
});


// carrito
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('elite_cart')) || [];
} catch (e) {
    cart = [];
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartUI();
        toggleCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('elite_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.length;

    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');

    if (itemsContainer && totalEl) {
        itemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const rawPrice = String(item.price).replace(/\D/g, '');
            const price = parseInt(rawPrice, 10) || 0;
            total += price;

            const displayPrice = formatPrice(item.price);

            const itemEl = document.createElement('div');
            itemEl.classList.add('cart-item');
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${displayPrice}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            `;
            itemsContainer.appendChild(itemEl);
        });

        totalEl.textContent = '$' + total.toLocaleString('es-CO');
    }
}


function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    // Mostrar el modal de checkout
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        // Si no existe el modal, usar el checkout por WhatsApp directo
        checkoutWhatsApp();
    }
}

// Enviar pedido al backend y luego a WhatsApp
async function enviarPedido() {
    const nombre = document.getElementById('checkout-name').value;
    const telefono = document.getElementById('checkout-phone').value;
    const direccion = document.getElementById('checkout-address').value;
    const ciudad = document.getElementById('checkout-city').value;

    if (!nombre || !telefono || !direccion || !ciudad) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Calcular total
    let total = 0;
    cart.forEach(item => {
        const rawPrice = String(item.price).replace(/\D/g, '');
        total += parseInt(rawPrice, 10) || 0;
    });
    const displayTotal = '$' + total.toLocaleString('es-CO');

    // Guardar pedido en el backend
    try {
        await fetch('https://elite-scentselite-scents-api.onrender.com/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customer_name: nombre,
                customer_phone: telefono,
                customer_address: direccion,
                customer_city: ciudad,
                items: cart.map(item => ({ name: item.name, price: item.price })),
                total: displayTotal
            })
        });
        console.log('Pedido guardado en el servidor');
    } catch (error) {
        console.error('Error guardando pedido:', error);
    }

    // Enviar a WhatsApp
    let message = "Hola Élite Scents, quiero realizar el siguiente pedido:%0A%0A";
    message += `*Nombre:* ${nombre}%0A`;
    message += `*Teléfono:* ${telefono}%0A`;
    message += `*Dirección:* ${direccion}%0A`;
    message += `*Ciudad:* ${ciudad}%0A%0A`;
    message += "*Productos:*%0A";

    cart.forEach(item => {
        const displayPrice = formatPrice(item.price);
        message += `- ${item.name} (${displayPrice})%0A`;
    });

    message += `%0A*Total: ${displayTotal}*`;

    const url = `https://wa.me/573015521919?text=${message}`;
    window.open(url, '_blank');


    const modal = document.getElementById('checkout-modal');
    if (modal) modal.style.display = 'none';
    clearCart();
    toggleCart();
}

function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.style.display = 'none';
}

// Checkout directo a WhatsApp 
function checkoutWhatsApp() {
    let message = "Hola Élite Scents, quiero realizar el siguiente pedido:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        const rawPrice = String(item.price).replace(/\D/g, '');
        const price = parseInt(rawPrice, 10) || 0;
        total += price;
        const displayPrice = formatPrice(item.price);
        message += `- ${item.name} (${displayPrice})%0A`;
    });

    const displayTotal = '$' + total.toLocaleString('es-CO');
    message += `%0A*Total: ${displayTotal}*`;
    message += "%0A%0A¿Cuáles son los métodos de pago?";

    const url = `https://wa.me/573015521919?text=${message}`;
    window.open(url, '_blank');
}




window.onclick = function (event) {
    const checkoutModal = document.getElementById('checkout-modal');
    if (event.target == checkoutModal) {
        cerrarCheckout();
    }
}

function generateDescription(product) {
    const name = product.name.toLowerCase();
    let desc = `Descubre la esencia de ${product.name}. `;
    if (name.includes('lattafa') || name.includes('armaf') || name.includes('árabe')) { desc += "Joya de la perfumería árabe, intensa y duradera."; }
    else if (name.includes('boss')) { desc += "Elegancia y modernidad para proyectar confianza."; }
    else if (name.includes('carolina')) { desc += "Sofisticación pura, envolvente y seductora."; }
    else if (product.category === 'Hombre') { desc += "Notas masculinas con carácter fuerte."; }
    else { desc += "Fragancia femenina, delicada y encantadora."; }
    return desc + " Calidad Garantizada.";
}


// 
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}
