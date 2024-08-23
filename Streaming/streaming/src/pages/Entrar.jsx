import React from 'react'

export default function Entrar() {
  return (
    <div>
        <form>
            <div> Entrar </div>
            <input type="text" placeholder="Email" required/>
            <input type="password" placeholder="****" required/>
            <input type="submit" value="Entrar"/>
        </form>
    </div>
  )
}
