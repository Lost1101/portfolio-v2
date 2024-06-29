import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Skills from './components/Skils';
import Navbar from './components/Navbar'
import About from './components/About';
import Home from './components/Home'
import Footer from './components/Footer'
import SideBar from './components/Sidebar';
import Loader from './components/Loader';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [displayComponent, setDisplayComponent] = useState('Home')

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, 3000);
  }, []);

  const renderComponent = () => {
    switch (displayComponent) {
      case 'Home':
        return <Home/>;
      case 'About':
        return <About/>;
      case 'Skills':
        return <Skills />;
      /*case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;*/
      default:
        return <Home/>;
    }
  };

  if (isLoading) {
    return <Loader fadeOut={fadeOut}/>;
  }

  return (
    <div className="App">
      <Navbar onNavClick={setDisplayComponent} />
      <SideBar />
      <div>{renderComponent()}</div>
      <Footer />
    </div>
  );
}

export default App;