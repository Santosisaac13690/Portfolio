import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function ShowProjects(props) {
  return (
    <main>
      <Nav />
      <div className='show-project-ctn'>
            <div className='show-project'>
              <img src={props.selected.image} alt={props.selected.imageAlt} />
              <h2>{props.selected.name}</h2>
              <div className='background'>

              </div>
              <p>{props.selected.languages}</p>
              <p>{props.selected.contributors}</p>
              <div className='site-links'>
                <a href={props.selected.repoLink} target="_blank" rel="noreferrer">View Repo</a>
                <a href={props.selected.deployLink} target="_blank" rel="noreferrer">View Site</a>
              </div>
            </div>      
      </div>
      <Footer />
    </main>
  )
}

export default ShowProjects