/** @jsxImportSource @emotion/react */

import ElSorrallImage from '../assets/imgs/projects/elsorrall.webp'
import XLRStudioImage2 from '../assets/imgs/projects/xlr2.webp'
import TeanaBandImage from '../assets/imgs/projects/teana.webp'
import HiFiNoiseStudioImage from '../assets/imgs/projects/hifi.webp'

import { skills } from '../data/skills'

export default function Projects() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Projects</h1>
      <div className='wrapper'>
        {projectsInfo.map((project, i) => {
          return <Project key={i} proj={project} />
        })}
      </div>
    </div>
  )
}

const pageStyle = {
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
  padding: '0 10% 5vh',
  h1: {
    marginBottom: '2rem',
  },
}

const Project = ({ proj }) => {
  return (
    <div css={projectStyle}>
      <a href={proj.link} target='_blank' rel='noopener noreferrer'>
        <h3 className='pointer'>{proj.title}</h3>
        <img className='pointer' src={proj.image} alt={proj.title} />
      </a>
      <p>{proj.description}</p>
      <p>
        Design:{' '}
        <a
          href={proj.designerLink}
          target='_blank'
          rel='noopener noreferrer'
          className='pointer'
        >
          {proj.design}
        </a>
      </p>
    </div>
  )
}

const projectStyle = {
  textAlign: 'left',
  marginBottom: '3rem',
  h3: {
    fontWeight: 500,
    fontSize: '1.5rem',
    margin: '0 0 1rem',
    textDecoration: 'underline',
  },
  img: {
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  p: {
    lineHeight: '1.7rem',
  },
  'p a': {
    textDecoration: 'underline',
    lineHeight: '3rem',
  },
}

const projectsInfo = [
  {
    title: 'El Sorrall',
    image: ElSorrallImage,
    description:
      'This website was made as an exercise, the purpose of which was to better forge the alliance between Elisa and myself as a team. It was the first approach we did and we learnt a lot, from how to treat assets like images or fonts to how to better communicate each ones needs.',
    design: 'Elisa Alcaide',
    designerLink: 'https://www.linkedin.com/in/ealcaidest/',
    link: 'https://elsorrall.netlify.app',
    techUsed: ['React', 'Emotion', 'Netlify'],
  },
  {
    title: 'XLR Studio',
    image: XLRStudioImage2,
    description:
      "This was a heavy image loaded website, it was the first time I implemented an intersection oberver, resulting in a much better load time than initially. They are a production company that wanted to highlight their work and vision. Also implemented different languages with React's context",
    design: 'Paloma Almodóvar',
    designerLink: 'https://www.linkedin.com/in/palomaga/',
    link: 'https://xlrestudio.com/xlr+',
    techUsed: [{ name: '' }],
  },
  {
    title: 'Teana Band',
    image: TeanaBandImage,
    description:
      'The psychedelic-rock band Teana needed a website, so between the design of Paloma and myself on the keys we developed this website, where you can listen to their songs inside the page itself, shop their products and browse their library of albums.',
    design: 'Paloma Almodóvar',
    designerLink: 'https://www.linkedin.com/in/palomaga/',
    link: 'https://www.teanaband.com',
    techUsed: [{ name: '' }],
  },
  {
    title: 'HiFi Noise Studio',
    image: HiFiNoiseStudioImage,
    description:
      'This was one of my first works, a website for a recording and mixing studio. They did the design themselves and through purple and dark images we tried to make the features glow. Also has translation included, an embedded Spotify playlist, a contact form and a crazy hover animation on the white logos.',
    design: 'Alex Ruiz & Guillermo Galve',
    designerLink: 'https://www.instagram.com/hifinoisestudio/',
    link: 'https://hifinoisestudio.com/',
    techUsed: [{ name: '' }],
  },
]
