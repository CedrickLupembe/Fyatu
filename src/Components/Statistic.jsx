import React from 'react'

import { Container } from './Style/Stat.styled'

// Mini-import
import Sidebar from './Others/Sidebar'
import Statist from './Others/Statist'

const Statistic = () => {
  return (
    <Container>
        <Sidebar />
        <Statist />
    </Container>
  )
}

export default Statistic