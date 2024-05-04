import '../../BtnsLink/BtnLink.css'
import React, { useState } from 'react';
import './BtnDarkMode.css';

function BtnDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <div >
      <div onClick={toggleTheme}>
        <svg className='btn-link' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label='Button Dark-Mode' role='img'>
        <path fill="currentColor" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
        </svg>
      </div>
      
    </div>
  );
}

export default BtnDarkMode;
