import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmCard(props) {

  const navegar = useNavigate()

  return (
    <div className="card my-3" onClick={ navegar("/filme") } data-bs-theme="dark">
      <img src={ props.image } className="card-img-top" alt="capa do filme"/>
      <div className="card-body">
        <h5 className="card-title">{ props.titulo }</h5>
        <p className="card-text">{ props.text }</p>
      </div>
    </div>
  )
}
