import React from 'react'

// style import
import { 
        Container, 
        Navbar, 
        Content, 
        LeftBlock, 
        View, 
        Chart, 
        RightBlock,
        Div1,
        Div2,
        Head,
        Users,
        User
      } from './styles/DashBlock.styled'

// Icons import
import {RiSearch2Line} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import {RiNotification2Line } from "react-icons/ri"
import {AiFillEye} from "react-icons/ai"
import {FiChevronRight} from "react-icons/fi"
import {HiShoppingCart} from "react-icons/hi"
import {BsHandbagFill} from "react-icons/bs"
import {FaUsers} from "react-icons/fa"
import {CgBorderStyleDashed} from "react-icons/cg"

// Images import
import profil from "./Images/profil.jpg"
import chart1 from "./Images/chart1.png"
import chart2 from "./Images/chart2.PNG"

import fil1 from "./Images/fil.webp"
import fil3 from "./Images/profil3.jpg"
import fil4 from "./Images/profil4.jpg"

const Dash = () => {
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

        {/* Content dash */}
        <Content>

          {/* left content */}
            <LeftBlock>

                {/* view report */}
                <View>
                  <div className='Index'>
                    <span className='Icon'><AiFillEye /></span>
                    <div>
                      <div>
                        <ul>
                          <li className='Title'>3.456K</li>
                          <li>Total views</li>
                        </ul>
                        
                      </div>
                      </div>

                      <span className='btnIcon'><FiChevronRight /></span>

                    
                  </div>

                  <div className='Second'>
                    <span className='Icon2'><HiShoppingCart /></span>
                    <div>
                      <div>
                        <ul className='List'>
                          <li className='Title'>$45,2K</li>
                          <li className='Paraph'>Total Profit</li>
                        </ul>
                        
                      </div>
                      </div>

                      <span className='btnIcon2'><FiChevronRight /></span>

                    
                  </div>
                </View>

                <View className='Botton'>

                  <div className='Second'>
                    <span className='Icon2'><BsHandbagFill /></span>
                    <div>
                      <div>
                        <ul className='List'>
                          <li className='Title'>2.450</li>
                          <li className='Paraph'>Total Prod</li>
                        </ul>
                        
                      </div>
                      </div>

                      <span className='btnIcon2'><FiChevronRight /></span>

                    
                  </div>

                  <div className='Second'>
                    <span className='Icon2'><FaUsers /></span>
                    <div>
                      <div>
                        <ul className='List'>
                          <li className='Title'>3.456</li>
                          <li className='Paraph'>Total Users</li>
                        </ul>
                        
                      </div>
                      </div>

                      <span className='btnIcon2'><FiChevronRight /></span>

                    
                  </div>
                </View>

              {/* Chart bottom */}
                <Chart>
                  <div>
                      <span>Statistics</span>

                      <select id="country">
                        <option value="country">January</option>
                        <option value="country">February</option>
                        <option value="country">March</option>
                      </select>
                  </div>

                  <span>
                    <img src={chart1} alt="chart one" />
                  </span>
                </Chart>

            </LeftBlock>

            {/* Right content */}
            <RightBlock>

              <Div1>
                <div>
                  <span>Profit this day</span>
                  <a href='/'><CgBorderStyleDashed /></a>
                </div>

                <h1>$13.209</h1>

                <span>
                  <img src={chart2} alt="chart two" />
                </span>
              </Div1>

              {/* Block users */}
              <Div2>
                  <Head>
                    <p>Activity</p>
                    <a href="/">See more</a>
                  </Head>

                  <Users>

                    <User>
                    <span><img src={fil1} alt="profil users" /></span>
                    <ul>
                      <li className='Name'>Jonas Kahenga</li>
                      <li>Buy some product with new...</li>
                    </ul>
                    <p>10m</p>
                    </User>

                    <User className='SecondFil'>
                    <span><img src={fil3} alt="profil users" /></span>
                    <ul>
                      <li className='Name'>David Keith</li>
                      <li>Edit product detail, and sell t...</li>
                    </ul>
                    <p>1h</p>
                    </User>

                    <User className='SecondFil'>
                    <span><img src={fil4} alt="profil users" /></span>
                    <ul>
                      <li className='Name'>Sarah Cloe</li>
                      <li>Update the latest product, o...</li>
                    </ul>
                    <p>8h</p>
                    </User>

                  </Users>

              </Div2>
            </RightBlock>
        </Content>


    </Container>
  )
}

export default Dash