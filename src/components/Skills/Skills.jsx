import './Skills.css'

//como parametro se puede pasar 1 o varios skills

function Skills({arraySkills =undefined}) {
  return (

    <ul className='skills-list'>
    {arraySkills && arraySkills.map((skill, index) => (
    <li className='skill' key={index}>{skill}</li>
    ))} 
    </ul>
  );
}

export default Skills;
