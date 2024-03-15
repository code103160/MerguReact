import React from 'react'
import Navegacao from '../components/Navegacao'
import Principal from '../components/Principal'
import ProdutosExemplo from '../datas/ProdutosExemplo'

export default function Vitrine() {
  return (<>
    <Navegacao titulo="VITRINE">
        <a href="/"> Início </a>
        <a href="/produto/1234"> Promoção </a>
        <a href="/carrinho"> Carrinho </a>
    </Navegacao>

    <Principal produtos={ ProdutosExemplo }/>

    </>
  )
}
