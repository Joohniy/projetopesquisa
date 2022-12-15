const mongoose = require('mongoose');

const EditSchema = new mongoose.Schema({
    situacao: { type: String, required: true },
});

const EditModel = mongoose.model('Edit', EditSchema);

class Edit {
    constructor(body) {
        this.body = body;
        this.situacoes = null;
    }

    async checar() {
        this.situacoes = await EditModel.create({
            situacao: 'teste'
        });
    }

    async mandar() {
        const alteradas = await EditModel.find()
        return alteradas
    }

}
module.exports = Edit