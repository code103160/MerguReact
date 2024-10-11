import { Carousel } from 'bootstrap'
import React from 'react'

export default function FilmCarrousel() {
  return (
    <div>
        <Carousel class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-theme="dark">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img></img>
                </div>
            </div>
        </Carousel>
    </div>
  )
}
