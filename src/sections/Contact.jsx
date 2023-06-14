/** @jsxImportSource @emotion/react */

export default function Contact() {
  return (
    <div css={pageStyle}>
      <h1 className='title'>Contact</h1>
      <form>
        <input type='text' placeholder='Full Name' />
        <input type='text' placeholder='your@email.com' />
        <textarea placeholder='I loved your portfolio, Toni, and wanted to offer you the best job ever'></textarea>
      </form>
    </div>
  )
}

const pageStyle = {
  minHeight: '100vh',
  background: 'rgb(216,233,246)',
  background:
    'linear-gradient(90deg, rgba(216,233,246,1) 0%, rgba(216,230,246,1) 46%, rgba(208,219,244,1) 100%)',
}
