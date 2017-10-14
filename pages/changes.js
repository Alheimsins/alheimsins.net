import Layout from '../components/layout'
import Footer from '../components/footer'
import Commits from '../components/Commits'
const commits = require('../data/commits.json')

export default () =>
  <Layout>
    <div className={'content'}>
      <Commits data={commits} />
    </div>
    <Footer />
  </Layout>
