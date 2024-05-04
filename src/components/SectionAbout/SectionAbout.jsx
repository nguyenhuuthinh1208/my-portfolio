
import './SectionAbout.css'

import { IconCv, iconEmail, iconSkype} from '../../icons';
import BtnMouse from '../BtnsLink/BtnMouse';
import BtnLink2 from '../BtnsLink/BtnLink2';
import clipboardCopy from 'clipboard-copy';
import { toast } from 'react-toastify';


function About() {
  const myEmail="nguyenhuuthinh120803@gmail.com";
  const copyToClipboard = () => {
    clipboardCopy(myEmail)
      .then(() => {
        showToast('Text copied to clipboard!');
      })
      .catch((err) => {
        showToast('Error copying to clipboard: ' + err.message);
      });
  };

  const showToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  return (
    
    <>
    <section id='about' className='sectionProfile'>
      
      < div className='divProfile'>
      <div>
        {/* <div className="imgProfile">
          <img src="./img/" alt="fotoPerfil"/>
        </div> */}
        </div>
      <div className='text-box-description'> 
      <h1 className='stateProfile'>Ready to work</h1>
      <h2 className='title-Name'>Hello,I'm Nguyen Huu Thinh </h2>
      <h2 className='title-Profession'>Frontend Developer</h2>
      <p className='textDescrp'>A Programmer From <span className='text-span1'>Vietnamese vni</span>.</p>
      <p className='textDescrp'>My current experience focuses on <span className='text-span2'> developing websites and applications</span>.</p>
      <p className='textDescrp'><span className='text-span3'>I am actively looking for a job and excited about the possibility of applying my skills within a company</span>.</p>
 
      <div className='pMasInfo'>
      <BtnLink2  contentP={"Skype"} imagSvg={iconSkype} Width='24'viewbox='2 0 19 24' toolTip={'Skype'} Href={'https://join.skype.com/invite/wy4exHKnrXdx'} />
        <BtnLink2  contentP={"DownLoad"} imagSvg={IconCv}Width='25' viewbox='0 0 449 512' toolTip={'DownLoad'} Href={'https://drive.google.com/file/d/1Vd3LBQ-tlgB2cO4dKX0u0w8Yjhvco1Nd/view?usp=sharing'} />
        <div onClick={copyToClipboard}>
        <BtnLink2 contentP={"nguyenhuuthinh120803@gmail.com"} imagSvg={iconEmail} viewBox='0 0 24 24' toolTip={'Email'}  href={""}/>
     
        </div>
      
           

</div>   
      </div> 
      </div>  
    <div className='content-mouse'>
      <BtnMouse/> 
      </div> 
    </section>
    
      
      
    </>
  );

}

export default About;
