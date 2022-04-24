import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <section>
        <footer>
            <ul>
              <li><a href="https://www.instagram.com/santos_j_isaac/" target="_blank" rel="noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>

              <li><a href="https://www.linkedin.com/in/isaac-santos-alvarado/" target="_blank" rel="noreferrer" aria-label="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>

              <li><a href="https://www.facebook.com/santosjisaac/" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>

              <li><a href="mailto:santosisaac13690@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>

              <li><a href="https://github.com/Santosisaac13690" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
            </ul>
            <p className="copyright">Copyright &copy; 2022, Isaac Santos</p>
        </footer>
    </section>
  )
}

export default Footer;