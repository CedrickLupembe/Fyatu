import React from 'react'
import { Link } from 'react-router-dom'


// style import
import { 
    Container, 
    Navbar,
    Maint
  } from './styles/Over.styled'

// Icons import
import {RiSearch2Line} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import {RiNotification2Line } from "react-icons/ri"

// Images import
import profil from "./Images/profil.jpg"
import mascot from "./Images/mascot.png"

const Statist = () => {
  return (
    <Container>

      {/* Horizontal navbar */}
        <Navbar>
        {/* search bar */}
            <span>
                <RiSearch2Line />
                <input type="text" placeholder='Search something...' />
            </span>

        {/* Notif and profil */}
            <div>
                <ul>
                  <li><a href="/"> <AiOutlineMessage /> </a></li>
                  <li><a href="/"> <RiNotification2Line /> </a></li>
                  <span><img src={profil} alt="profil" /></span>
                </ul>
            </div>
        </Navbar>

        <Maint>
            <span><img src={mascot} alt="Mascott maintainance page" /></span>
            <h1>Overview Page</h1>
            <p>It will not take long till we get the error fixed, we will live soon</p>
            <Link to='/'><button>Back Home</button></Link>
        </Maint>



    </Container>
  )
}

export default Statist