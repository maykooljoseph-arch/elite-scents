
// Lee los productos de data.js y los inserta en SQLite

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { initDB, getDB, guardarDB } = require('./database');

async function seed() {
    console.log('Iniciando seed de la base de datos...');

    // Inicia la base de datos
    await initDB();
    const db = getDB();

    // crea usuario admin
    const existingAdmin = db.exec("SELECT * FROM users WHERE username = 'admin'");

    if (existingAdmin.length === 0 || existingAdmin[0].values.length === 0) {
        const adminPassword = bcrypt.hashSync('admin123', 10);
        db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['admin', adminPassword]);
        guardarDB();
        console.log('Usuario admin creado. (usuario: admin, contraseña: admin123)');
    } else {
        console.log('Usuario admin ya existe.');
    }

    // Cargar productos desde data.js 
    const dataPath = path.join(__dirname, '..', 'index.html', 'data.js');
    let dataContent = fs.readFileSync(dataPath, 'utf8');

    // Extraer el array de productos del archivo data.js
    // Reemplazamos "const products =" por nada y quitamos el punto y coma final
    dataContent = dataContent.replace(/const\s+products\s*=\s*/, '');
    const products = eval(dataContent.substring(0, dataContent.lastIndexOf(';')));

    // Verificar si ya hay productos en la base de datos
    const countResult = db.exec('SELECT COUNT(*) as count FROM products');
    const productCount = countResult[0].values[0][0];

    if (productCount > 0) {
        console.log('Ya hay ' + productCount + ' productos en la base de datos.');
        console.log('Si quieres reiniciar, borra el archivo elite_scents.db y ejecuta este script de nuevo.');
    } else {
        // Insertar todos los productos
        const stmt = db.prepare('INSERT INTO products (name, price, image, category) VALUES (?, ?, ?, ?)');

        for (const p of products) {
            stmt.run([p.name, p.price, p.image, p.category]);
        }
        stmt.free();

        guardarDB();
        console.log('Se insertaron ' + products.length + ' productos en la base de datos.');
    }

    console.log('Seed completado!');
}

seed().catch(err => {
    console.error('Error en el seed:', err);
});
