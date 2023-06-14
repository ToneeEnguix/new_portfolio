/** @jsxImportSource @emotion/react */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Agap2Img from '../assets/imgs/companies/agap2.webp'
import BarcelonaImg from '../assets/imgs/companies/bcs.webp'
import NebulaImg from '../assets/imgs/companies/nebula.webp'
import { useLayoutEffect } from 'react'

export default function Experience() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Experience</h1>
      <div className='wrapper'>
        {experiences.map((exp, i) => {
          return <ExperienceComp exp={exp} key={i} i={i} />
        })}
      </div>
    </div>
  )
}

const pageStyle = {
  minHeight: '100vh',
  padding: '0 10% 5vh',
  h1: {
    marginBottom: '2rem',
  },
}

const ExperienceComp = ({ exp, i }) => {
  useLayoutEffect(() => {
    const expEl = document.querySelector(`.exp${i}`)
    if (!expEl) return
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: expEl,
        end: '+=300', // end after scrolling 200px beyond the start
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the <scrollbar></scrollbar>
      },
    })

    // add animations and labels to the timeline
    tl.from(expEl, {
      opacity: 0,
      rotationY: '+=180',
    }).to(expEl, {
      opacity: 1,
      rotationY: 0,
    })

    return () => {
      tl.revert()
    }
  }, [])

  return (
    <div css={expStyle} className={`exp${i}`}>
      <div className='flexBetween'>
        <div>
          <h3>{exp.title}</h3>
          <a href={exp.link} target='_blank' rel='noopener noreferrer'>
            <h3>
              <i className='pointer'>@{exp.company}</i>
            </h3>
          </a>
          <h3>{exp.period}</h3>
        </div>
        <a href={exp.link} target='_blank' rel='noopener noreferrer'>
          <img className='pointer' src={exp.logo} alt={exp.company} />
        </a>
      </div>
      <div>
        {exp.description.map((desc, j) => {
          return <p key={`${i}${j}`}>• {desc}</p>
        })}
      </div>
    </div>
  )
}

const expStyle = {
  backgroundColor: '#dddddd33',
  padding: '2rem',
  borderRadius: '16px',
  textAlign: 'left',
  lineHeight: '1.5rem',
  marginBottom: '2rem',
  '.flexBetween': {
    marginBottom: '1rem',
    img: {
      width: '50px',
      height: '50px',
      borderRadius: '100px',
      border: '1px solid black',
      objectFit: 'contain',
      backgroundColor: 'white',
      padding: '5px',
    },
    a: {
      textDecoration: 'underline',
    },
  },
  h3: {
    marginBottom: '.25rem',
  },
  p: {
    marginBottom: '.5rem',
  },
}

const experiences = [
  {
    company: 'Agap2',
    title: 'Full-Stack Mid Dev',
    period: 'Dec 2022– Abr 2023',
    logo: Agap2Img,
    link: 'https://agap2.com/',
    description: [
      'Architected engineering softwares with React, Node, Express, MySQL ',
      'Designed style guides and deployed with IIS',
      'Managed task distribution and pair-programming with a junior',
      'Created documentation for future developers',
    ],
  },
  {
    company: 'Barcelona Code School',
    title: 'Full-Stack MERN Teacher',
    period: 'Jul 2021 – Jun 2022',
    logo: BarcelonaImg,
    link: 'https://www.barcelonacodeschool.com/',
    description: [
      'Created and oversaw wireframe designs from client requests through Figma and AdobeXD',
      'Published digital products on Netlify and Digital Ocean',
      'Added payment gateways implementing Stripe',
      'Email design and automated implementation through Nodemailer and Cron',
      'Image handling via Cloudinary and Multer',
      'Managing, populating and transferring a cloud database in MongoDB',
      'Other packages used: react-router-dom, emotion, firebase, axios, toastify, framer-motion...',
    ],
  },
  {
    company: 'Nebula Industries',
    title: 'Full-Stack MERN Dev',
    period: 'Jul 2020 – Sep 2022',
    logo: NebulaImg,
    link: 'https://www.nebulaindustries.co.uk/',
    description: [
      'MERN Bootcamp Teacher Online and In-Person – HTML, CSS, JS, React, Express, Mongo, React Native...',
      'Exercises revision and projects supervision',
      'Developed test units with Jest, RTL and Enzyme ( up to React@17 )',
      'Kept repositories maintained and updated and added documentation for future students',
    ],
  },
]
