import React from 'react';
import '../App.css';
import AbtMe from './abtMe';
import Projects from './projects';
import {projects} from '../info';

function Portfolio() {
    return (<>
        <AbtMe/>
        <Projects projects = {projects}/>
    </>);
}

export default Portfolio;