import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

import { TiHome } from 'react-icons/ti'
import { HiHashtag } from 'react-icons/hi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { CgMoreO } from 'react-icons/cg'

const Menu = () => {
  return (
    <div className='nav'>
      <nav>
          <ul>
              <NavLink to='/'>
                <li>
                  <div className='icon'><TiHome /></div>
                  <p>Home</p>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><HiHashtag /></div>
                  <p>Explore</p>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><IoNotificationsOutline /></div>
                  <p>Notification</p>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><BiMessageSquareDetail /></div>
                  <p>Messages</p>
                </li>
              </NavLink>
              
              <NavLink to='/'>
                <li>
                  <div className='icon'><CgMoreO /></div>
                  <p>More</p>
                </li>
              </NavLink>
          </ul>
      </nav>
    </div>
  )
}

export default Menu