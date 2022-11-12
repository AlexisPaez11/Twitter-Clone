import React from 'react'
import { NavLink } from 'react-router-dom'
import './profile.css'
import '../posts.css'

import { IoMdArrowRoundBack } from 'react-icons/io'
import { BsCalendar4Week } from 'react-icons/bs';
import { TbMapPin } from 'react-icons/tb';
import { FiMoreVertical } from 'react-icons/fi'
import { BiComment } from 'react-icons/bi'
import { AiOutlineRetweet } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'

import ProfileImg from '../../assets/users/alexis_paez_.jpg'

import ImgUser1 from '../../assets/users//ImgUser1.jpg'
import PostMedia1 from '../../assets/posts-media/PostMedia1.png'

const Profile = () => {
  return (
    <div className='profile'>
        <div>
          <header>
            <a href="javascript:history.back()">
              <div className='back'>
                <IoMdArrowRoundBack />
              </div>
            </a>
            <div>
              <p className='profile-user'>Alexis Paez</p>
              <span className='profile-tweets'>11 Tweets</span>
            </div>
          </header>
          
          <div className='coverpage'>
            {/* <img src={CoverPage} alt="" /> */}
          </div>

          <div className='profile-block'>
            <div className='profile-block-header'>
              <div className="profile-img">
                <img src={ProfileImg} alt="" />
              </div>

              <div className="edit-profile">
                <p>Edit profile</p>
              </div>
            </div>

            <div className="profile-info">
              <div>
                <p>Alexis Paez</p>
                <span>@alexis_paez_</span>
              </div>

              <span className='profile-biography'>Desarrollador Front End</span>
              
              <div className='profile-data'>
                <div>
                  <TbMapPin />
                  <p>Buenos Aires, Argentina</p>
                </div>
                <div>
                  <BsCalendar4Week />
                  <p> Joined February 2019</p>
                </div>
              </div>
              <div className='profile-data'>
                <div>
                  <p><span>22</span> Following</p>
                </div>
                <div>
                  <p><span>4</span> Followers</p>
                </div>
              </div>
            </div>


            
          </div>
          
          <footer className='profile-sections'>
            <a href=''>
              <div className='active'>
                <p>Tweets</p>
              </div>
            </a>
            
            <a href=''>
              <div>
                <p>Replies</p>
              </div>
            </a>
            
            <a href=''>
              <div>
                <p>Media</p>
              </div>
            </a>
            
            <a href=''>
              <div>
                <p>Likes</p>
              </div>
            </a>
          </footer>
        </div>



        
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
        </div>
    </div>
  )
}

export default Profile