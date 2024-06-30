import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Project from './components/Project'
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
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
      case 'Project':
        return <Project/>
      case 'Contact':
        return <Contact />;
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