import express from "express";
import cors from "cors";
import "./conexao.js";
import { usuario } from "./bancodados.js";

const servidor = express()

servidor.use(cors())
servidor.use(express.json())

servidor.get("/", async function(requisicao, resposta) {
    const resultados = await usuario.find()
    resposta.status(200).json(resultados)
})

servidor.post("/", async function(requisicao, resposta){
    try {
        const novoUsuario = new usuario(requisicao.body)
        const resultado = await novoUsuario.save()
        resposta.status(201).json(resultado)
    }
    catch(erro){
        console.log(erro.message)
        resposta.sendStatus(500)
    }
})

servidor.listen(4000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
    console.log("http://localhost:4000/")
})