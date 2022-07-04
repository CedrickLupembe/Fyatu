import React from 'react'

import { Container } from './Style/Ove.styled'

// Mini-import
import Sidebar from './Others/Sidebar'
import Overv from './Others/Overv'

const Overview = () => {
  return (
    <Container>
        <Sidebar />
        <Overv />
    </Container>
  )
}

export default Overview