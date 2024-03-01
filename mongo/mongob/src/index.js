import express from "express";
import cors from "cors";

const servidor = express()

servidor.use(cors())
servidor.use(express.json())

servidor.get("/", function(requisicao, resposta) {
    resposta.json({ mensagem: "ROTA / GET" })
})

servidor.post("/", function(requisicao, resposta){
    resposta.json({ mensagem: "ROTA / POST" })
})

servidor.listen(4000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
    console.log("http://localhost:4000/")
})