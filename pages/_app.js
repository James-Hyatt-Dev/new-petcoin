import { Fragment } from 'react'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
