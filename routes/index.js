const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para la página principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Ruta para la página de productos
router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/products.html'));
});

// Ruta para la página de contacto
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;
