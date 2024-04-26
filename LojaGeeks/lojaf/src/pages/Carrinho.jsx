import React, {useState, useEffect } from 'react'
import Navegacao from '../components/Navegacao'
import ProdutosExemplo from '../datas/ProdutosExemplo'
import Janela from '../components/Janela'
import ObterCarrinho from '../functions/ObterCarrinho'

export default function Carrinho() {

    const [ carrinho, definirCarrinho ] = useState([])

    useEffect( () => { const resultado = ObterCarrinho() 
        definirCarrinho(resultado)
    }, [] )

    const [ preco, definirPreco ] = useState(0)

    useEffect(() => {
        var total = 0

        carrinho.map((codigo) => {})

        definirPreco(total)
    }, [carrinho])

    
    
  return (
    <>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>

        {carrinho.map(function(codigo, indice) {
            for (const produto of ProdutosExemplo) {
                if (produto.codigo === codigo)

                return <tr key={ indice }>
                    <td> { produto.codigo } </td>
                    <td> { produto.modelo } </td>
                    <td> R${ produto.preco }.00 </td>
                </tr>
        }
    })}
    </>
  )
}
