// rutas para pedidos
const express = require('express');
const router = express.Router();
const { getDB, guardarDB } = require('../database');

// Función helper para convertir resultado SQL a array de objetos
function rowsToObjects(result) {
    if (result.length === 0) return [];
    const columns = result[0].columns;
    return result[0].values.map(row => {
        const obj = {};
        columns.forEach((col, i) => { obj[col] = row[i]; });
        return obj;
    });
}

// Crear un nuevo pedido
router.post('/', (req, res) => {
    try {
        const db = getDB();
        const { customer_name, customer_phone, customer_address, customer_city, items, total } = req.body;

        if (!customer_name || !customer_phone || !customer_address || !customer_city || !items || !total) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        db.run(
            'INSERT INTO orders (customer_name, customer_phone, customer_address, customer_city, items, total) VALUES (?, ?, ?, ?, ?, ?)',
            [customer_name, customer_phone, customer_address, customer_city, JSON.stringify(items), total]
        );
        guardarDB();

        const lastId = db.exec('SELECT last_insert_rowid() as id');
        const id = lastId[0].values[0][0];

        res.json({ id, message: 'Pedido creado exitosamente' });
    } catch (error) {
        console.error('Error al crear pedido:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Obtener todos los pedidos
router.get('/', (req, res) => {
    try {
        const db = getDB();
        const result = db.exec('SELECT * FROM orders ORDER BY created_at DESC');
        const pedidos = rowsToObjects(result);

        //  los items de JSON string a array
        pedidos.forEach(pedido => {
            try {
                pedido.items = JSON.parse(pedido.items);
            } catch (e) {
                pedido.items = [];
            }
        });

        res.json(pedidos);
    } catch (error) {
        console.error('Error al obtener pedidos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Cambiar estado de un pedido
router.put('/:id/status', (req, res) => {
    try {
        const db = getDB();
        const { status } = req.body;
        const estadosValidos = ['pendiente', 'confirmado', 'enviado', 'entregado', 'cancelado'];

        if (!estadosValidos.includes(status)) {
            return res.status(400).json({ error: 'Estado no válido' });
        }

        db.run('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id]);
        guardarDB();

        res.json({ message: 'Estado del pedido actualizado' });
    } catch (error) {
        console.error('Error al actualizar estado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Eliminar un pedido
router.delete('/:id', (req, res) => {
    try {
        const db = getDB();
        db.run('DELETE FROM orders WHERE id = ?', [req.params.id]);
        guardarDB();
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
