import React from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`

const ConteudoCapa = styled.img`
    height: 280px;
    transition: 0.2s;
    &:hover {
        transform: scale(120%);
        transition: 0.5s;
    }
`

const ConteudoTitulo = styled.div`
    margin: 16px 0;
    text-align: center;
`

const ConteudoInfo = styled.div`
    color: #555;
    font-size: 12pt;
    text-align: center;
`

export default function Conteudo(props) {
  return (

    <ModeloConteudo>

        <ConteudoCapa src={ props.capa } alt="Capa do livro"/>

        <ConteudoTitulo> { props.titulo } </ConteudoTitulo>

        <ConteudoInfo> { props.genero.join(", ") } </ConteudoInfo>

        <ConteudoInfo> { props.ano } </ConteudoInfo>

        <ConteudoInfo> { props.autor } </ConteudoInfo>

    </ModeloConteudo>

  )
}
