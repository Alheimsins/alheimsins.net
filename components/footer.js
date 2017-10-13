'use strict'
import Link from 'next/link'

const links = [
  {
    url: 'https://github.com/alheimsins',
    name: 'github'
  }
]

export default () => (
  <div className='footer'>
    <div className='left'>
      <Link href='/' prefetch><a>Alheimsins</a></Link>
    </div>
    <div className='right'>
      {links.map(link =>
        <a key={link.name} href={link.url} target='_blank'>
          {link.name.toUpperCase()}
        </a>
      )}
      <Link href='/changes' prefetch><a>Changes</a></Link>
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
          bottom: 20px;
          font-size: 12px;
          position: fixed;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
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
        }

        .right {
          display: inline-block;
        }

        .right a {
          display: inline-block;
          margin-right: 30px;
        }
      `}
    </style>
  </div>
)
