/** @jsxImportSource @emotion/react */
import { useLayoutEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import JavaScriptLogo from '../assets/imgs/logos/javaScript.png'
import ReactLogo from '../assets/imgs/logos/react.png'
import NodeJSLogo from '../assets/imgs/logos/node.svg'
import ExpressLogo from '../assets/imgs/logos/express.png'
import MongoDBLogo from '../assets/imgs/logos/mongo.png'
import MySQLLogo from '../assets/imgs/logos/mysql.svg'
import FigmaLogo from '../assets/imgs/logos/figma.svg'
import TypeScriptLogo from '../assets/imgs/logos/typescript.png'
import NextJSLogo from '../assets/imgs/logos/next.png'
import EmotionLogo from '../assets/imgs/logos/emotion.png'
import HTMLLogo from '../assets/imgs/logos/html.png'
import CSSLogo from '../assets/imgs/logos/css.png'
import TailwindLogo from '../assets/imgs/logos/tailwind.png'
import NetlifyLogo from '../assets/imgs/logos/netlify.png'
import GitHubLogo from '../assets/imgs/logos/github.svg'
import GitLabLogo from '../assets/imgs/logos/gitlab.svg'
import GitLogo from '../assets/imgs/logos/git.png'
import ReactRouterLogo from '../assets/imgs/logos/router.png'
import StripeLogo from '../assets/imgs/logos/stripe.svg'
import NodemailerLogo from '../assets/imgs/logos/nodemailer.png'
import GSAPLogo from '../assets/imgs/logos/gsap.svg'

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
  padding: '0 0 10%',
  '.wrapper': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    justifyItems: 'center',
    padding: '0 5%',
  },
}

const Skill = ({ name, logo, i }) => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useLayoutEffect(() => {
    const tilt = document.querySelector(`.tilt${i}`)
    if (!tilt) return
    //     gsap.to(tilt, {
    //       scrollTrigger: tilt,
    //       rotation: 360,
    //       duration: 2,
    //       ease: 'bounce.out',
    //     })
    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: tilt,
        // start: 'top top', // when the top of the trigger hits the top of the viewport
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
    }).to(tilt, {
      y: 0,
      scale: 1,
      x: 0,
      opacity: 1,
      rotation: 0,
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
        {/* {name} */}
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

const skills = [
  {
    name: 'HTML',
    logo: HTMLLogo,
  },
  {
    name: 'CSS',
    logo: CSSLogo,
  },
  {
    name: 'JavaScript',
    logo: JavaScriptLogo,
  },
  {
    name: 'React',
    logo: ReactLogo,
  },
  {
    name: 'React Router',
    logo: ReactRouterLogo,
  },
  {
    name: 'NodeJS',
    logo: NodeJSLogo,
  },
  {
    name: 'Express',
    logo: ExpressLogo,
  },
  {
    name: 'MongoDB',
    logo: MongoDBLogo,
  },
  {
    name: 'MySQL',
    logo: MySQLLogo,
  },
  {
    name: 'Figma',
    logo: FigmaLogo,
  },
  {
    name: 'TypeScript',
    logo: TypeScriptLogo,
  },
  {
    name: 'NextJS',
    logo: NextJSLogo,
  },
  {
    name: 'Emotion',
    logo: EmotionLogo,
  },

  {
    name: 'Tailwind',
    logo: TailwindLogo,
  },
  {
    name: 'Netlify',
    logo: NetlifyLogo,
  },
  {
    name: 'Git',
    logo: GitLogo,
  },
  {
    name: 'GitHub',
    logo: GitHubLogo,
  },
  {
    name: 'GitLab',
    logo: GitLabLogo,
  },

  {
    name: 'Stripe',
    logo: StripeLogo,
  },
  {
    name: 'Nodemailer',
    logo: NodemailerLogo,
  },
  {
    name: 'GSAP',
    logo: GSAPLogo,
  },
]
