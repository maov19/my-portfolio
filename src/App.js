import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { NavLink, Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css'

const App = () => {
  return (
    <>
      <Navigation />
      <div id="main-content">
        <Intro />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
