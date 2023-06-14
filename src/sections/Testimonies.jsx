/** @jsxImportSource @emotion/react */

import GeorgeImg from '../assets/imgs/faces/george.jpeg'
import JorgeImg from '../assets/imgs/faces/jorge.jpeg'

export default function Testimonies() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Testimonies</h1>
      <div className='wrapper'>
        {testimoniesInfo.map((testi, i) => {
          return <Testimony testi={testi} key={i} />
        })}
      </div>
    </div>
  )
}

const pageStyle = {
  minHeight: '100vh',
  background: 'rgb(216,233,246)',
  background:
    'linear-gradient(90deg, rgba(216,233,246,1) 0%, rgba(216,230,246,1) 46%, rgba(208,219,244,1) 100%)',
  padding: '0 10% 5vh',
  h1: {
    marginBottom: '2rem',
  },
}

const Testimony = ({ testi }) => {
  return (
    <div css={testimonyStyle}>
      <div className='titleWrapper'>
        <h3>
          {testi.name} — {testi.company}
        </h3>
        <img src={testi.img} alt={testi.name} />
      </div>
      <p>{testi.description}</p>
    </div>
  )
}

const testimonyStyle = {
  backgroundColor: '#fffdfd59',
  borderRadius: '16px',
  marginBottom: '2rem',
  padding: '2rem',
  lineHeight: '1.5rem',
  textAlign: 'justify',
  '.titleWrapper': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    img: {
      width: '50px',
      height: '50px',
      borderRadius: '100px',
      border: '1px solid black',
    },
  },
}

const testimoniesInfo = [
  {
    name: 'George Kovalev',
    company: 'Barcelona Code School',
    img: GeorgeImg,
    description:
      'He has proved to be a very promising developer with exceptionally strong logical skills, very fast learning and curious mind always looking for the better ways to solve the challenges he faced and experimenting to find the optimal solution. Definitely Toni would be a valuable addition to any team of developers thanks to his coding skills, strong work ethic and very nice personality.',
  },
  {
    name: 'Jorge Reyes',
    company: 'Agap2 ( Technip )',
    img: JorgeImg,
    description:
      'Recomiendo a Toni como un desarrollador altamente competente, con habilidades impresionantes en términos de organización, eficiencia y profesionalismo. Tuve la oportunidad de supervisar su trabajo de cerca y pude ver de primera mano su nivel de habilidad y dedicación. Es un placer trabajar con alguien que toma su trabajo tan en serio y se esfuerza constantemente por mejorar. Como supervisor, siempre me sentí confiado en su capacidad para cumplir con las tareas asignadas y superar las expectativas. Su trabajo demostró un nivel de dedicación y habilidad que seguramente lo llevará muy lejos en su carrera. Además, su atención a los detalles y su enfoque en la calidad del trabajo hacen que cualquier proyecto en el que esté involucrado sea un éxito. Estoy seguro que cualquier equipo de desarrollo se beneficiaría enormemente al tenerlo a bordo.',
  },
]
