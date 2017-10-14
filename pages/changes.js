import Layout from '../components/layout'
import Footer from '../components/footer'
import Commits from '../components/Commits'

export default () =>
  <Layout>
    <Commits source='https://api.github.com/repos/Alheimsins/alheimsins.net/commits?per_page=10' />
    <Footer />
  </Layout>
