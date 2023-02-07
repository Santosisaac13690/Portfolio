import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import Headshot from '../assets/Headshot.png'

function Home() {
  return (
    <>
      <Nav />
      <div className='home'>
        <div className='header'>
          <img src={Headshot} alt='Headshot' />
          <div className='info'>
            <h1><FontAwesomeIcon icon={faCode} className='code-icon' flip /></h1>
            <h2>WEB DEVELOPER</h2>
            <hr />
            <p>I'm a Data Engineer & a Web Developer. A motivated and passionate technological artist who's always looking for a challenge to develop my skills and experience.</p>
            <Link to='/contact' className='contact-link'>Let's Talk!</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;