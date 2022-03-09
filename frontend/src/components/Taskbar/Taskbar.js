
import './Taskbar.css';
import React from 'react';
import { NavLink } from './TaskbarElements';


function Taskbar() {
  return (
    <div className="taskbar"> 
        
        <div className = "taskbar-container">

            <div className = "nav-list-item-container">

                <NavLink to = "/">
                <li className = "nav-list-item">
                    HOME
                </li>
                </ NavLink>

                <NavLink to = "/publications">
                <li className = "nav-list-item">
                    PUBLICATIONS
                </li>
                </ NavLink>

                <NavLink to = "/send">
                <li className = "nav-list-item">
                    SEND
                </li>
                </ NavLink >
                

                <NavLink to = "/services">
                <li className = "nav-list-item">
                    SERVICES
                </li>
                </ NavLink >

                <NavLink to = "/about">
                <li className = "nav-list-item">
                    ABOUT
                </li>
                </ NavLink >
            </div>


        </div>
        
    </div>
  );
}

export default Taskbar;