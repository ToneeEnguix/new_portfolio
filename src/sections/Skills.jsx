/** @jsxImportSource @emotion/react */
import Tilt from 'react-parallax-tilt'

export default function Skills() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Skills</h1>
      <div className='wrapper'>
        {skills.map(({ name, logo }) => {
          return <Skill key={name} name={name} logo={logo} />
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

  '.wrapper': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    justifyItems: 'center',
    padding: '0 5%',
  },
}

const Skill = ({ name, logo }) => {
  return (
    <Tilt
      tiltReverse={true}
      scale={1.2}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      transitionSpeed={2500}
      glareColor='#4a60abb3'
      glarePosition='all'
      glareBorderRadius='8px'
      css={skillStyle}
    >
      {name}
    </Tilt>
  )
}

const skillStyle = {
  backgroundColor: '#efefefe3',
  margin: '2rem 0',
  padding: '2rem 0',
  width: '80%',
  borderRadius: '8px',
}

const skills = [
  {
    name: 'JavaScript',
    logo: '',
  },
  {
    name: 'React',
    logo: '',
  },
  {
    name: 'NodeJS',
    logo: '',
  },
  {
    name: 'Express',
    logo: '',
  },
  {
    name: 'MongoDB',
    logo: '',
  },
  {
    name: 'MySQL',
    logo: '',
  },
]
