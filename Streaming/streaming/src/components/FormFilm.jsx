import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'


export default function FormFilm() {

  const [ conteudo, definirConteudo ] = useState()

  function Selecionar(evento) {
    const campo = evento.target.name
    const valor = evento.target.value
    definirConteudo({ ...conteudo, [campo]: valor})
  }
  return (
    <div>
        <Container class="container mb-3" data-bs-theme="dark">
            <form class="d-flex">
                <input type="text" class="form-control me-2" id="nome" placeholder="Nome do Filme" aria-label="Nomes"/>
                <select class="form-select me-2" aria-label="Generos">
                    <option value>-Vazio-</option>
                    <option value="acao">Ação</option>
                    <option value="romance">Romance</option>
                    <option value="comedia">Comédia</option>
                    <option value="drama">Drama</option>
                </select>
                <input type="date" class="form-control me-2" />
                <button type="submit" class="btn btn-info">Pesquisar</button>
            </form>
        </Container>
    </div>
  )
}
