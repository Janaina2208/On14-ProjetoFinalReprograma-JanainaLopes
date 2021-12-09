const mongoose = require('mongoose')
const materialSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    Finalizado: {
        type: Boolean,
        required: true
    },
    // Material doação: Boolean por itens, não posso colocar tipo uma divisão???????<<<<<<<<<<<<<<<<<<<<<
    Argamassas: {
        type: Boolean,
        default: false
    },
    Cimento: {
        type: Boolean,
        default: false
    },
    Fixadores: {
        type: Boolean,
        default: false
    },
    Madeiramento: {
        type: Boolean,
        default: false
    },
    materiaisHidraulicos: {
        type: Boolean,
        default: false
    },
    materiaisEletricos: {
        type: Boolean,
        default: false
    },
    pisosERevestimentos: {
        type: Boolean,
        default: false
    },
    Telha: {
        type: Boolean,
        default: false
    },
    Tijolo: {
        type: Boolean,
        default: false
    },
    Tinta: {
        type: Boolean,
        default: false
    },
    outrosMateriais: {
        type: [String],
        default: false
    },
    quantidadeDeMaterial: {
        type: [String],
        default: true
    },
    bairroRetirada: {
        type: String,
        required: true
    },
    Nome: {
        type: String,
        required: true,
        unique: true
    },
    Telefone: {
        type: String,
        required: true,
        unique: true
    },
    criadoEm:{
        type: Date,
        default: new Date()
    }
})

const NossaReforma = mongoose.model("NossaReforma", materialSchema)

module.exports = NossaReforma

// Finalizado: boolean,
// Material doação:boolean por itens,
// * Argamassas: Boolean,
// * Cimento: Boolean,
// * Fixadores: Boolean,
// * Madeiramento: Boolean,
// * Materiais hidráulicos: Boolean,
// * Materiais elétricos: Boolean,
// * Pisos e revestimentos: Boolean,
// * Telha: Boolean,
// * Tijolo: Boolean,
// * Tinta: Boolean,
// * Outros Materiais: [String]
// Quantidade de material: String
// Bairro para retirada: String
// Nome: String
// Telefone: String
