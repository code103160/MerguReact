import React, { useState, useEffect } from 'react'
// import FilmCard from './FilmCard'
import Filmes from '../functions/Filmes';

export default function CardOrganizer() {

  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
     Filmes()
      .then((response) => {
        if(response.status === 200)
          setFilmList(response.data)
        console.log(filmList)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }, []);

  return (
    <div className="row row-cols-4">
      {
        filmList.length
        // filmList.map((film, indice) => {

        //   return (
        //     <div className="col" key={ indice }>
        //       <FilmCard image={ film.thumbnail } titulo={ film.title } text={ film.description }/>
        //     </div>
        //   )

        // })
      }
    </div>
  )
}
