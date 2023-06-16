/** @jsxImportSource @emotion/react */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import GeorgeImg from '../assets/imgs/faces/george.webp'
import JorgeImg from '../assets/imgs/faces/jorge.webp'
import AlexImg from '../assets/imgs/faces/alex.webp'
import { useLayoutEffect } from 'react'

export default function Testimonies() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Testimonies</h1>
      <div className='wrapper'>
        {testimoniesInfo.map((testi, i) => {
          return <Testimony testi={testi} key={i} i={i} />
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

const Testimony = ({ testi, i }) => {
  useLayoutEffect(() => {
    const testi = document.querySelector(`.testi${i}`)
    if (!testi) return
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: testi,
        end: '+=250', // end after scrolling 200px beyond the start
        scrub: 4, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    })
    // tl.duration(2)
    // add animations and labels to the timeline
    tl.from(testi, {
      opacity: 0,
      x: i % 2 === 0 ? -200 : 100,
      width: '0px',
    }).to(testi, {
      opacity: 1,
      x: 0,
      width: '100%',
    })

    return () => {
      tl.revert()
    }
  }, [])

  return (
    <div css={testimonyStyle} className={`testi${i}`}>
      <div className='titleWrapper flexBetween'>
        <div className='flexColumn'>
          <h3>{testi.name}</h3>
          <h3>
            <i>{testi.company}</i>
          </h3>
        </div>
        <img src={testi.img} alt={testi.name} />
      </div>
      <p>{testi.description}</p>
    </div>
  )
}

const testimonyStyle = {
  position: 'relative',
  backgroundColor: '#fffdfd59',
  borderRadius: '16px',
  marginBottom: '2rem',
  padding: '2rem',
  lineHeight: '1.5rem',
  textAlign: 'justify',
  '.titleWrapper': {
    marginBottom: '1rem',
    '.flexColumn': {
      alignItems: 'flex-start',
    },
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
  {
    name: 'Alex Ruiz',
    company: 'Teana & Hifi Noise Studio',
    img: AlexImg,
    description:
      'Trabaje con Toni para llevar a cabo 2 webs. En las 2 ocasiones la experiencia fue inmejorable! Uno de los puntos fuertes de Toni es la atención, todas las respuestas son muy rápidas y atentas. Hace que el desarrollo del trabajo sea mucho mas fluido y asi las ideas flujan mejor. Por otro lado las ideas aportadas por su parte siempre son buenas, buen gusto!.',
  },
]
