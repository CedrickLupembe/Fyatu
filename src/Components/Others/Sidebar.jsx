import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Div1, Div2, Div3 } from './styles/Sidebarblock.styled'

// Image import
import logo from "./Images/logo.png"
import emoji from "./Images/emoji.png"


// Icons import
import {HiViewGridAdd, HiChartPie, HiPresentationChartLine, HiCog} from "react-icons/hi"

const Sidebar = () => {
  return (
    <Container>

        {/* Logo */}
        <Div1>
            <Link to='/'><span><img src={logo} alt="Logo" /></span></Link>
            <div>
                <span>Mouris</span>
                <p>Dashboard</p>
            </div>
        </Div1>

        {/* Navigation */}
        <Div2>
            <ul>
                <li><Link to='/'><a href="/"><span><HiViewGridAdd /></span> Dashboard</a></Link></li>
                <li><Link to='/statistic'><a href="/"><span><HiChartPie /></span> Statistics</a></Link></li>
                <li><Link to='/overview'><a href="/"><span><HiPresentationChartLine /></span> Overview</a></Link></li>
                <li><Link to='/sitting'><a href="/"><span><HiCog /></span> Sittings</a></Link></li>
            </ul>
        </Div2>

        {/* Banner */}
        <Div3>
            <span><img src={emoji} alt="rocket emoji" /></span>
            <p>New update avalable click to update</p>
            <button>Update!</button>
        </Div3>

    </Container>
  )
}

export default Sidebar