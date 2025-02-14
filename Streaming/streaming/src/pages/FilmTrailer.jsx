import React from 'react'
import Filmes from '../functions/Filmes'
import Navegar from '../components/Navegar'


export default function FilmTrailer(props) {
  return (<div>

    <Navegar/>

    <div className="container d-flex justify-content-center mt-3" data-bs-theme="dark">
      <div className="card ratio ratio-16x9"> 
        <iframe src = { props.trailer } title="trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
      </div>
    </div>

  </div>
  )
}
