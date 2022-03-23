const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products', ProductController.allProducts);
    app.post('/api/products/new', ProductController.createProduct);
}