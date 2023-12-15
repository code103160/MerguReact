import React from 'react'
import Titulo from './Components/Titulo'
import Campo from './Components/Campo'
import Conteudo from './Components/Conteudo'

export default function Inicio() {
  return (
    <>
      <Titulo nome="Velejando com o React"/>
      <Campo id="1">
        Teste
      </Campo>
      <Campo id="2">

        <Conteudo texto="Tirar o lixo"/>

        <Conteudo texto="Lavar a Louça"/>
        
      </Campo>
    </>
  )
}
