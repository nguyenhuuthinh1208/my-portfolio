import './SectionPortfolio.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import Article from './Article/Article';
import BtnLink from '../BtnsLink/BtnLink';
import { iconGitHub,iconlink } from '../../icons';
function SectionPortfolio() {
  return (
    <>
    <Title id='portfolio' text='Project'/>
    <p className='textDescrp'>This section contains some of my Projects. You can view the rest by going to my GitHub repository.</p>
    <div className='divArticles'>
    <Article img="img/huuthinhimg/gemini.jpg"  titleProject='Gemini' textP='Developed using ReactJS, NodeJS, and JavaScript, this project integrates Googles Gemini AI API to empower you with accurate and up-to-date information retrieval and knowledge exchange ' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/nguyenhuuthinh1208/gemini-AI' toolTip='ver repository'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://nguyenhuuthinh1208.github.io/gemini-AI/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','ReactJS','API']} />

   <Article img="img/huuthinhimg/wtapp.jpg"  titleProject='Weather' textP='This project enables you to track weather forecast information fornumerous locations and places around the world quickly and accurately.
' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/nguyenhuuthinh1208/react-weather-app' toolTip='ver repository'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://nguyenhuuthinh1208.github.io/react-weather-app/' toolTip='ver deploy'/>]} skills={['HTML','CSS','JavaScript','ReactJS','Weather-API','axios']} />

<Article img="img/huuthinhimg/social.jpg"  titleProject='social media ' textP='A social media app that lets you connect with friends, share updates, and engage with each others lives' 
    iconLink={ [<BtnLink imagSvg={iconGitHub} Href='https://github.com/nguyenhuuthinh1208/threads-cl' toolTip='ver repository'/>,<BtnLink imagSvg={iconlink} viewbox='0 0 24 24' Href='https://threads-cl.onrender.com' toolTip='ver deploy'/>]} skills={['Vite.js,','Chakra UI','JavaScript','ReactJS','Socket.IO','Node.js','Mongoose','jsonwebtoken','Cloudinary','MongoDB','bcryptjs']} />
    </div>
   

    <Subtitle text='Project'/>
      
    </>
  );
}

export default SectionPortfolio;
