import React from 'react'
import Principal from '../components/Principal'
import Formulario from '../components/Formulario'

export default function Painel() {
  return (
    <>
    <Principal fundo="/fundo.jpg" tamanho="480px">
      <Formulario/>
    </Principal>
    </>
  )
}
