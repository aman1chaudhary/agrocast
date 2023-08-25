import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import '../styles/responsive.css'
import 'react-modal-video/css/modal-video.min.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}

export default MyApp
