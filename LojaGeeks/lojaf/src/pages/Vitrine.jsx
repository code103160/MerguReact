import React from 'react'
import Navegacao from '../components/Navegacao'
import Principal from '../components/Principal'

export default function Vitrine() {
  return (
    <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/produto/1234"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
    </Navegacao>
  )
}
