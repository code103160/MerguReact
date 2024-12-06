import React from 'react'
import Usuario from '../functions/Usuario'
import { useNavigate } from 'react-router-dom'

export default function Entrar() {

  function Valido(evento){
    const email = evento.target.email.value
    const senha = evento.target.senha.value
    const navegar = useNavigate()
  
    evento.preventDefault()
  }

  Usuario(email, senha)
    .then((resposta) => {
      if (resposta.status === 202)
        navegar("/busca")
    })
    .catch((erro) => {
      alert(erro.message)
    })




  return (
    <div>
        <form action="/explorar" method="GET" onSubmit={ Valido }>
            <div> Entrar </div>
            <input type="text" placeholder="Email" required/>
            <input type="password" placeholder="****" required/>
            <input type="submit" value="Entrar"/>
        </form>
    </div>
  )
}
