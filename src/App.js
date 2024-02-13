import React, { createContext, useState } from 'react';
import { NavBar, Banner, Experience, Skills, Contact, Footer, Project } from './components';
import './App.css';
export const ThemeContext = createContext(null);

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const setHandlerDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div style={{ backgroundColor: '#823ae04d' }}>
      <ThemeContext.Provider value={{ setHandlerDrawer }}>
        <NavBar />
        <Banner />
        <Experience />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
