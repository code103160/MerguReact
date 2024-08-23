import React from 'react'
import Navegar from '../components/Navegar'

export default function Busca() {
  return (
    <div>
        <form>
            <input type="text" placeholder="Genero"/>
            <input type="text" placeholder="title"/>
            <input type="submit" value="Busca"/>
        </form>
    </div>
  )
}
