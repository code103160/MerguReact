import React from 'react'
import styled from 'styled-components'

const ModeloEntrada = styled.input` 
    background: white;
    border: none;
    height: 42px;
    font-size: 14pt;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
`

export default function Entrada() {
  return (
    <ModeloEntrada type="text" placeholder="Digite um novo conteudo" name="conteudo"/>
  )
}
