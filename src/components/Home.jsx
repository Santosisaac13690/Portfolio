import React from 'react';
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

            <h2>SOFTWARE DEVELOPER</h2>
            <hr />
            <p>I'm an up-and-coming Full Stack Software Developer—a motivated and passionate technological artist who's always looking to develop my skills and experience.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;