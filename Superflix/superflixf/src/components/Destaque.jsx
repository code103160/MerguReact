import React from 'react'
import styled from 'styled-components'

const Modelo = styled.div`
    background-image: url(${ props => props.fundo });
    background-size: cover; 
    height: 120vh;
`

export default function Destaque(props) {
    return <Modelo fundo={ props.fundo }> 
        { props.children }
    </Modelo>
}
