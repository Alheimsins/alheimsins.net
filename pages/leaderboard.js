import Layout from '../components/layout'
import Footer from '../components/footer'
import Link from 'next/link'

export default () => (
  <Layout>
    <div className='content'>
      <h1>Grenland easter treasure hunt</h1>
      <p>Treasure hunt <b>closed</b>.</p>
      <p>- Check out our repos at <a href='https://github.com/alheimsins'>github</a> ;-)</p>
      <div>
        <Link href='/static/alheimsins-net.png'><a>Challenge</a></Link>
        <br /><br />
        <b>Price</b><br />
          #1: 500 NOK<br />
          #2: 200 NOK<br />
          #3: 100 NOK <br /><br />
      </div>
      <ul>
        <li>#1 Jostein Tveit <img src='/static/crown.png' /></li>
      </ul>
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
