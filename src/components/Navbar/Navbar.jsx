import React, { useState } from 'react';
import './Navbar.css'
import BtnDarkMode from './BtnDarkMode/BtnDarkMode';
//import BtnIdioma from './BtnIdioma/BtnIdioma'
import BtnIndex from './Btnindex/Btnindex.jsx';
import BtnLink from '../BtnsLink/BtnLink';
import { iconSkype,iconGitHub} from '../../icons.js';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <header>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <button className='close-button' onClick={toggleMenu}>
        <svg className='btn-link' width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label='Button Menu'>
    <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
    </svg>

  </button>
            <ul className='nav-list'>

              <a href="#about" onClick={toggleMenu}> <BtnIndex text={'About'}/></a>
              <a href="#skills"onClick={toggleMenu}> <BtnIndex text={'Skills'}/></a>
              <a href="#portfolio"onClick={toggleMenu}> <BtnIndex text={'Project'}/></a>
              <a href="#contact"onClick={toggleMenu}> <BtnIndex text={'Contact'}/></a>
            </ul>
        
        </nav>
        <div className='content-navbar-btns'> 

        <BtnLink imagSvg={iconSkype} Href='https://join.skype.com/invite/wy4exHKnrXdx' viewbox='0 2 29 28' />
        <BtnLink imagSvg={iconGitHub} Href='https://github.com/nguyenhuuthinh1208' viewbox='0 0 24 24' />
        <BtnDarkMode />
        </div>
      
       
    </header>
    
    
  );
}

export default Navbar;
