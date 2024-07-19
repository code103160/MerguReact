import React from 'react'

export default function Reprodutor(props) {
  return <Modelo>
    <ModeloTrailer src= { props.conteudo.trilha }></ModeloTrailer>
    <ModeloDados>
        <Titulo> { props.conteudo.titulo } </Titulo>
        <Organizador>
            <div> { props.conteudo.ano } </div>

            <div> { props.conteudo.duracao } Min </div>

            <div> + { props.conteudo.faixa } </div>
        </Organizador>
        <Descricao> { props.conteudo.descricao } </Descricao>
    </ModeloDados>
  </Modelo>
}
