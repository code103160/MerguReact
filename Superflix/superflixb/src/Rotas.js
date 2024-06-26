import express, { application } from "express";
import { conteudo } from "./database/Conteudo";
import { Types, isValidObjectId } from "mongoose";
import Joi from "joi";

const rotas = express.Router()

rotas.get("/conteudos", (requisicao, resposta) => {
    conteudo.find()
    .then((resultados) => {
        if (resultados.lenght > 0)
            resposta.status(200).json(resultados)
        else resposta.status(404).json({
            mensagem: "Nenhum resultado encontrado!"
        })
    })
    .catch((erro) => {
        resposta.status(500).json({
            mesagem: erro.message
        })
    })

})

rotas.get("/generos", (requisicao, resposta) => {
    conteudo.find()
    .then((resultados) => {
        if (resultados.length > 0) {
            var lista = new Array()

            resultados.map((conteudo) => {
                if (!lista.includes(conteudo.genero))
                    return lista.push(conteudo.genero)
            })

            resposta.status(200).json(lista)
        }
        
        else resposta.status(404).json({
            mensagem: "Nenhum resultado encontrado!"
        })
    })
    .catch((erro) => {
        resposta.status(500).json({
            mensagem: erro.message
        })
    })
})

rotas.get("/conteudo/:codigo", (requisicao, resposta) => {
    const { codigo } = requisicao.params
    

    if (isValidObjectId(codigo)){
        conteudo.findById( Types.ObjectId(codigo))
        .then( (resultado) => {
            if (resultado)
                resposta.status(200).json(resultado)
            else resposta.status(404).json({
                mensagem: "Nenhum resultado encontrado!"
            })
        })
        .catch((erro) => {
            resposta.status(500).json({
                mensagem: erro.message
            })
        })
    }
    else resposta.status(400).json({
        mensagem: "Código Invalido!"
    })
})

rotas.post("/conteudo", (requisicao, resposta) => {
    const corpo = requisicao.body

    const novoConteudo = new conteudo(corpo)

    const esquema = Joi.object({
        capa: Joi.string().uri().required(),
        trilha: Joi.string().uri().required(),
        titulo: Joi.string().required(),
        descricao: Joi.string(),
        genero: Joi.string().required(),
        ano: Joi.number().required(),
        duracao: Joi.number().required(),
        faixa: Joi.number().required()
    })

    try {
        const validado = await esquema.validateAsync(corpo)
    } 
    catch (erro) {
        resposta.status(400).json({ mensagem: erro.message })
    }

    novoConteudo.save()
    .then( (resultado) => {
        resposta.status(201).json(resultado)
    })
    .catch( (erro) => {
        resposta.status(500).json({ mensagem: erro.message })
    })
    
})



export default rotas