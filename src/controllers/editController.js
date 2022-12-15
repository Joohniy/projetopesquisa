const Edit = require('../models/EditModel');
const Cadastro = require('../models/CadastroModel');

exports.index = async (req, res) => {
    const cadastradas = await Cadastro.buscaCadastro()
    res.render('edit', { cadastradas });
}