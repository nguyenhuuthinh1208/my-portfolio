
//descargar los imgSVG de https://iconbuddy.app/
import './BtnLink.css'
function BtnLink({imagSvg, viewbox='0 0 16 16',Href,toolTip,className='btn-link'}) {
  return (
    <>
     <a href={Href} target='_blank' rel="noreferrer" data-tooltip={toolTip}>
    <svg className={className} width="29"  viewBox={viewbox} xmlns="http://www.w3.org/2000/svg" aria-label={toolTip} role='img' >
    <path fill="currentColor" d={imagSvg}/>
    </svg>
    </a>
    
    </>
  );
}

export default BtnLink;


