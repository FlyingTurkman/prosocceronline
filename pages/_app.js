import '../styles/globals.css'
import Menu from '../components/menu';
import cookies from 'js-cookie';


const lang = cookies.get("lang")||"en";
const log =cookies.get("login")||"false";

function MyApp({ Component, pageProps }) {
  return (
  <body>
    <Menu lang={lang} log={log}></Menu>
    <Component {...pageProps} />
  </body>

  )
}

export default MyApp
