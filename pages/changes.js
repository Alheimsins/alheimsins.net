import Commits from '../components/Commits'

export default () =>
  <div>
    <h1>Latest changes</h1>
    <Commits source='https://api.github.com/repos/Alheimsins/alheimsins.net/commits' />
  </div>
