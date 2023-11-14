import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <meta name="google-site-verification" content="wn5YWxKCorxG3M-bRmwqCZ_-biCfvuL1-gyFl-nC0oU" />
      <meta
        name='keywords'
        content='portfolio, abolfazl jamshidi, abolfazl, jamshidi, React, NextJs, frontend, developer, javascript, typescript'
      />
      <meta property='og:title' content='Abolfazl Jamshidi' />
     
      <meta
        property='og:image'
        content='https://iabolfazl.dev/socialLinkImage.jpg'
      />
      <meta property="og:image:width" content="1280"/>
      <meta property="og:image:height" content="720"/>
      <meta property="og:description" content="Stonishing Portfolio"/>
      <meta name='author' content='Abolfazl Jamshidi' />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='use-credentials'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
