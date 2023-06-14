/** @jsxImportSource @emotion/react */
import { useLayoutEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { skills } from '../data/skills'

export default function Skills() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Skills</h1>
      <div className='wrapper'>
        {skills.map(({ name, logo }, i) => {
          return <Skill key={name} name={name} logo={logo} i={i} />
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
  padding: '0 0 10vh',
  '.wrapper': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    justifyItems: 'center',
    padding: '0 5%',
  },
}

const Skill = ({ name, logo, i }) => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useLayoutEffect(() => {
    const tilt = document.querySelector(`.tilt${i}`)
    if (!tilt) return
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: tilt,
        end: '+=200', // end after scrolling 200px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    })

    // add animations and labels to the timeline
    tl.from(tilt, {
      opacity: 0,
      y: randomIntFromInterval(200, 400),
      x: randomIntFromInterval(-300, 300),
      scale: 0.6,
      rotation: 30,
      duration: 10,
    }).to(tilt, {
      y: 0,
      scale: 1,
      x: 0,
      opacity: 1,
      rotation: 0,
      duration: 10,
    })

    return () => {
      tl.revert()
    }
  }, [])

  return (
    <div css={skillStyle} className='flexColumn'>
      <Tilt
        tiltReverse={true}
        scale={1.2}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        transitionSpeed={2500}
        glareColor='#cac0cbb3'
        glarePosition='all'
        glareBorderRadius='8px'
        className={`flexCenter tilt tilt${i}`}
        reset={true}
      >
        <img src={logo} alt={name} title={name} />
      </Tilt>
      <p>{name}</p>
    </div>
  )
}

const skillStyle = {
  width: '80%',
  '.tilt': {
    backgroundColor: '#efefefe3',
    margin: '2rem 0 1rem',
    padding: '2rem 0',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  },
  img: {
    width: '50%',
    margin: '0 auto',
  },
  p: {
    width: '80%',
    textAlign: 'center',
  },
}
