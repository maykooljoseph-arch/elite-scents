const express = require('express');
const router = express.Router();
const { getDB } = require('../database');

router.get('/', async (req, res) => {
    try {
        const db = getDB();
        const totalProductos = await db.collection('products').countDocuments();
        const totalPedidos = await db.collection('orders').countDocuments();
        const pedidosPendientes = await db.collection('orders').countDocuments({ status: 'pendiente' });
        const pedidosEntregados = await db.collection('orders').countDocuments({ status: 'entregado' });

        res.json({ totalProductos, totalPedidos, pedidosPendientes, pedidosEntregados });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;