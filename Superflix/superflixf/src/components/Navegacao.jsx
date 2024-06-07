import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div`
    align-items: center;
    background: linear-gradient(black, transparent);
    display: flex;
    gap: 32px;
    height: 32px;
    padding: 32px;
  `
const ModeloImagem = styled.img`
    height: 48px;
`
const ModeloLink = styled.a`
    color: #fff;
    text-decoration: none;
`

export default function Navegacao() {
  return <>
    <Modelo>
        <ModeloImagem scr="/title.png" alt="logo"/>

        <ModeloLink href="#"> Inicio </ModeloLink>
        <ModeloLink href="#"> Séries </ModeloLink>
        <ModeloLink href="#"> Filmes </ModeloLink>
        <ModeloLink href="#"> Em Alta </ModeloLink>
    </Modelo>
  </>
}
