import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ObterUnicoConteudo from '../functions/ObterUnicoConteudo'
import { useParams } from 'react-router-dom'
import Principal from "../components/Principal"
import Reprodutor from "../components/Reprodutor"

const Modelo = styled.div`
    background: #222;
    border-radius: 8px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
    overflow: hidden;
`
const ModeloTrailer = styled.div`
    border: none;
    height: 500px;
    width: 100%;
`
const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
`
const Titulo = styled.div`
    font-size: 20pt;
    font-weight: bold;
`
const Descricao = styled.div`
    text-align: justify;
`
const Organizador = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function Video() {
    const { codigo } = useParams()
    const [ conteudo, definirConteudo ] = useState({})
    
    useEffect(() => {
        ObterUnicoConteudo(codigo)

        .then((resposta)=> {
            if (resposta.status == 200)
                definirConteudo(resposta.data)
            else
                console.log(resposta)
        })

        .catch((erro) => {
            console.log(erro.message)
        })

    }, [])
  return <>
    { conteudo &&
        <Principal fundo={ conteudo.capa } tamanho="700px">
            <Reprodutor conteudo = { conteudo } />
        </Principal>
    }
  </>
}
