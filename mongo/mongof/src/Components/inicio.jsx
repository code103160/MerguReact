import React, { useState } from 'react'
import styled from 'styled-components'

const ModeloFormulario = styled.form`
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  width: 420px;
`

export default function Inicio() {

  const dadosInicio = { nome:"", email:"", senha:"", nascimento:"" }

  const [dados, definirDados] = useState(dadosInicio)

  function Mudar(evento) {

    const valor = evento.target.value
    const campo = evento.target.name
    definirDados({ ...dados, [campo]: valor })

  }

  async function Adicionar(evento){

    evento.preventDefault()

    await axios.post("http://localhost:4000/", dados)

    definirDados(dadosInicio)

}

  return (
    <ModeloFormulario>

      <input value={ dados.usuario } onChange={ Mudar } type="text" name="nome" placeholder="Nome" required/>
      
      <input value={ dados.email } onChange={ Mudar } type="email" name="email" placeholder="Email@mail.com" required/>

      <input value={ dados.senha } onChange={ Mudar } type="password" name="senha" placeholder="******" required/>

      <input value={ dados.nascimento } onChange={ Mudar } type="date" name="nascimento" required/>
      
      <input onSubmit={ Adicionar }/>

    </ModeloFormulario>
  )
}
