import express from "express";

const rotas = express.Router()

rotas.get("/conteudos", (requisicao, resposta) => {})

rotas.get("/generos", (requisicao, resposta) => {})

rotas.get("/conteudo/:codigo", (requisicao, resposta) => {})

rotas.post("/conteudo", (requisicao, resposta) => {})

export default rotas