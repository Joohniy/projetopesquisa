const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
    num: { type: Number, required: true },
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    nprocesso: { type: String, required: false, default: 'Nenhum processo' },
    alter: { type: String, required: true },
    situacao: { type: String, required: false },
    criadoEm: { type: Date, default: Date.now }
})

const CadastroModel = mongoose.model('Cadastro', CadastroSchema);

class Cadastro {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.cadastradas = null;
    }

    valida() {     
        if(!this.body.endereco) {
            this.errors.push('O campo de endereço é obrigatório.')
        }

        if(!this.body.num) {
            this.errors.push('Certifique-se de digitar o nº da pesquisa.')
        }
    }

    async buscaId(id) {
    const user = await CadastroModel.findById(id);
    return user;
    }


    async register() {
        this.valida()
        if(this.errors.length > 0) return;
        this.cadastradas = await CadastroModel.create(this.body) //.create() - cria o this.body na base de dados    
    }

    static async buscaCadastro() {
        const cadastradas = await CadastroModel.find() //.find() busca na base de dados oque foi mandado pra la
            .sort({ criadoEm: -1 });
        return cadastradas;
    }

    async edit(id) {
        this.valida()
        this.cadastradas = await CadastroModel.findByIdAndUpdate(id, this.body, { new: true })
    }
}



module.exports = Cadastro;