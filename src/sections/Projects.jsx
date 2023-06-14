/** @jsxImportSource @emotion/react */
import ElSorrallImage from '../assets/imgs/projects/elsorrall.webp'
import XLRStudioImage2 from '../assets/imgs/projects/xlr2.webp'
import TeanaBandImage from '../assets/imgs/projects/teana.webp'
import HiFiNoiseStudioImage from '../assets/imgs/projects/hifi.webp'

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
    techUsed: [''],
  },
  {
    title: 'XLR Studio',
    image: XLRStudioImage2,
    description: '',
    design: 'Paloma Almodóvar',
    designerLink: 'https://www.linkedin.com/in/palomaga/',
    link: 'https://xlrestudio.com/xlr+',
    techUsed: [{ name: '' }],
  },
  {
    title: 'Teana Band',
    image: TeanaBandImage,
    description: '',
    design: 'Paloma Almodóvar',
    designerLink: 'https://www.linkedin.com/in/palomaga/',
    link: 'https://www.teanaband.com',
    techUsed: [{ name: '' }],
  },
  {
    title: 'HiFi Noise Studio',
    image: HiFiNoiseStudioImage,
    description: '',
    design: 'Alex Ruiz & Guillermo Galve',
    designerLink: 'https://www.instagram.com/alexruizter/?hl=en',
    link: 'https://hifinoisestudio.com/',
    techUsed: [{ name: '' }],
  },
]
