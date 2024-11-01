import React from 'react'
import Navegar from '../components/Navegar'
import FormFilm from '../components/FormFilm'
import FilmCarrousel from '../components/FilmCarrousel'
import CardOrganizer from '../components/CardOrganizer'

export default function Busca() {
  return (
    <div>
      <Navegar/>
      <FormFilm/>
      <FilmCarrousel/>
      <CardOrganizer/>
    </div>
  )
}
