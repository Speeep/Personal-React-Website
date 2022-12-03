import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import bwsi from '../assets/bwsi_racecar_img.png';
import rbe3002 from '../assets/rbe-3002-img.jpg';
import mitll from '../assets/lincoln_labs_front.png';
import portfolio from '../assets/website_thumbnail.jpg';

function Projects() {
  return (
    <div className='projects'>
        <div className='projects-wrapper'>
          <div className='projects-container'>
            <Link to='/mitllinternship' className='projects-page-link'>
              <h1><strong>MIT LL Intership</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
              <img src={mitll} alt="MIT LL Image" />
            </div>
          </div>
          <div className='projects-container'>
            <Link to='/roboticsortingsystem' className='projects-page-link'>
            <h1><strong>Robotic Sorting System</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/75gPulQR9qM" title="FINAL PROJECT | ROBOTIC SORTING SYSTEM" allowFullScreen></iframe>
            </div>
          </div>
          <div className='projects-container'>
            <Link to='/portfoliowebsite' className='projects-page-link'>
              <h1><strong>Portfolio Website</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
            <img src={portfolio} alt="Portfolio Website Image" />
            </div>
          </div>
          <div className='projects-container'>
            <Link to='/slampathplanning' className='projects-page-link'>
              <h1><strong>SLAM and Path Planning</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
            <img src={rbe3002} alt="RBE 3002 Image" />
            </div>
          </div>
          <div className='projects-container'>
            <Link to='/mitbwsi' className='projects-page-link'>
              <h1><strong>MIT BWSI</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
              <img src={bwsi} alt="BWSI Image" />
            </div>
          </div>
          <div className='projects-container'>
            <Link to='/rbe2001finalproject' className='projects-page-link'>
              <h1><strong>RBE 2001 Final Project</strong></h1>
            </Link>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/gSLVrY4VGMs" title="FINAL PROJECT | ROBOTIC SORTING SYSTEM" allowFullScreen></iframe>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects