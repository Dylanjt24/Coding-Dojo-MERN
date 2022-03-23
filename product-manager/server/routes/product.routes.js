const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.allProducts);
    app.post('/api/products/new', ProductController.createProduct);
}