const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products', ProductController.allProducts);
    app.get('/api/products/:id', ProductController.oneProduct);
    app.post('/api/products/new', ProductController.createProduct);
    app.put('/api/products/:id/edit', ProductController.updateProduct);
    app.delete('/api/products/:id/delete', ProductController.deleteProduct);
}