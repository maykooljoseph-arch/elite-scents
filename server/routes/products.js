const express = require('express');
const router = express.Router();
const { getDB } = require('../database');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    try {
        const db = getDB();
        const { category, search } = req.query;
        let query = {};

        if (category && category !== 'all') query.category = category;
        if (search) query.name = { $regex: search, $options: 'i' };

        const productos = await db.collection('products').find(query).toArray();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const db = getDB();
        const producto = await db.collection('products').findOne({ _id: new ObjectId(req.params.id) });
        if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const db = getDB();
        const { name, price, image, category } = req.body;
        const result = await db.collection('products').insertOne({ name, price: Number(price), image, category });
        res.json({ _id: result.insertedId, message: 'Creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const db = getDB();
        await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });
        res.json({ message: 'Eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;