import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Usuario from '../functions/Usuario'
import { useNavigate } from 'react-router-dom'

export default function FormUser(props) {
  const navegar = useNavigate()

  function Validar(evento) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    console.log(email)

    evento.preventDefault()

    // Usuario(email, senha)
    //   .then((resposta) => {
    //     if(resposta.status === 200)
    //       navegar("/busca")
    //   })
    //   .catch((erro) => {
    //     alert(erro.message)
    //   })
  }

  return (
    <Container className="container d-flex justify-content-center" data-bs-theme="dark">
      <div className="card text-center w-50 mx-auto" >
        <div className="card-body">
          <h5 className="card-title"> { props.titulo } </h5>
          <form action="" method="GET" onSubmit={ Validar }>
            <input onChange={ setEmail(evento.target.value)} type="email" className="form-control mt-3 mb-3" aria-describedby="email" placeholder="Seu E-mail aqui"/>
            <input type="password" className="form-control mt-3 mb-3" placeholder="Senha"/>
            { (props.confirmation === "true")? <input type="password" className="form-control mt-3 mb-3" id="senhaconfirmar" placeholder="Confirme a Senha"/>: ""}
            <button type="submit" className="btn btn-info"> { props.botao } </button>
          </form>
        </div>     
      </div>
    </Container>
  )
}
