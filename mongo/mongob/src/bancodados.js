import mongoose from "mongoose";

const EsquemaUsuario = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    nascimento: Date
})

const usuario = mongoose.model("usuario", EsquemaUsuario)

export {usuario}