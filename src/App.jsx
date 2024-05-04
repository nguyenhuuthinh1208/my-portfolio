import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader'; 
import { iconSkype, iconGitHub } from "./icons";
import BtnLink from "./components/BtnsLink/BtnLink";
import BtnScroll from "./components/BtnScroll/BtnScroll";
import Navbar from "./components/Navbar/Navbar";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionPortfolio from "./components/SectionPortfolio/SectionPortfolio";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import "./App.css";
import Astronaut from './components/Astronaut/Astronaut';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
       
         
          <section className="section-main">
          <SectionAbout />
       
            <SectionSkills />
           
            <SectionPortfolio />
          
            <SectionContact />
            <Astronaut/>
            <footer>
              <BtnScroll />
              
              <div className="links-footer">
                <BtnLink imagSvg={iconSkype} Href="https://join.skype.com/invite/wy4exHKnrXdx" viewbox='3 0 19 24' toolTip="Skype" />
                <BtnLink imagSvg={iconGitHub} Href="https://github.com/nguyenhuuthinh1208" toolTip="repositories" />
              </div>
              <div>
                <p>NGUYEN HUU THINH</p>
                
              </div>
            </footer>
          </section>
       </>
      )}
    </>
  );
}

export default App;
