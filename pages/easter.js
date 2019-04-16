import Layout from '../components/layout'
import Footer from '../components/footer'

export default () => (
  <Layout>
    <div className='content'>
      <p style={{ color: 'black' }}>
       Use the IMG-src luke! JWT-P1: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
      </p>
      <img src='/static/fibonacci_fibrot_circle.png' style={{ height: '100%', width: '100%', maxHeight: '900px', objectFit: 'contain' }} />
    </div>
    <Footer />
  </Layout>
)
