const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDB, getDB } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..')));
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

async function start() {
    await initDB();
    console.log('Base de datos conectada.');

    app.listen(PORT, '0.0.0.0', () => {
        console.log('   ELITE SCENTS   ');
        console.log('Puerto: ' + PORT);
    });
}

start().catch(err => {
    console.error('Error iniciando el servidor:', err);
});