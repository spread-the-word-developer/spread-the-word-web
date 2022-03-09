import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Taskbar from './components/Taskbar/Taskbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Publications from './components/pages/publications/Publications';
import Send from './components/pages/send/Send';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Header from './components/Header/Header';


function App() {
  return (
    <div className = "App">
      <Router>

        <Taskbar />
        <Header />
          <Routes>

            <Route path = '' element = {<Home />}/>
            <Route path = 'publications' element = {<Publications />}/>
            <Route path = 'send' element = {<Send />}/>
            <Route path = 'services' element = {<Services />}/>
            <Route path = 'About' element = {<About />}/>


          </Routes>
        
        <Footer />

      </Router>
    </div>
    
  );
}

export default App;
