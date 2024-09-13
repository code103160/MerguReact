import React from 'react'
import Container from 'react-bootstrap/Container'

export default function FormUser(props) {
  return (
    <Container class="container d-flex justify-content-center" data-bs-theme="dark">
      <div class="card text-center w-50 mx-auto" >
        <div class="card-body">
          <h5 class="card-title"> { props.titulo } </h5>
          <form action={ props.address }>
            <input type="email" class="form-control mt-3 mb-3" aria-describedby="email" placeholder="Seu E-mail aqui"/>
            <input type="password" class="form-control mt-3 mb-3" placeholder="Senha"/>
            { (props.confirmation == "true")? <input type="password" class="form-control mt-3 mb-3" id="senhaconfirmar" placeholder="Confirme a Senha"/>: ""}
            <button type="submit" class="btn btn-info"> { props.botao } </button>
          </form>
        </div>     
      </div>
    </Container>
  )
}
