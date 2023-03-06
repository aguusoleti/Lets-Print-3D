import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/Styles.scss';
import AppBar from '../components/Navbar/AppBar';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1V2XY64HKY"></Script>
      <Script id="google_analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1V2XY64HKY');`}
      </Script>
      <AppBar />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;