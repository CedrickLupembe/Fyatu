import React from 'react'

import { Container } from './Style/Sit.styled'

import Sidebar from './Others/Sidebar'
import Sittin from './Others/Sittin'

const Sitting = () => {
  return (
    <Container>
        <Sidebar />
        <Sittin />
    </Container>
  )
}

export default Sitting