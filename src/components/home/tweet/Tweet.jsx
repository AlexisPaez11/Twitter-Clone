import React from 'react'
import { NavLink } from 'react-router-dom'
import './tweet.css'
import ProfileImg from '../../../assets/users/alexis_paez_.jpg'
import { BsImage } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { BsCalendar4Week } from 'react-icons/bs';
import { TbMapPin } from 'react-icons/tb';
import { CgPoll } from 'react-icons/cg';

const Tweet = () => {
  return (
    <div className='tweet'>
        <div>
          <NavLink to="/profile" >
              <div className='profile-img'>
                  <img src={ProfileImg} alt="" />
              </div>
          </NavLink>
        </div>

        <div>
          <input type="text" placeholder='What’s happening?' autoComplete='off' />

          <div>
            <div className="actions">
              <div><BsImage /></div>
              <div><AiOutlineFileGif /></div>
              <div><CgPoll /></div>
              <div><BsEmojiSmile /></div>
              <div><BsCalendar4Week /></div>
              <div><TbMapPin /></div>
            </div>

            <div className='post-tweet'>
              Tweet
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tweet