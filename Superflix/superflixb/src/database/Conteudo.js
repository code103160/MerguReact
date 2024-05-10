import mongoose from "mongoose";
const esquema = new mongoose.Schema({
    capa: String,
    trilha: String,
    titulo: String,
    descricao: String,
    genero: String,
    ano: Number,
    duracao: Number,
    faixa: Number
},
{ collection: "proj07" })

const conteudo = mongoose.model("conteudo", esquema)

export { conteudo }