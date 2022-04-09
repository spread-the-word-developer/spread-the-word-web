import React from 'react';

import './Home.css';
import { NavLink } from '../../Taskbar/TaskbarElements';
import EmailSubmission from './EmailSubmission/EmailSubmission';
import Recomendations from './Recomendations/Recomendations';
import Card from './Recomendations/Card/Card';




function Home() {
  return (
    <div className="Home">
      <EmailSubmission />
      <Recomendations />
      
    </div>
    );
}

export default Home;