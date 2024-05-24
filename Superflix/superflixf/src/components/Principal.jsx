import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div`
    background-image: url( ${ props => props.fundo } );
    background-size: cover;
    height: 120vh;
`
const Barra = styled.div`
    background: linear-gradient(black, transparent);
    padding: 32px;
`
const BarraImagem = styled.div`
    display: block;
    margin: 0 auto;
    height: 48px;
`
const Mensagem = styled.div`
    margin: 0 auto;
    padding: 24px 0;
    text-align: center;
    width: ${ props => props.tamanho };
`

export default function Principal(props) {
  return (
    <Modelo fundo={ props.fundo } >

        <Barra>

            <BarraImagem src="/logo.png" alt="logo"/>

        </Barra>

        <Mensagem tamanho={ props.tamanho } >
            { props.children }
        </Mensagem>
    </Modelo>
  )
}

``