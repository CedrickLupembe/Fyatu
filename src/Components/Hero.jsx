import React from 'react'

import { Container } from './Style/HeroBlock.styled'

// Mini-components
import Sidebar from './Others/Sidebar'
import Dash from './Others/Dash'

const Hero = () => {
  return (
    <Container>
        <Sidebar />
        <Dash />
    </Container>
  )
}

export default Hero