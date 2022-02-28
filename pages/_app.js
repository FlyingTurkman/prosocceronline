import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import Menu from '../components/menu';
import cookies from 'js-cookie';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const lang = cookies.get("lang")||"en";

function MyApp({ Component, pageProps }) {
  return (
  <body>
    <Menu lang={lang}></Menu>
    <Component {...pageProps} />
  </body>

  )
}

export default MyApp
