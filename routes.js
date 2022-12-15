const express = require('express');
const route = express.Router();

const home = require('./src/controllers/homeControllers');
const cadastro = require('./src/controllers/cadastroController')


//rotas homepag
route.get('/', home.index);

//rotas cadastro das pesquisas
route.get('/cadastro', cadastro.index)
route.post('/cadastro/register', cadastro.register)
route.get('/cadastro/:id', cadastro.edit)
route.post('/cadastro/edit/:id', cadastro.situacao)








module.exports = route;



