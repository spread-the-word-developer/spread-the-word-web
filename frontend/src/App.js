
import './App.css';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Send from './components/pages/send/Send';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Publication from './components/pages/publication/Publication';



function App() {

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
      console.log("collapsed: ",menuCollapse);
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  return (
    <div className = "App">
      <Router>
          <Sidebar menuCollapse = {menuCollapse} toggle = {menuIconClick}/>
          <Header toggle = {menuIconClick} />
          <Routes>
            
            <Route path = '/' element = {<Home />}/>
            <Route path = '/publications' element = {<></>}/>
            <Route path = '/send' element = {<Send />}/>
            <Route path = '/services' element = {<Services />}/>
            <Route path = '/About' element = {<About />}/>
            <Route  path = "/publication/:id"  exact element = {<Publication />}/>
            

          </Routes>
        
        <Footer />

      </Router>
    </div>
    
  );
}

export default App;
