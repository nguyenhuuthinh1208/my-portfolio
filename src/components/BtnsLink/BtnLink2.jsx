
//descargar los imgSVG de https://iconbuddy.app/
import './BtnLink2.css'
function BtnLink2({imagSvg, viewbox='0 0 24 24',Href,toolTip,className='btn-link2', contentP, Width="29"}) {
  return (
    <>
     <a className='a-BtnLink2' href={Href} target='_blank' rel="noreferrer" >
     
    <svg className={className} width={Width}  viewBox={viewbox} xmlns="http://www.w3.org/2000/svg" aria-label={toolTip} role='img' >
    <path fill="currentColor" d={imagSvg}/>
    </svg>
    <p>
    {contentP}
    </p>
    </a>
    
    </>
  );
}

export default BtnLink2;

