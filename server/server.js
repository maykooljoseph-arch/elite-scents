const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDB } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/stats', require('./routes/stats')); 
app.use('/api/auth', require('./routes/auth'));

async function start() {
    await initDB();
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));
    }
}

start();

module.exports = app;