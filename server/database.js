const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
let db = null;

async function initDB() {
    if (db) return db;
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db('elite_scents'); 
        console.log('Conectado a MongoDB Atlas');
        return db;
    } catch (error) {
        console.error('Error MongoDB:', error);
        throw error;
    }
}

function getDB() {
    if (!db) throw new Error('DB no inicializada');
    return db;
}

module.exports = { initDB, getDB };