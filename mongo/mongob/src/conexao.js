import mongoose from "mongoose";

const endereco = "mongodb+srv://LucacsCoutinho:LreO1tH5Cg2jf6SF@mon05.gp2gl4l.mongodb.net/?retryWrites=true&w=majority&appName=Mon05"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }

await mongoose.connect(endereco, configuracao)
console.log("CONECTADO COM O BANCO DE DADOS!")

mongoose.Promise = global.Promise