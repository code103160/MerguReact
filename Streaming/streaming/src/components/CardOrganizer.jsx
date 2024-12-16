import React, { useState, useEffect } from 'react'
import FilmCard from './FilmCard'
import Filmes from '../functions/Filmes';

export default function CardOrganizer() {

  const [filmList, setFilmList] = useState([]);
  const mail = useState(sessionStorage.getItem("streamingEmail"));
  const toke = useState(sessionStorage.getItem("streamingToken"));

  // const ColetarMail = () => {
  //   setMail(sessionStorage.getItem("streamingEmail"))
  // }

  // const ColetarToke = () => {
  //   setToke(sessionStorage.getItem("streamingToken"))
  // }
  
  useEffect(() => {
     Filmes(mail, toke)
      .then((response) => {
        if(response.status === 200){
          let movies = response.data.data.movies
          setFilmList(movies)
        }
        
      })
      .catch((erro) => {
        console.log(erro)
      })
    }, []);
    
  return (
    <div className="row row-cols-4">
      {
        filmList.map((film, indice) => {

          return (
            <div className="col" key={ indice }>
              <FilmCard image={ film.thumbnail } titulo={ film.title } text={ film.description }/>
            </div>
          )

        })
      }
    </div>
  )
}
