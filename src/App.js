import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ShowProjects from './components/ShowProjects';


function App() {
  const [state, setState] = React.useState({ selectedProject: null });

  const handleClick = (project) => {
    setState( {selectedProject: project} )
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects handleClick={handleClick} />} />
            <Route path="/showproject" element={<ShowProjects selected={state.selectedProject} />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
