import React from 'react'
import styled from "styled-components"

const Modelo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px 0;
`

const Produto = styled.div`
    background: #fff;
    padding: 8px;
`

const ProdutoImagem = styled.img`
    height: 220px;
    object-fit: cover;
    width: 220px;
`

const ProdutoDados = styled.div`
    text-align: center;
`

export default function Principal() {
  return (
    <Modelo>
        <Produto>
            <ProdutoImagem src="https://picsum.photos/800/800" alt="Foto do Produto"/>
            <ProdutoDados>
                <div> Modelo </div>
                <div> R$ 1.000,000 </div>
            </ProdutoDados>
        </Produto>
    </Modelo>
  )
}
