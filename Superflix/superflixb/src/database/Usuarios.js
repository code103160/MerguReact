import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    email: String,
    senha: String
}, 
{collection: "Usuarios" })

const usuario = mongoose.model("usuario", esquema)

export { usuario }