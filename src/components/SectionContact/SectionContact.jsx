import './SectionContact.css'
import Title from "../ElementTitle/Titles/Title";
import Subtitle from "../ElementTitle/Subititle/Subtitle";
import BtnLink from '../BtnsLink/BtnLink';
import { iconSkype } from '../../icons';

function SectionContact() {
  return (
    <>

    <Title id='contact' text='Contact'/>
   
  <p className="textDescrp">You can reach me through my inbox or Skype. I will get back to you shortly. 📬</p>
  <p className="textDescrp">You can write to me at:📩 <a className="link-email" href="mailto:nguyenhuuthinh120803@gmail.com">nguyenhuuthinh120803@gmail.com</a></p>
  <div className='linkedin-contactdiv'>
  <p className='textDescriptContact'>Or click here</p>
  <BtnLink imagSvg={iconSkype} Href='https://join.skype.com/invite/wy4exHKnrXdx' viewbox=' 2 0 22 30' toolTip='Skype'/></div>
    <Subtitle text='Contact'/>
 
    </>
  );
}

export default SectionContact;
