const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api/authors', AuthorController.allAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.oneAuthor);
    app.put('/api/authors/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteAuthor);
}