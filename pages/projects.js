import Layout from '../components/layout'
import Footer from '../components/footer'
import axios from 'axios'

const reposUrl = 'https://api.github.com/orgs/Alheimsins/repos'

const Repos = ({ data }) => (
  <div>
    <ul>
      {
        data && data.map(line => (
          <li key={line.id}>
            <a href={line.html_url} target='_blank'>
              {line.name}
            </a>
            <br />
            <span>{line.description}</span>
          </li>
        ))
      }
    </ul>
    <style jsx>
      {`
        ul {
          list-style-type: none;
          padding: 0px;
        }
        li {
          margin-bottom: 1em;
        }
        li a {
          color: white;
        }
        span {
          color: #666;
        }
        td {
          text-align: left;
        }
      `}
    </style>
  </div>
)

const Projects = ({ data }) => (
  <Layout>
    <div className='content'>
      <h1>Projects</h1>
      <Repos data={data} />
    </div>
    <Footer />
  </Layout>
)

Projects.getInitialProps = async () => {
  try {
    const { data } = await axios(reposUrl)
    return { data }
  } catch (error) {
    return { data: false }
  }
}

export default Projects
