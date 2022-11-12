import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
import '../posts.css'
import Tweet from './tweet/Tweet.jsx'

import { FiMoreVertical } from 'react-icons/fi'
import { BiComment } from 'react-icons/bi'
import { AiOutlineRetweet } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'

import ImgUser1 from '../../assets/users//ImgUser1.jpg'
import PostMedia1 from '../../assets/posts-media/PostMedia1.png'
import ImgUser3 from '../../assets/users//ImgUser3.jpg'
import PostMedia2 from '../../assets/posts-media/PostMedia2.jpg'

const Feed = () => {
  return (
    <div className='home'>
        <Tweet />
        
        <div className="posts">
          <article>
            <div>
              <NavLink to="/profile" >
                <div className='profile-img'>
                    <img src={ImgUser1} alt="" />
                </div>
              </NavLink>
            </div>

            <div>
              <div className="user">
                <a href="">
                  <p>Andres Vidoza</p>
                </a>
                <a href="">
                  <span>@andres_vidoza</span>
                </a>
                <span>·</span>
                <span>December 19, 2021</span>
                <div className='more'>
                  <FiMoreVertical />
                </div>
              </div>

              <p>The Dream Desk Setup - Workspace + Desk Tour 2021</p>
              
              <div className='media'>
                <img src={PostMedia1} alt="" />
              </div>

              <div className='actions'>
                <div className='comment'>
                  <BiComment />
                  <p>7</p>
                </div>
                <div className='retweet-active'>
                  <AiOutlineRetweet />
                  <p>5</p>
                </div>
                <div className='like'>
                  <AiOutlineHeart />
                  <p>76</p>
                </div>
                <div className='share'>
                  <FiShare />
                </div>
              </div>
            </div>
          </article>

          <article>
            <div>
              <NavLink to="/profile" >
                <div className='profile-img'>
                    <img src={ImgUser3} alt="" />
                </div>
              </NavLink>
            </div>

            <div>
              <div className="user">
                <a href="">
                  <p>Brais Moure</p>
                </a>
                <a href="">
                  <span>@MoureDev</span>
                </a>
                <span>·</span>
                <span>March 4</span>
                <div className='more'>
                  <FiMoreVertical />
                </div>
              </div>

              <p>En unas horas en YouTube...</p>
              
              <div className='media'>
                <img src={PostMedia2} alt="" />
              </div>

              <div className='actions'>
                <div className='comment'>
                  <BiComment />
                  <p>5</p>
                </div>
                <div className='retweet'>
                  <AiOutlineRetweet />
                  <p>9</p>
                </div>
                <div className='like-active'>
                  <AiOutlineHeart />
                  <p>53</p>
                </div>
                <div className='share'>
                  <FiShare />
                </div>
              </div>
            </div>
          </article>
        </div>
    </div>
  )
}

export default Feed