import React from 'react'
import Navegacao from '../components/Navegacao'
import ProdutosExemplo from '../datas/ProdutosExemplo'
import Janela from '../components/Janela'

export default function Carrinho() {
  return (
    <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>

        <Janela>
            <table width="100%" >
                <tbody>
                    <tr>
                        <td> Código </td>
                        <td> Modelo do Produto </td>
                        <td> R$ 1.000,00 </td>
                        </tr>
                </tbody>
            </table>
        </Janela>
    </>
  )
}
