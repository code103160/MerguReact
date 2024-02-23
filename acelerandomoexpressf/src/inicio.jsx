import React, { useState, useEffect } from 'react'
import Titulo from './components/titulo'
import Campo from './components/campo'
import Conteudo from './components/conteudo'
import axios from 'axios'

export default function Inicio() {
  
  const [ codigos, definirCodigos ] = useState([])
  const [ conteudos, definirConteudos ] = useState({})

  useEffect(function(){
    axios.get("http://localhost:4000/api")
  
    .then(function(resposta) {
      const dados = resposta.data
      const lista = Object.keys(dados)

      definirCodigos(lista)
      definirConteudos(dados)
    })

    .catch(function(erro){
      console.log(erro)
    })

  })

  return (
    <>
      <Titulo
        nome="Acelerando com o Express"
        imagem="https://i.ibb.co/swB40Tp/4gd8.jpg"
      />
      <Campo>
        {
          codigos.map(function(codigo) {
            return <Conteudo
              key={ codigo }
              capa={ Conteudo[codigos].capa }
              titulo={ Conteudo[codigo].titulo }
              genero={ Conteudo[codigo].genero }
              ano={ Conteudo[codigo].ano }
              autor={ Conteudo[codigo].autor }
            />
          })
        }
      </Campo> 
    </>
  )
}
