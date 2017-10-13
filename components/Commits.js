import React from 'react'
const getData = require('../lib/get-data')

export default class Commits extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      message: '....searching'
    }
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    this.setState({data: data, message: data.length > 0 ? '' : '....nothing to tell'})
  }

  render () {
    return (
      <div>
        <h1>Latest changes</h1>
        <div className='intro'>
          {this.state.message}
        </div>
        <table className={this.state.data.length > 0 ? 'show' : 'hide'}>
          <thead>
            <tr>
              <th>when</th>
              <th>who</th>
              <th>what</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(line => {
              const when = new Date(line.commit.author.date)
              return (
                <tr>
                  <td>{when.toDateString()}</td>
                  <td>{line.commit.author.name}</td>
                  <td>{line.commit.message}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <style jsx>
          {`
          table {
            width: 100%;
          }
          th {
            text-align: left;
          }
          td {
            text-align: left;
          }
          .hide {
            display: none;
            visibility: hidden
          }
          .show {
            display: normal;
            visibility: normal;
          }
          .intro {
            position: fixed;
            top: 30%;
            width: 100%;
          }
          `}
        </style>
      </div>
    )
  }
}
