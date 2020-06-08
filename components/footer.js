import Link from 'next/link'

const links = [
  {
    url: 'https://github.com/alheimsins',
    name: 'github'
  }
]

export default () => (
  <footer className='footer'>
    <div className='left'>
      <Link href='/'><a>Alheimsins</a></Link>
    </div>
    <div className='right'>
      {links.map(link =>
        <a key={link.name} href={link.url} target='_blank' rel='noopener noreferrer'>
          {link.name}
        </a>
      )}
      <Link href='/projects'><a>Projects</a></Link>
      <a href='/leaderboard'>Easter</a>
    </div>
    <style jsx>
      {`
        a:after {
          content: '';
          height: 1px;
          background: white;
          position: absolute;
          pointer-events: none;
          bottom: -5px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }

        a:hover:after {
          opacity: 1;
          transform: scale(1, 1);
        }

        .footer {
          color: #666;
          font-size: 12px;
          width: 100%;
          height: 50px;
          text-align: center;
        }

        .footer a {
          display: inline-block;
          margin: 0 20px;
          position: relative;
          text-decoration: none;
          color: #666;
          margin: 0;
          transition: all 200ms;
        }

        .footer a:hover {
          color: white;
        }

        .left {
          display: inline-block;
          margin-bottom: 30px;
          margin-left: 0;
          margin-right: 30px;
          text-transform: uppercase;
        }

        .right {
          display: inline-block;
        }

        .right a {
          display: inline-block;
          margin-right: 30px;
          text-transform: uppercase;
        }
      `}
    </style>
  </footer>
)
