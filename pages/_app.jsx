import Footer from '../components/Footer'
import Header from '../components/Header'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}
