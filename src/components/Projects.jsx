import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import work from '../Projects.json'
import { Link } from 'react-router-dom';

function Projects(props) {
  return (
    <main>
      <Nav />
      <div className="project-ctn">
                {work.projects.map((card) => {
                    return (
                      <Link to='/showproject' onClick={() => props.handleClick(card)}>
                        <div className="project">
                            <img src={card.image} alt={card.imageAlt} className='image' />
                            <h2>{card.name}</h2>
                            <p>{card.languages}</p>
                            <p>{card.contributors}</p>
                        </div>
                      </Link>
                    )
                })}
        </div>
      <Footer />      
    </main>
  )
}

export default Projects;