import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vitrine from "./pages/Vitrine"
import Produto from './pages/Produto'

export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <Vitrine/> }/>
            <Route path="/produto/:codigo" element={ <Produto/> }/>
        </Routes>
    </BrowserRouter>
  )
}
