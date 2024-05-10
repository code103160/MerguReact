import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Explorar from "./pages/Explorar"
import Inicio from "./pages/Inicio"
import Video from "./pages/Video"
import Painel from "./pages/Painel"

export default function Rotas() {
  return <BrowserRouter>
    <Routes>
        <Route index path="/" element={ <Inicio/> } />
        <Route index path="/explorar" element={ <Explorar/> } />
        <Route index path="/video/:codigo" element={ <Video/> } />
        <Route index path="/painel" element={ <Painel/> } />
    </Routes>
  </BrowserRouter>
}

