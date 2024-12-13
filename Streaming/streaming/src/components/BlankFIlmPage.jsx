import React from 'react'
import Filmes from '../functions/Filmes'


export default function BlankFIlmPage(props) {
  return (
    <div className="container d-flex justify-content-center mt-3" data-bs-theme="dark">
      <div className="card ratio ratio-16x9"> { props.link } </div>
    </div>
  )
}
