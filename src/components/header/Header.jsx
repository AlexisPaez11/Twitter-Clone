import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css';

import Logo from '../../assets/twitter-logo.png'
import UserIMG from '../../assets/users/alexis_paez_.jpg'

const Header = () => {
  return (
    <header>
        <div>
          <NavLink to='/'>
              <div className="logo">
                  <img src={Logo} alt="Logo de Twitter" />
              </div>
          </NavLink>
          <div className="search">
            <input type="search" placeholder='Search Twitter' autoComplete='off' required='' />
          </div>
        </div>

        <div>
          <NavLink to='/profile'>
            <div className="user">
              <img src={UserIMG} alt="" />
              <div>
                <p>Alexis Paez</p>
              </div>
            </div>
          </NavLink>
        </div>
    </header>
  )
}

export default Header