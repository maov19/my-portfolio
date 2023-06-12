import React from 'react';
import { NavLink, Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
