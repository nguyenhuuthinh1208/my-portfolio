import './IconDevImg.css';

function IconDevImg({imgUrl, title, width="45px", height="45px", clase}) {
  return (
  <>
  <button className='btn' data-tooltip={title}>
  <img src={imgUrl} title={title} alt={title} width={width} height={height} className={clase} />
  <h3 className='title-btn-icon'>{title}</h3>
  </button>

 
  </>
  );
}

export default IconDevImg;
