import React from 'react'
import './sidebar.css'
import ImgUser1 from '../../assets/users//ImgUser1.jpg'
import ImgUser2 from '../../assets/users/ImgUser2.jpg'

import { FiMoreHorizontal } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div >

        <div className='news'>
          <header>
            <h2>What’s happening</h2>
          </header>

          <hr/>

          <div className='articles'>
            <a href=''>
              <article>
                <div>
                  <p>GitHub</p>
                  <div>
                    <span>Technology</span>
                    <span>·</span>
                    <span>20,7 mil Tweets</span>
                  </div>
                </div>
                <div className='more'>
                  <FiMoreHorizontal />
                </div>
              </article>
            </a>

            <a href=''>
              <article>
                <div>
                  <p>Neymar</p>
                  <div>
                    <span>Sports</span>
                    <span>·</span>
                    <span>41,4 mil Tweets</span>
                  </div>
                </div>
                <div className='more'>
                  <FiMoreHorizontal />
                </div>
              </article>
            </a>
          </div>

          <hr/>

          <a href=''>
            <p>Show more</p>
          </a>
        </div>

        <div className='follow'>
          <header>
            <h2>Who to follow</h2>
          </header>

          <hr/>

          <div className='articles'>
            <article>
              <a href=''>
                <img src={ImgUser1} alt="" />
              </a>
              <div>
                <a href="">
                  <p>Andres Vidoza</p>
                </a>
                <a href="">
                <span>@andres_vidoza</span>
                </a>
              </div>
              <div>
                <p>Follow</p>
              </div>
            </article>
            
            <article>
              <a href=''>
                <img src={ImgUser2} alt="" />
              </a>
              <div>
                <a href=''>
                  <p>Miguel Ángel Durán</p>
                </a>
                <a href=''>
                  <span>@midudev</span>
                </a>
              </div>
              <div>
                <p>Follow</p>
              </div>
            </article>
          </div>

          <hr/>

          <a href=''>
            <p>Show more</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar