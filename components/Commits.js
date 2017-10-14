import React from 'react'

export default class Commits extends React.Component {
  render () {
    return (
      <div>
        <h1>Latest changes</h1>
        <div className='message'>
          {this.props.data.length > 0 ? '' : '...nothing to see'}
        </div>
        <ul>
          {this.props.data.map(line => {
            const when = new Date(line.commit.author.date)
            return (
              <li key={line.sha}>
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
