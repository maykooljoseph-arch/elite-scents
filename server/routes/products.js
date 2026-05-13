const express = require('express');
const router = express.Router();
const { getDB } = require('../database');
const { ObjectId } = require('mongodb'); // Necesario para buscar por ID

// Obtener todos los productos con filtros opcionales
router.get('/', async (req, res) => {
    try {
        const db = getDB();
        const { category, search } = req.query;

        let query = {};

        // Filtro de categoría
        if (category && category !== 'all') {
            query.category = category;
        }

        // Filtro de búsqueda (Buscador)
        if (search) {
            query.name = { $regex: search, $options: 'i' }; // 'i' es para que no importe mayúsculas/minúsculas
        }

        const productos = await db.collection('products').find(query).toArray();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Obtener un producto por su id
router.get('/:id', async (req, res) => {
    try {
        const db = getDB();
        const producto = await db.collection('products').findOne({ _id: new ObjectId(req.params.id) });

        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(producto);
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ error: 'ID no válido o error de servidor' });
    }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const db = getDB();
        const { name, price, image, category } = req.body;

        if (!name || !price || !image || !category) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevoProducto = { name, price: Number(price), image, category };
        const result = await db.collection('products').insertOne(nuevoProducto);

        res.json({ 
            _id: result.insertedId, 
            ...nuevoProducto, 
            message: 'Producto creado exitosamente' 
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const db = getDB();
        const { name, price, image, category } = req.body;

        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { name, price: Number(price), image, category } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const db = getDB();

        const result = await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;