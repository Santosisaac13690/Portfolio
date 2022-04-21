import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assets/Isaac Santos Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
    faXmark,
    faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faInstagramSquare,
    faGithubSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


export default class Nav extends Component {
    state = {
        navcontainer: false,
    }
    render(){
        var Handlechange = e =>{
            this.setState({navcontainer:!this.state.navcontainer});
        }

        var navmenu = this.state.navcontainer;
        
        return (
            <div>
                <nav>
                    <div className='closed-nav'>
                        <h3>ISAAC SANTOS</h3>
                        <a aria-label="open-nav" onClick={Handlechange}><FontAwesomeIcon icon={faBars} /></a>
                    </div>

                    {navmenu && (
                        <div className='nav-open'>
                            <div className='nav-menu'>
                                <div className='closed-nav'>
                                    <h3>ISAAC SANTOS</h3>
                                    <a aria-label="open-nav" onClick={Handlechange}><FontAwesomeIcon icon={faXmark} /></a>
                                </div>

                                <ul>
                                    <li><Link to="/" className="hover">HOME</Link></li>
                                    <li><Link to="/projects" className="hover">PROJECTS</Link></li>
                                    <li><Link to="/contact" className="hover">CONTACT</Link></li>
                                    <li><a href={Resume} target="_blank" rel="noreferrer" className="hover">RESUME</a></li>
                                </ul>
                            </div>

                            <footer>
                                <ul>
                                <li><a href="https://www.instagram.com/santos_j_isaac/" target="_blank" rel="noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>

                                <li><a href="https://www.linkedin.com/in/isaac-santos-alvarado/" target="_blank" rel="noreferrer" aria-label="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>

                                <li><a href="https://www.facebook.com/santosjisaac/" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>

                                <li><a href="mailto:santosisaac13690@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>

                                <li><a href="https://github.com/Santosisaac13690" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
                                </ul>

                            </footer>
                        </div>
                    )}

                </nav>
            </div>
        )
    }
}