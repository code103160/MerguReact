import React from 'react'
import Titulo from '../Components/Titulo'
import Campo from '../Components/Campo'
import Conteudo from '../Components/Conteudo'

export default function Inicio() {
  return (
    <>
        <Titulo nome="Mergulhando no React"/>
        <Campo>
            <Conteudo
                foto="/error.png"
                nome="@3rr0r_U53r"
                descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <Conteudo
                foto="/manoelgomes.jpg"
                nome="@canetaazulazulcaneta"
                descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
        </Campo>
    </>
  )
}
