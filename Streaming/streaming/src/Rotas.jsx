import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/Inicio"
import Cadastro from "./pages/Cadastro"
import Busca from "./pages/Busca"
import FilmTrailer from './pages/FilmTrailer'

export default function Rotas() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={ <Inicio/> } />
                <Route path="/cadastro" element= { <Cadastro/> } />
                <Route path="/busca" element={ <Busca/> } />
                <Route path="/filme" element={ <FilmTrailer/> } />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
