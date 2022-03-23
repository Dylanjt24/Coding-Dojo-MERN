const { Product } = require('../models/product.model');

module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

// module.exports.updateProduct = (req, res) => {
//     Product.findOneAndUpdate(
//         {_id: req.params.id},
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedProduct => res.json(updatedProduct))
//         .catch(err => res.status(400).json(err))
// }

// module.exports.deleteProduct = (req, res) => {
//     Product.deleteOne({_id: req.params.id})
//         .then(response => res.json(response))
//         .catch(err => res.status(400).json(err))
// }