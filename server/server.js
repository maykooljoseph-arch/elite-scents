const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDB, getDB } = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '..', 'index.html')));


app.use('/admin', express.static(path.join(__dirname, 'admin')));

const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');

app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/auth', authRoutes);


app.get('/api/stats', (req, res) => {
    try {
        const db = getDB();

        const totalProductos = db.exec('SELECT COUNT(*) FROM products')[0].values[0][0];
        const totalPedidos = db.exec('SELECT COUNT(*) FROM orders')[0].values[0][0];

        const pendientesResult = db.exec("SELECT COUNT(*) FROM orders WHERE status = 'pendiente'");
        const pedidosPendientes = pendientesResult[0].values[0][0];

        const entregadosResult = db.exec("SELECT COUNT(*) FROM orders WHERE status = 'entregado'");
        const pedidosEntregados = entregadosResult[0].values[0][0];

        res.json({
            totalProductos,
            totalPedidos,
            pedidosPendientes,
            pedidosEntregados
        });
    } catch (error) {
        console.error('Error en estadísticas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// iniciar server
async function start() {

    await initDB();
    console.log('Base de datos conectada.');

    app.listen(PORT, () => {

        console.log('   ELITE SCENTS   ');
        console.log('Tienda:  http://localhost:' + PORT);
        console.log('Admin:   http://localhost:' + PORT + '/admin');
        console.log('API:     http://localhost:' + PORT + '/api/products');

    });
}

start().catch(err => {
    console.error('Error iniciando el servidor:', err);
});
