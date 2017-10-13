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
    this.setState({data: data.slice(0, 10), message: data.length > 0 ? '' : '....nothing to tell'})
  }

  render () {
    return (
      <div>
        <h1>Latest changes</h1>
        <div className='message'>
          {this.state.message}
        </div>
        <ul>
          {this.state.data.map(line => {
            const when = new Date(line.commit.author.date)
            return (
              <li>
                <span>{when.toDateString()}</span> {line.commit.message} <span>{line.commit.author.name}</span>
              </li>
            )
          })}
        </ul>
        <style jsx>
          {`
          ul {
            list-style-type: none;
          }
          li {
            margin-bottom: 1em;
          }
          span {
            color: #666;
          }
          td {
            text-align: left;
          }
          .message {
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
