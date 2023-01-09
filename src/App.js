import React from 'react';
import './App.css';
import AbtMe from './comp/abtMe';
import Head from './comp/headSec';
import NavBar from './comp/navbar';
import Projects from './comp/projects';
import { projects} from './info';

function App() {
  return (
    <>
      <NavBar />
      <Head/>
      <AbtMe/>
      <Projects projects = {projects}/>
    </>
  );
}

export default App;
