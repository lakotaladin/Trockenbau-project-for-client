import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // vracamo funkciju za ciscenje
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    // ako korisnik skroluje vise od 200px, dugme postaje vidljivo
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const handleClick = () => {
    // pri kliku na dugme, vracamo se na vrh stranice
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const styles = {
    width: '50px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#645124',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 999999
  }

  return (
    <button 
      style={styles}
      onClick={handleClick}
    >
      <i className="ri-arrow-up-line"></i>
    </button>
  );
}

export default ScrollToTopButton;
