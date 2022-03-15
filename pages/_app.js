import '../styles/globals.css'
import Menu from '../components/menu';
import Menu2 from '../components/menu2';
import cookies from 'js-cookie';


const lang = cookies.get("lang")||"en";
const log =cookies.get("login")||"false";

function MyApp({ Component, pageProps }) {
  return (
  <body>
    <Menu2 lang={lang} log={log}></Menu2>
    <Component {...pageProps} />
  </body>

  )
}

export default MyApp
