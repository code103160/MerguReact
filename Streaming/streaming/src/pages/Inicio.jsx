import React from 'react'
import FormUser from '../components/FormUser'
import Navegar from '../components/Navegar'

export default function Inicio() {
  return (
    <div>
      <Navegar/>
      <FormUser titulo="Usuario" botao="Entrar" address="/busca" confirmation="false"/>
    </div>
  )
}
