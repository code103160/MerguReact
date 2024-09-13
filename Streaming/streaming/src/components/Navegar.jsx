import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navegar() {
  return (
    <Nav class="navbar navbar-expand-lg bg-dark mb-3 " data-bs-theme="dark">
        <Container class="container">
          <a class="navbar-brand" href="index.html"> Superflix </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="logar.html">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Logout</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="cadastro.html">Registration</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="video.html">Show</a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>     
  )
}
