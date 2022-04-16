import '../styles/globals.css'
import Menu from '../components/menu';
import Menu2 from '../components/menu2';
import Menu3 from '../components/menu3';
import cookies from 'js-cookie';
import Head from 'next/head';

const lang = cookies.get("lang")||"en";
const log =cookies.get("login")||"false";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
    </Head>
    <body>
      <Menu3 lang={lang} log={log}></Menu3>
      <Component {...pageProps} />
    </body>
    </>


  )
}

export default MyApp
