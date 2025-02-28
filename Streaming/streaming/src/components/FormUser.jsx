import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Usuario from '../functions/Usuario'
import NewUser from '../functions/NewUser'
import { useNavigate } from 'react-router-dom'

export default function FormUser(props) {

  const navegar = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmar, setConfirmar] = useState("")

  const ValidarSenha = (evento) => {
    setSenha(evento.target.value)
    evento.preventDefault()
  }

  const ConfirmarSenha = (evento) => {
    setConfirmar(evento.target.value)
    evento.preventDefault()
  }

  const ValidarEmail = (evento) => {
    setEmail(evento.target.value)
    evento.preventDefault()
  }

  const CreateSession = (evento) => {
    Usuario(email, senha)
      .then((resposta) => {
        if(resposta.status === 200) {
          sessionStorage.setItem("streamingEmail", resposta.data.data.user.email)
          sessionStorage.setItem("streamingToken", resposta.data.data.user.access_token)
          console.log(resposta)
          navegar('/busca')
        }
        if(resposta.status === 404)
          alert('Usuário ou Senha incorretos')
      })
      .catch((erro) => {
        alert(erro.message)
      })
      evento.preventDefault()
  }

  const CreateUser = (evento) => {
    NewUser(email, senha)
      .then((resposta) => {
        if(resposta.status === 201) {
          navegar('/')
          console.log(resposta)
        }
        if(resposta.status === 404)
          alert('Formato errado')
      })
      .catch((erro) => {
        alert(erro.message)
      })
      evento.preventDefault()
  }

  useEffect(()=>{
    let user = sessionStorage.getItem("streamingEmail")
    let token = sessionStorage.getItem("streamingToken")
    if (user && token) navegar('/busca')
  }, [])

  return (
      (props.confirmation === "true")?

        <Container className="container d-flex justify-content-center" data-bs-theme="dark">
          <div className="card text-center w-50 mx-auto" >
            <div className="card-body">
              <h5 className="card-title"> { props.titulo } </h5>
              <form action="" method="GET" onSubmit={CreateUser}>
                <input onChange={ ValidarEmail } type="email" className="form-control mt-3 mb-3" aria-describedby="email" placeholder="Seu E-mail aqui"/>
                <input onChange={ ValidarSenha } type="password" className="form-control mt-3 mb-3" placeholder="Senha"/>
                <input onChange={ ConfirmarSenha }type="password" className="form-control mt-3 mb-3" id="senhaconfirmar" placeholder="Confirme a Senha"/>
                <button type="submit" className="btn btn-info"> { props.botao } </button>
              </form>
            </div>     
          </div>
        </Container> 
      :
        <Container className="container d-flex justify-content-center" data-bs-theme="dark">
          <div className="card text-center w-50 mx-auto" >
            <div className="card-body">
              <h5 className="card-title"> { props.titulo } </h5>
              <form action="" method="GET" onSubmit={CreateSession}>
                <input onChange={ ValidarEmail } type="email" className="form-control mt-3 mb-3" aria-describedby="email" placeholder="Seu E-mail aqui"/>
                <input onChange={ ValidarSenha } type="password" className="form-control mt-3 mb-3" placeholder="Senha"/>
                <button type="submit" className="btn btn-info"> { props.botao } </button>
              </form>
            </div>     
          </div>
        </Container>
  )
}