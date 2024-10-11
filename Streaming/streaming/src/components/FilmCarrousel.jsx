import React from 'react'

export default function FilmCarrousel() {
  return (
    <div class="container">
      <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-theme="dark">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="http://google.com" class="d-flex justify-content-center">
              <img src="https://www.movieposters.com/cdn/shop/files/jurassicpark.mpw_240x360_crop_center.progressive.jpg?v=1713805481" class="d-block w-25" alt="..."/>
            </a>
          </div>
          <div class="carousel-item">
            <a href="http://google.com" class="d-flex justify-content-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s" class="d-block w-25" alt="..."/>
            </a>
          </div>
          <div class="carousel-item d-flex justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIAKdIG4Gmd9k3pzeLRnjVdQCXV3FpPyZ8w&s" class="d-block w-25" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  )
}
