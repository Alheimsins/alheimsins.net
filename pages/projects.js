import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Repos from '../components/Repos'
const getData = require('../lib/get-data')
const reposUrl = 'https://api.github.com/orgs/Alheimsins/repos'

export default class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      message: '...searching'
    }
  }

  async componentDidMount () {
    const data = await getData(reposUrl)
    this.setState({ data: data, message: data.length > 0 ? '' : '....nothing found' })
  }

  render () {
    return (
      <Layout>
        <div className={'content'}>
          <h1>Projects</h1>
          <div className='message'>
            {this.state.message}
          </div>
          <Repos data={this.state.data} />
        </div>
        <Footer />
      </Layout>
    )
  }
}
