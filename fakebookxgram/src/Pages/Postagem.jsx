import React from 'react'
import { useParams } from 'react-router-dom'
import Titulo from '../Components/Titulo'
import Campo from '../Components/Campo'
import Conteudo from '../Components/Conteudo'

export default function Postagem() {
    const { nome, descricao } = useParams()
    return (
        <>
            <Titulo nome="Mergulhando no React"/>
            <Campo>
                <Conteudo 
                    foto="/Jesus.jpg" 
                    nome={ "@" + nome }
                    descricao={ descricao }
                />
            </Campo>
        </>
    )
}
