// rutas para autenyticar
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDB } = require('../database');
const { SECRET } = require('../middleware/auth');


router.post('/login', (req, res) => {
    try {
        const db = getDB();
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' });
        }

        // Buscar el usuario
        const result = db.exec('SELECT * FROM users WHERE username = ?', [username]);

        if (result.length === 0 || result[0].values.length === 0) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }

        const columns = result[0].columns;
        const row = result[0].values[0];
        const user = {};
        columns.forEach((col, i) => { user[col] = row[i]; });

        // Comparar la contraseña
        const passwordValido = bcrypt.compareSync(password, user.password);

        if (!passwordValido) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }

        // Crear el token que dura 24 horas
        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login exitoso',
            token: token,
            username: user.username
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

//  Verificar si el token es válido
router.get('/verify', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ valid: false });
    }

    try {
        const token = authHeader.replace('Bearer ', '');
        const datos = jwt.verify(token, SECRET);
        res.json({ valid: true, username: datos.username });
    } catch (error) {
        res.status(401).json({ valid: false });
    }
});

module.exports = router;
