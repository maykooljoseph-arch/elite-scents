

const jwt = require('jsonwebtoken');

// Clave secreta para firmar los tokens 
const SECRET = 'elite_scents_secret_2026';

function verificarToken(req, res, next) {
    // El token viene en el header Authorization
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No autorizado. Token requerido.' });
    }

    // El formato es Bearer <token>
    const token = authHeader.replace('Bearer ', '');

    try {
        // Verificar y decodificar el token
        const datos = jwt.verify(token, SECRET);
        req.user = datos; // Guardar datos del usuario en el request
        next(); // Continuar con la siguiente función
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido o expirado.' });
    }
}

module.exports = { verificarToken, SECRET };
