import React from 'react'

export default function FilmCard(props) {
  return (
    <div class="card" style={{width: "10rem;"}} data-bs-theme="dark">
        <img src={ props.image } class="card-img-top" alt="capa do filme"/>
         <div class="card-body">
          <h5 class="card-title">{ props.titulo }</h5>
          <p class="card-text">{ props.text }</p>
        </div>
      </div>
  )
}
