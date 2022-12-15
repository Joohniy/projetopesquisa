const Cadastro = require('../models/CadastroModel');


exports.index = (req, res) => {
    res.render('cadastro', { 
        cadId: {} 
    });
}

exports.register = async (req, res) => {
    const cadastradas = await Cadastro.buscaCadastro()
    const cadastro = new Cadastro(req.body); // instanciando o Model no caso CadastroModel -- req.body para tratar o form
    await cadastro.register(); //chamando o metodo register() que possui o .create() que cria na base de dados    

    if(cadastro.errors.length > 0) {
        req.flash('errors', cadastro.errors)
        req.session.save(() => { res.redirect('/cadastro') })
        return
    }

    req.flash('success', 'Pesquisa registrada')
    req.session.save(() => res.redirect(`/cadastro/${cadastro.cadastradas._id}`))
}

exports.edit = async (req, res) => {
    const user = new Cadastro(req.body)
    const cadId = await user.buscaId(req.params.id)

    res.render('cadastro', { cadId })
}

exports.situacao = async (req, res) => {
    const cadAlterar = new Cadastro(req.body)
    await cadAlterar.edit(req.params.id)

    req.flash('success', 'Situação alterada')
    req.session.save(() => res.redirect(`/cadastro/${cadAlterar.cadastradas._id}`))
}
