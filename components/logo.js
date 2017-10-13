export default () => (
  <div className='intro'>
    <div className='logoWrap'>
      <svg className='logo' fill='white'>
        <path d='M218.8125 229.9219 L211.7812 242.0156 L132.1875 196.1719 L132.1875 288 L118.125 288 L118.125 196.1719 L38.5312 242.0156 L31.5 229.9219 L111.0938 183.9375 L31.5 137.9531 L38.5312 125.8594 L118.125 171.7031 L118.125 79.875 L132.1875 79.875 L132.1875 171.7031 L211.7812 125.8594 L218.8125 137.9531 L139.2188 183.9375 L218.8125 229.9219 Z' />
      </svg>
    </div>
    <style jsx>
      {`
        .intro {
          position: fixed;
          top: 30%;
          transform: translateY(-50%);
          width: 100%;
         }

        @keyframes colorChange {
          0% {fill:black}
          100% {fill: white}
        }

        .logo {
          width: 300px;
          height: 300px;
          animation: colorChange 5s;
        }
      `}
    </style>
  </div>
)
