import React from 'react';

import { NavLink } from '../../Taskbar/TaskbarElements';
import EmailSubmission from './EmailSubmission/EmailSubmission';
import Recomendations from './Recomendations/Recomendations';
import Card from './Recomendations/Card/Card';
import style from './Home.module.css'
import News from './News/News';




function Home() {
  return (
    <div className="Home">
      <News />
      <div className = {style.recomendation_title}>
            Recomendations
      </div>
      <Recomendations dontInclude = {null} />
      <EmailSubmission />
      
    </div>
    );
}

export default Home;