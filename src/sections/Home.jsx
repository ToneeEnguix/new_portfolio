/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import arrowImg from '../assets/imgs/drawn_arrow.jpeg'

export default function App() {
  return (
    <div css={pageStyle}>
      <WebDev />
      <ItsMe />
      <ArrowDown />
    </div>
  )
}

const pageStyle = {
  minHeight: '100svh',
  backgroundColor: '#f4f4f4',
}

const WebDev = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((color) => (color === '#4a60ab' ? '#2994d1' : '#4a60ab'))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const [color, setColor] = useState('#4a60ab')

  const compStyle = {
    fontFamily: "'Alfa Slab One', sans-serif",
    padding: '20% 20% 50px',
    fontSize: '1.5rem',
    color,
    transition: 'all 2000ms linear',
    textAlign: 'left',
  }

  return (
    <div css={compStyle}>
      <h1>Web</h1>
      <h1>Dev</h1>
      <h1>Toni</h1>
    </div>
  )
}

const ItsMe = () => {
  return (
    <div css={itsMeStyle} className='flexCenter'>
      <img src={arrowImg} alt='arrow' className='arrow' />
      <p>It's Me!</p>
      <img
        className='profile'
        src='https://img.icons8.com/ios-filled/50/gender-neutral-user.png'
        alt='gender-neutral-user'
      />
    </div>
  )
}

const itsMeStyle = {
  position: 'relative',
  width: 'fit-content',
  margin: '0 auto',
  '.arrow': {
    mixBlendMode: 'darken',
    width: '70px',
    position: 'absolute',
    bottom: 90,
    left: 60,
    webkitTransform: 'scaleX(-1) rotate(50deg)',
    transform: 'scaleX(-1) rotate(50deg)',
  },
  p: {
    fontFamily: "'Shadows Into Light', cursive",
    whiteSpace: 'nowrap',
    position: 'absolute',
    top: '-10px',
    left: '120px',
    zIndex: 2,
    fontSize: '1.5rem',
  },
  '.profile': {
    width: '100px',
    border: '1px solid black',
    borderRadius: '100px',
    padding: '10px',
  },
}

const ArrowDown = () => {
  let pageHeight = window.innerHeight

  return (
    <svg className='arrows' onClick={() => window.scrollBy(0, pageHeight)}>
      <path className='a1' d='M0 0 L30 32 L60 0'></path>
      <path className='a2' d='M0 20 L30 52 L60 20'></path>
      <path className='a3' d='M0 40 L30 72 L60 40'></path>
    </svg>
  )
}
