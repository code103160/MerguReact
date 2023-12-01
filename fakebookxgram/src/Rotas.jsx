import React from 'react'
import styled from 'styled-components'
import Titulo from './Components/Titulo'

const Campo = styled.div`
  background: #303741;
  border-radius: 16px;
  padding: 16px;
`

const Conteudo = styled.div`
  background: #3b424c;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
`

const ConteudoTopo = styled.div`

    display: flex;

    gap: 16px;

`
const ConteudoFoto = styled.img` 

    border-radius: 100%;

    height: 96px;

    width: 96px;

`

const ConteudoNome = styled.div`

    align-self: center;

    color: #2ca8f2;

`
const ConteudoDescricao = styled.div` 

    margin-top: 16px;

    text-align: justify;

`

export default function Rotas() {   

  return (
  <div>
    <Titulo/>
    <Campo>

      <Conteudo>

        <ConteudoTopo>

          <ConteudoFoto src="/error.png" alt="Foto"/>

          <ConteudoNome> @3rr0r_U53r </ConteudoNome>

        </ConteudoTopo>

        <ConteudoDescricao>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </ConteudoDescricao>
      </Conteudo>

    </Campo>
  </div>
  )
  
}

