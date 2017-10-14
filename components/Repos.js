import React from 'react'

export default class Repos extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.data.map(line => {
            return (
              <li key={line.id}>
                <a href={line.html_url} target={'_blank'}>{line.name}</a><br />
                <span>{line.description}</span>
              </li>
            )
          })}
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
