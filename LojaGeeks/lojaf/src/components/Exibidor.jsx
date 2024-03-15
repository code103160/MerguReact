import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div`
    background: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
`

const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    max-width: 480px;
`

const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

export default function Exibidor() {
  return (
    <div>Exibidor</div>
  )
}
