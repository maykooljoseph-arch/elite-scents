
const API_URL = '/api';
let token = localStorage.getItem('admin_token') || '';

// se verifica si ya esta logueado
document.addEventListener('DOMContentLoaded', async () => {
    if (token) {
        try {
            const res = await fetch(API_URL + '/auth/verify', {
                headers: { 'Authorization': 'Bearer ' + token }
            });
            const data = await res.json();
            if (data.valid) {
                mostrarPanel(data.username);
                return;
            }
        } catch (e) { /* Token invalido */ }
    }
    // Si no hay token válido, mostrar login
    document.getElementById('login-screen').style.display = 'flex';
});

// login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-user').value;
    const password = document.getElementById('login-pass').value;
    const errorEl = document.getElementById('login-error');

    try {
        const res = await fetch(API_URL + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            token = data.token;
            localStorage.setItem('admin_token', token);
            mostrarPanel(data.username);
        } else {
            errorEl.textContent = data.error || 'Error al iniciar sesión';
        }
    } catch (error) {
        errorEl.textContent = 'Error de conexión con el servidor';
    }
});


function mostrarPanel(username) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'flex';
    document.getElementById('admin-username').textContent = username;
    cargarDashboard();
}

// cerrar sesion
document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('admin_token');
    token = '';
    window.location.reload();
});

// navegacion del sidebar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;


        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');


        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        const targetSection = document.getElementById('section-' + section);
        if (targetSection) targetSection.classList.add('active');
        const title = section === 'dashboard' ? 'Élite Scents' : link.textContent.trim();
        document.getElementById('section-title').textContent = title;


        if (section === 'dashboard') cargarDashboard();
        if (section === 'products') cargarProductos();
        if (section === 'orders') cargarPedidos();
    });
});


async function cargarDashboard() {
    try {
        const res = await fetch(API_URL + '/stats');
        const stats = await res.json();

        if (document.getElementById('stat-products')) document.getElementById('stat-products').textContent = stats.totalProductos;
        if (document.getElementById('stat-orders')) document.getElementById('stat-orders').textContent = stats.totalPedidos;
        // Los otros stats han sido removidos por solicitud del usuario
    } catch (error) {
        console.error('Error cargando stats:', error);
    }
}


async function cargarProductos() {
    try {
        const res = await fetch(API_URL + '/products');
        const products = await res.json();
        const tbody = document.getElementById('products-table-body');
        tbody.innerHTML = '';

        products.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.id}</td>
                <td><img src="../${p.image}" class="product-thumb" alt="${p.name}" onerror="this.src='../logo.png'"></td>
                <td style="font-weight: 500;">${p.name}</td>
                <td style="color: var(--gold);">${p.price}</td>
                <td><span class="badge" style="background: rgba(255,255,255,0.05); color: #ccc;">${p.category}</span></td>
                <td>
                    <button onclick="editarProducto(${p.id})" class="btn-action btn-edit" title="Editar"><i class="fas fa-edit"></i></button>
                    <button onclick="eliminarProducto(${p.id})" class="btn-action btn-delete" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error cargando productos:', error);
    }
}


document.getElementById('btn-add-product').addEventListener('click', () => {
    document.getElementById('modal-product-title').textContent = 'Nuevo Perfume';
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';
    document.getElementById('product-modal').style.display = 'flex';
});


document.getElementById('btn-cancel-product').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});


document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('product-id').value;
    const producto = {
        name: document.getElementById('product-name').value,
        price: document.getElementById('product-price').value,
        image: document.getElementById('product-image').value,
        category: document.getElementById('product-category').value
    };

    try {
        let res;
        if (id) {

            res = await fetch(API_URL + '/products/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(producto)
            });
        } else {

            res = await fetch(API_URL + '/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(producto)
            });
        }

        if (res.ok) {
            document.getElementById('product-modal').style.display = 'none';
            cargarProductos();
        } else {
            alert('Error al guardar el producto');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


async function editarProducto(id) {
    try {
        const res = await fetch(API_URL + '/products/' + id);
        const p = await res.json();

        document.getElementById('modal-product-title').textContent = 'Editar Perfume';
        document.getElementById('product-id').value = p.id;
        document.getElementById('product-name').value = p.name;
        document.getElementById('product-price').value = p.price;
        document.getElementById('product-image').value = p.image;
        document.getElementById('product-category').value = p.category;

        document.getElementById('product-modal').style.display = 'flex';
    } catch (error) {
        console.error('Error al editar:', error);
    }
}


async function eliminarProducto(id) {
    if (!confirm('¿Realmente deseas eliminar este perfume del catálogo?')) return;

    try {
        const res = await fetch(API_URL + '/products/' + id, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (res.ok) {
            cargarProductos();
        } else {
            alert('No se pudo eliminar el producto');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function cargarPedidos() {
    try {
        const res = await fetch(API_URL + '/orders', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const orders = await res.json();
        const tbody = document.getElementById('orders-table-body');
        tbody.innerHTML = '';

        orders.forEach(o => {
            const fecha = new Date(o.created_at).toLocaleDateString();
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>#${o.id}</td>
                <td style="font-weight: 500;">${o.customer_name}</td>
                <td>${o.customer_phone}</td>
                <td>${o.customer_city}</td>
                <td style="color: var(--gold); font-weight: 600;">${o.total}</td>
                <td><span class="badge badge-${o.status}">${o.status}</span></td>
                <td style="font-size: 0.8rem; color: #888;">${fecha}</td>
                <td>
                    <select onchange="cambiarEstado(${o.id}, this.value)" class="status-select" style="background: #222; color: #fff; border: 1px solid #444; padding: 5px; border-radius: 5px;">
                        <option value="pendiente" ${o.status === 'pendiente' ? 'selected' : ''}>Pendiente</option>
                        <option value="confirmado" ${o.status === 'confirmado' ? 'selected' : ''}>Confirmado</option>
                        <option value="enviado" ${o.status === 'enviado' ? 'selected' : ''}>Enviado</option>
                        <option value="entregado" ${o.status === 'entregado' ? 'selected' : ''}>Entregado</option>
                        <option value="cancelado" ${o.status === 'cancelado' ? 'selected' : ''}>Cancelado</option>
                    </select>
                    <button onclick="eliminarPedido(${o.id})" class="btn-action btn-delete" style="margin-left: 10px;" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Error cargando pedidos:', error);
    }
}


async function cambiarEstado(id, nuevoEstado) {
    try {
        await fetch(API_URL + '/orders/' + id + '/status', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ status: nuevoEstado })
        });
        cargarPedidos();
    } catch (error) {
        console.error('Error al cambiar de estado:', error);
    }
}


async function eliminarPedido(id) {
    if (!confirm('¿Deseas eliminar este pedido de la base de datos?')) return;

    try {
        const res = await fetch(API_URL + '/orders/' + id, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (res.ok) {
            cargarPedidos();
        } else {
            alert('No se pudo eliminar el pedido');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
