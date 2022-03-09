import React from 'react';

import './Home.css';
import { NavLink } from '../../Taskbar/TaskbarElements';

function Home() {
  return (
    <div className="Home">

      <div className = "image-button-container">

        <div className = "image-container">
          <img src = "pictures/orange-book.webp" alt = "book image"/>
        </div>

        <div className = "button-container">
          <NavLink to = "/about">
            <button className = "learn-more-button">
              <span className = "learn-more-button-text">
                Learn more
              </span>
            </button>
          </NavLink>
        </div>
      </div>

    </div>
    );
}

export default Home;