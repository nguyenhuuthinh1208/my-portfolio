
import Skills from '../../Skills/Skills';
import './Article.css'


function Article({titleProject,textP,iconLink,skills, img=""}) {
  return (
   <article key={titleProject} className='card'>
     
    {img !== "" && <section className='section-image-card'><img className='imagecard' src={img} alt="imagecard" /></section>}
    
    <section className='section-cuerpo-card'>
    <div className='headArticIcons'>
        <div><svg className='folderPortfolio' width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V11M2 11v8.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V11M2 11h20"/>
        </svg></div>
        <div className='div-iconlink'> 
          {iconLink.map((link, index) => (
            <div key={index}>{link}</div>
          ))}
        </div>
    </div>
    <h3 className='Project-title'>{titleProject}</h3>
    <div>
    <p>{textP}</p>
   <Skills arraySkills={skills} />
    </div>

    </section>
   </article>
  );
}

export default Article;
