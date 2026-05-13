// rutas para productos
const express = require('express');
const router = express.Router();
const { getDB, guardarDB } = require('../database');

// Obtener todos los productos con filtros opcionales
router.get('/', (req, res) => {
    try {
        const db = getDB();
        const { category, search } = req.query;

        let sql = 'SELECT * FROM products';
        let condiciones = [];
        let params = [];

        if (category && category !== 'all') {
            condiciones.push('category = ?');
            params.push(category);
        }

        if (search) {
            condiciones.push('name LIKE ?');
            params.push('%' + search + '%');
        }

        if (condiciones.length > 0) {
            sql += ' WHERE ' + condiciones.join(' AND ');
        }

        const result = db.exec(sql, params);

        if (result.length === 0) {
            return res.json([]);
        }

        //  resultado a array de objetos
        const columns = result[0].columns;
        const productos = result[0].values.map(row => {
            const obj = {};
            columns.forEach((col, i) => { obj[col] = row[i]; });
            return obj;
        });

        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//  Obtener un producto por su id
router.get('/:id', (req, res) => {
    try {
        const db = getDB();
        const result = db.exec('SELECT * FROM products WHERE id = ?', [req.params.id]);

        if (result.length === 0 || result[0].values.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        const columns = result[0].columns;
        const row = result[0].values[0];
        const producto = {};
        columns.forEach((col, i) => { producto[col] = row[i]; });

        res.json(producto);
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//  Crear un nuevo producto
router.post('/', (req, res) => {
    try {
        const db = getDB();
        const { name, price, image, category } = req.body;

        if (!name || !price || !image || !category) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        db.run('INSERT INTO products (name, price, image, category) VALUES (?, ?, ?, ?)', [name, price, image, category]);
        guardarDB();

        // Obtener el id del producto recién creado
        const lastId = db.exec('SELECT last_insert_rowid() as id');
        const id = lastId[0].values[0][0];

        res.json({ id, name, price, image, category, message: 'Producto creado exitosamente' });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Actualizar un producto
router.put('/:id', (req, res) => {
    try {
        const db = getDB();
        const { name, price, image, category } = req.body;

        const existe = db.exec('SELECT id FROM products WHERE id = ?', [req.params.id]);
        if (existe.length === 0 || existe[0].values.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        db.run('UPDATE products SET name = ?, price = ?, image = ?, category = ? WHERE id = ?',
            [name, price, image, category, req.params.id]);
        guardarDB();

        res.json({ message: 'Producto actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//  Eliminar un producto
router.delete('/:id', (req, res) => {
    try {
        const db = getDB();

        const existe = db.exec('SELECT id FROM products WHERE id = ?', [req.params.id]);
        if (existe.length === 0 || existe[0].values.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        db.run('DELETE FROM products WHERE id = ?', [req.params.id]);
        guardarDB();

        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
