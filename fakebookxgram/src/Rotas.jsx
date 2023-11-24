import React from 'react'
import styled from 'styled-components'

const Titulo = styled.div`
  color: #2da9f3;
  font-size: 32pt;
  padding: 32px 0;
  text-align: center;
`
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

export default function Rotas() {   

  return (
  <div>
    <Titulo>
      Mergulhando no React!
    </Titulo>

    <Campo>

      <Conteudo>
        Praesent hendrerit eros eu neque mattis, a congue tortor vulputate.
      </Conteudo>

      <Conteudo>
        Vivamus blandit, erat in lobortis placerat, mi nisi interdum urna.
      </Conteudo>
      
    </Campo>
  </div>
  )
  
}

