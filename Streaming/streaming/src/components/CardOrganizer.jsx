import React, { useState, useEffect } from 'react'
import FilmCard from './FilmCard'

export default function CardOrganizer(props) {

  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    fetch()
      .then(response => response.json())
  }, []);

  return (
    <div class="row">
      {filmList.map((film) =>{
        <FilmCard image="" titulo="" text=""/>
      })}
    </div>
  )
}
