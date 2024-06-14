import React, { useEffect, useState } from 'react'
import Navegacao from '../components/Navegacao'
import Destaque from '../components/Destaque'
import Sessao from '../components/Sessao'
import ObterConteudos from '../functions/ObterConteudos'
import ObterGeneros from '../functions/ObterGeneros'

export default function Explorar() {
  const [ conteudos, definirConteudos ] = useState([])
  const [ generos, definirGeneros ] = useState([])

  useEffect(() => {

    ObterConteudos()
    .then((resposta) => {
      if (resposta.status == 200)
        definirConteudos(resposta.data)
      else
        console.log(resposta)
    })
    .catch((erro) => {
      console.log(erro)
    })

    ObterGeneros()
    .then((resposta) => {
      if (resposta.status == 200)
        definirGeneros(resposta.data)
      else if (resposta.status == 404)
        alert("Nenhum Gênero Encontrado!")
      else if (resposta.status == 500)
        alert("Problema com o Servidor!")
      else
        console.log(reposta)
    })
    .catch((erro) => {
      console.log(erro)
    })
  }, [])

  return <Destaque fundo="/fundo.jpg">
      <Navegacao/>
    </Destaque>
    

    { generos.length > 0 &&
      generos.map((genero, indice) => {})
    }
  
  
}
