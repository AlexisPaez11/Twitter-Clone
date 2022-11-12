import React from 'react'
import { NavLink } from 'react-router-dom'

import { TiHome } from 'react-icons/ti'
import { GoSearch } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BiMessageSquareDetail } from 'react-icons/bi'

const NavMenu = () => {
  return (
    <div className='navMenu'>
        <nav>
            <ul>
              <NavLink to='/'>
                <li>
                  <div className='icon'><TiHome /></div>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><GoSearch /></div>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><IoNotificationsOutline /></div>
                </li>
              </NavLink>

              <NavLink to='/'>
                <li>
                  <div className='icon'><BiMessageSquareDetail /></div>
                </li>
              </NavLink>
          </ul>
        </nav>
    </div>
  )
}

export default NavMenu