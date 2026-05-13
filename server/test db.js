const { initDB, getDB } = require('./database');
initDB().then(() => {
    const db = getDB();
    const result = db.exec("SELECT COUNT(*) FROM products");
    console.log('Total products:', JSON.stringify(result));
    const sample = db.exec("SELECT * FROM products LIMIT 2");
    console.log('Sample:', JSON.stringify(sample));
}).catch(e => console.error(e));
