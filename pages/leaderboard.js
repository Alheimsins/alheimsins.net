import Layout from '../components/layout'
import Footer from '../components/footer'
import Link from 'next/link'
import axios from 'axios'
import React from 'react'

export default class Easter extends React.Component {
  constructor () {
    super()
    this.state = { winners: [] }
  }

  getStatus = async () => {
    const winners = await getData()
    this.setState(winners)
  }

  async componentDidMount () {
    this.getStatus()
    // this.interval = setInterval(() => this.getStatus(), 3000)
  }

  render () {
    const { winners } = this.state
    return (
      <Layout>
        <div className='content'>
          <h1>Grenland easter treasure hunt #steganography</h1>
          <p><i>Note: QR-codes are inverted. Use a QR-reader that supports it.<br/>
          - Check out our repos at <a href="https://github.com/alheimsins">github</a> ;-)</i></p>
          <div>
            <Link href='/static/alheimsins-net.png'><a>Challenge</a></Link>
            <br /><br />
            <b>Price</b><br />
        #1: 500 NOK<br />
        #2: 200 NOK<br />
        #3: 100 NOK <br /><br />
          </div>
          <ul>
            {
              winners.length > 0
                ? winners.map((winner, i) =>
                  <li key={i}>#{++i} {winner.name} { i === 1 && <img src="/static/crown.png" /> }</li>
                )
                : 'No winners yet'
            }
          </ul>
          <p style={{ color: 'black' }}>chess-steg-cli</p>
        </div>
        <Footer />
        <style jsx>
          {`
        ul {
          list-style-type: none;
          padding: 0px;
        }
        li {
          margin-bottom: 1em;
        }
        a:after {
          content: '';
          height: 1px;
          background: white;
          position: absolute;
          pointer-events: none;
          bottom: -5px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }

        a:after {
          opacity: 1;
          transform: scale(1, 1);
        }

        a {
          display: inline-block;
          margin: 0 20px;
          position: relative;
          text-decoration: none;
          color: white;
          margin: 0;
          transition: all 200ms;
        }
      `}
        </style>
      </Layout>
    )
  }
}

const getData = async () => {
  try {
    const { data: winners } = await axios('https://yacdn.org/proxy/https://leaderboard.alheimsins.net')
    return { winners }
  } catch (error) {
    console.log(error)
    return { winners: [] }
  }
}
