import React from 'react'
import Filmes from '../functions/Filmes'


export default function BlankFIlmPage(props) {
  return (
    <div class="container d-flex justify-content-center mt-3" data-bs-theme="dark">
      <div class="card ratio ratio-16x9"> { props.link } </div>
    </div>
  )
}
