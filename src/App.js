import React from 'react';
import './App.css';
import AbtMe from './comp/abtMe';
import MyFooter from './comp/footer';
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
      <MyFooter />
    </>
  );
}

export default App;
