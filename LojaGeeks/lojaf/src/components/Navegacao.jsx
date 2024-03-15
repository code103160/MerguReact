import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div`
    overflow: hidden;
`
const ModeloTitulo = styled.div`
    font-size: 32pt;
    padding: 32px 0;
    text-align: center;
`
const ModeloBotoes = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
`

export default function Navegacao(props) {
  return (
    <Modelo>
        <ModeloTitulo> { props.titulo } </ModeloTitulo>
        <ModeloBotoes> { props.children } </ModeloBotoes>
    </Modelo>
  )
}
