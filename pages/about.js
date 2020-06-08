import Layout from '../components/layout'
import Footer from '../components/footer'

const users = [
  {
    avatar: '/static/zrrrzzt.png',
    name: 'Geir Gåsodden',
    nick: {
      name: 'zrrrzzt',
      link: 'https://github.com/zrrrzzt/'
    },
    description: 'loves coding and coffee'
  },
  {
    avatar: '/static/maccyber.png',
    name: 'Jonas Maccyber Enge',
    nick: {
      name: 'maccyber',
      link: 'https://github.com/maccyber'
    },
    description: 'generally a nice guy'
  },
  {
    avatar: '/static/person.png',
    name: 'Ingar Helgesen',
    nick: {
      name: 'sherex',
      link: 'https://github.com/sherex'
    },
    description: 'generally a guy'
  }
]

export default () => (
  <Layout>
    <h1>Mission</h1>
    <p>our mission</p>
    <div className='content'>
      {users.map(user => (
        <div key={user.nick.name} className='info'>
          <div>
            <span className='avatar'>
              <img alt='Avatar' width='80' height='80' src={user.avatar} />
            </span>
          </div>
          <div className='text'>
            <div className='name'>
              {user.name}
            </div>
            <div className='nick'>
              <a href={user.nick.link}>@{user.nick.name}</a>
            </div>
            <div className='description'>
              <i>{user.description}</i>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    <style jsx>
      {`
        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .info {
          display: flex;
          flex-direction: row;
          padding: 10px 0px;
          align-items: center;
          justify-content: center;
        }
        .text {
          text-align: left;
          padding-left: 20px;
          min-width: 200px;
        }
        .avatar {
          border-radius: 100%;
          display: inline-block;
          overflow: hidden;
          border: 2px solid white;
          line-height: 0;
          vertical-align: top;
        }
        .nick a {
          color: white;
        }
        .name {
          display: inline-block;
          font-size: 18px;
          font-weight: 700;
        }
      `}
    </style>
  </Layout>
)
