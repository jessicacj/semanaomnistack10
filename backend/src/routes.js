const { Router } = require("express");
const devController = require('./controllers/devController');
const searchController = require('./controllers/searchController');

const routes = Router();

// Rota para listagem de usuários
routes.get('/listar', devController.index);
// Rota para cadastro de usuários
routes.post('/devs', devController.store);
// Rota para buscar usuário
routes.get('/buscar', searchController.index);


module.exports = routes;
