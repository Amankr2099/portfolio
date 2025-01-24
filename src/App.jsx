import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className='flex flex-col items-center min-h-screen '>
    <Navbar/>
    <Profile/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>

    </div>
    
    </>
   
  );
};

export default App;
