import React from 'react'
import Navegar from '../components/Navegar'
import FormFilm from '../components/FormFilm'
import FilmCarrousel from '../components/FilmCarrousel'
import FilmCard from '../components/FilmCard'

export default function Busca() {
  return (
    <div>
      <Navegar/>
      <FormFilm/>
      <FilmCarrousel/>
      <FilmCard image="https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg" titulo="O Senhor dos Anéis" text="Lorem Ipsum"/>
    </div>
  )
}
