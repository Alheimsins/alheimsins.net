import { author } from '../package.json'

const links = [
  {
    url: 'https://github.com/alheimsins',
    name: 'GITHUB'
  },
  {
    url: 'https://twitter.com/alheimsins',
    name: 'twitter'
  },
  {
    url: 'https://google.no',
    name: 'something else'
  }
]

export default () => (
  <div className='footer'>
    <div className='left'>
        © 2017 — <a href={author.email}>{author.email}</a>
    </div>
    <div className='right'>
      {links.map(link =>
        <a key={link.name} href={link.url} target='_blank'>{link.name.toUpperCase()}</a>
      )}
    </div>
    <style jsx global>
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
          position: absolute;
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
