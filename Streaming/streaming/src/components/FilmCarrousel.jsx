import React from 'react'

export default function FilmCarrousel() {
  return (
    <div className="container">
      <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-theme="dark">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="http://google.com" className="d-flex justify-content-center">
              <img src="https://www.movieposters.com/cdn/shop/files/jurassicpark.mpw_240x360_crop_center.progressive.jpg?v=1713805481" className="d-block w-25" alt="..."/>
            </a>
          </div>
          <div className="carousel-item">
            <a href="http://google.com" className="d-flex justify-content-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s" className="d-block w-25" alt="..."/>
            </a>
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIAKdIG4Gmd9k3pzeLRnjVdQCXV3FpPyZ8w&s" className="d-block w-25" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  )
}
