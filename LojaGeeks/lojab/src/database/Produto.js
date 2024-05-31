import mongoose from "mongoose";

const EsquemaProduto = new mongoose.Schema({
    codigo: String, 
    marca: String, 
    modelo: String, 
    preco: Number,
    descricao: String, 
    imagens: [String], 
    promocao: Boolean
},
{
    versionKey: false
})

const produto = mongoose.model("produto", EsquemaProduto)

export { produto }