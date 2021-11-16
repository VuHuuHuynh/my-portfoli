import Head from 'next/head'
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Huynh Vu - Back-end Dev</title>
        <link rel="icon" href="/logo-face.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
