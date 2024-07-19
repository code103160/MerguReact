import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div `
    background: #fff;
    border-radius: 4px;
    color: #222;
    padding: 32px;
    margin: auto;
`
const Formulario = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const FormularioTitulo = styled.div `
    font-size: 24pt;
    font-weight: bold;
    text-align: center;
`

export default function Entrar() {
  return <Modelo>
    <Formulario action="/explorar" method="GET" >
        <FormularioTitulo> Entrar </FormularioTitulo>

        <input type="text" placeholder="Email" required/>
        <input type="password" placeholder="****" required/>
        <input type="submit" value="Entrar"/>
    </Formulario>
  </Modelo>
}
