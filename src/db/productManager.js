class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = require(filePath);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id == id);
    }
}

module.exports = ProductManager;