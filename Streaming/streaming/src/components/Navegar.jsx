import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navegar() {
  return (
    <Nav className="navbar navbar-expand-lg bg-dark mb-3 " data-bs-theme="dark">
        <Container className="container">
          <a className="navbar-brand" href="/"> Superflix </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/cadastro">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/busca">Filmes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="cadastro.html">Logout</a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>     
  )
}
