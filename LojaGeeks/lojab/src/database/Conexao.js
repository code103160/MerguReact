import mongoose from "mongoose";
import "dotenv/config"; 

const endereco = process.env.MONGO_URI

const configuracao = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(endereco, configuracao, () => { console.log("CONECTADO COM O BANCO DE DADOS!")})