import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from './Home.module.css'; 

function Home() {
  const [darkMode, setDarkMode] = useState(true);


  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darkMode);
      document.body.classList.remove(styles.lightMode);
    } else {
      document.body.classList.add(styles.lightMode);
      document.body.classList.remove(styles.darkMode);
    }
  }, [darkMode]);

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
        <button className={styles.modeToggle} onClick={toggleMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
      <main className={styles.content}>
        <h1>Welcome to Advyka'25</h1>
        <p>The Eminence of Ecstasy.</p>
      </main>
    </div>
  );
}

export default Home;
