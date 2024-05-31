import express from "express";

const rotas = express.Router()

rotas.get("/produtos", async function(requisicao, resposta) {
    resposta.sendStatus(200)
})
rotas.get("/produto/:codigo", async function(requisicao, resposta) {
    resposta.sendStatus(200)
})
rotas.get("/promocao", async function(requisicao, resposta) {
    resposta.sendStatus(200)
})
rotas.post("/catalogar", async function(requisicao, resposta) {
    resposta.sendStatus(201)
})

rotas.get("*", (requisicao, resposta) => {
    resposta.sendStatus(404)
})

export default rotas