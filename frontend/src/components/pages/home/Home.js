import React from 'react';

import './Home.css';
import { NavLink } from '../../Taskbar/TaskbarElements';
import EmailSubmission from './EmailSubmission/EmailSubmission';




function Home() {
  return (
    <div className="Home">
      <EmailSubmission />
    </div>
    );
}

export default Home;