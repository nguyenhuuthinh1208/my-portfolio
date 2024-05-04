import './SectionSkills.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Skills from "../Skills/Skills";
import IconDevImg from '../IconDevImg/IconDevImg.jsx';
import {icoHtml,
  icoCss,
  icoBoo,
  icoJs,
  icoRea,
  icoNpm,
  icoNodeJs,
  icoMon,
  icoFullResponsive,
  icoJwt,
  icoGit,
  icoNodemon,
  icoSocketio,
  icoExpress,
  icoGitHub,
  // icoGitLab,
  icoVisualCode,
  icoPhotoshop,
  icoPostman,
  icoTailwindcss,
  // icoResponsively,
} from '../imgDevIcon.js';
function SectionSkills() {
  return (
    <>
    <Title id='skills' text='Skills'/>
    <p  className="textDescrp">This section outlines the skills and tools that I possess. However, I am still learning and updating with the latest trends and technologies, so I am constantly developing new skills.</p>
    <h2 className='TitleSectSkill'>SKILLS</h2>

    <h3 className="subTitleSectSkill">Backend</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoNodeJs} title='NODEJS'/>
    <IconDevImg imgUrl={icoMon} title='MONGODB'/>
    <IconDevImg imgUrl={icoExpress} title='EXPRESS'clase='img-Filter'/>
    <IconDevImg imgUrl={icoSocketio} title='SOCKETIO'clase='img-Filter'/>
    <IconDevImg imgUrl={icoJwt} title='JSONWEBTOKEN'/>
    <IconDevImg imgUrl={icoNodemon} title='NODEMON'/>
    </div>

    <h3 className="subTitleSectSkill">Frontend</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoJs} title='JAVASCRIPT'/>
    <IconDevImg imgUrl={icoRea} title='REACT'/>
    <IconDevImg imgUrl={icoHtml} title='HTML5'/>
    <IconDevImg imgUrl={icoCss} title='CSS3'/>
    <IconDevImg imgUrl={icoBoo} title='BOOSTRAP'/>
    <IconDevImg imgUrl={icoFullResponsive} title='RESPONSIVE'/>
    <IconDevImg imgUrl={icoTailwindcss} title='Tailwind CSS'/>

    </div>
    
    <h3 className="subTitleSectSkill">Development tools</h3>
    <div className='iconsDiv'>
    <IconDevImg imgUrl={icoGit} title='GIT'/>
    <IconDevImg imgUrl={icoNpm} title='NPM'/>
    <IconDevImg imgUrl={icoGitHub} title='GITHUB'  clase='img-Filter'/>
    <IconDevImg imgUrl={icoVisualCode} title='VISUAL STUDIO CODE'/>
    <IconDevImg imgUrl={icoPostman} title='POSTMAN'/>
    <IconDevImg imgUrl={icoPhotoshop} title='PHOTOSHOP'/>


    </div>
    <Skills/>

    <Subtitle text='Skills'/>
    
    </>
  );
}

export default SectionSkills;
