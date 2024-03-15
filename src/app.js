const express = require('express');
const ProductManager = require('./db/productManager.js');

const app = express();
const PUERTO = 8080; 

const productManager = new ProductManager('./products.json');


app.get('/products', (req, res) => {
    const limit = pareseInt(req.query.limit);

    let products = productManager.getProducts();

    if (limit) {
        products = products.slice(0, parseInt(limit));
    }
    res.json(products);
});


app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = productManager.getProductById(productId);

    if (product) {
        res.json(product);
    } else {
        console.log("Producto no encontrado");
    }
});


app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto http://localhost:${PUERTO}`);
});