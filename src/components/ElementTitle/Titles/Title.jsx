import './Title.css'

function Title({id,text}) {
  return (
    <>
      <h2 id={id} className='title-element'>{text}</h2>
    </>
  );
}

export default Title;
