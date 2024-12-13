import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from './Home.module.css';

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [stars, setStars] = useState([]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(styles.darkMode);
      document.body.classList.remove(styles.lightMode);
      generateStars();
    } else {
      document.body.classList.add(styles.lightMode);
      document.body.classList.remove(styles.darkMode);
    }
  }, [darkMode]);

  const generateStars = () => {
    const numStars = 100; // You can adjust this number
    const starArray = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 2 + 1; // Random size between 1 and 3px
      const left = Math.random() * 100; // Random position on X axis
      const top = Math.random() * 100; // Random position on Y axis
      starArray.push({ left, top, size });
    }
    setStars(starArray);
  };

  return (
    <div className={styles.app}>
      {darkMode && (
        <div className={styles.stars}>
          {stars.map((star, index) => (
            <div
              key={index}
              className={styles.star}
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            ></div>
          ))}
        </div>
      )}
      {darkMode && <div className={styles.shootingStars}></div>}
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
