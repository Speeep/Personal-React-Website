import React from 'react'
import video from '../assets/personal_site_vid.mp4'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='overlay'></div>
          <video src={video} autoPlay loop muted/>
          <div className='content'>
            <Link to='/about' className='home-about-link'>
              <h1><strong>Welcome</strong></h1>
              <h6><strong>to my portfolio!</strong></h6>
            </Link>
          </div>
    </div>
  )
}

export default Home