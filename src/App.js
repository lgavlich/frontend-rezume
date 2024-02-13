import React, { createContext, useState } from 'react';
import './App.css';
import { NavBar, Banner, Experience, Skills, Contact, Footer, Project } from './components';
export const ThemeContext = createContext(null);

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const setHandlerDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <ThemeContext.Provider value={{ setHandlerDrawer }}>
      <NavBar />
      <Banner />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
