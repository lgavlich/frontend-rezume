import React, { createContext, useState } from 'react';
import { NavBar, Banner, Experience, Skills, Contact, Footer, Project } from './components';
// import './App.css';
import styles from './App.module.css';
export const ThemeContext = createContext(null);

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const setHandlerDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div style={{ backgroundColor: '#823ae04d' }}>
      <div className={styles.bgHero}>
        <div className={styles.leftSide} />
      </div>
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
