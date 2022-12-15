const Cadastro = require('../models/CadastroModel');

exports.index = async (req, res) => {
 

    const cadastradas = await Cadastro.buscaCadastro()
    res.render('index', { cadastradas });             //uso do views .render() e tambem o cadastras do model que lista todos na BD
}

// aqui ta renderizando a pagina home, com as pesquisas
