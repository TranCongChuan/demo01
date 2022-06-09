import '../styles/globals.css'
import '../styles/custom.sass'
import '../styles/more.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Buzocoin | Entertainment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description"  content="Provide comprehensive solutions from ERP software, CRM, Website, Mobile,... to advertising strategy, promoting corporate brand" />
        <link rel="icon" type="image/png" sizes="92x92" href="/favicon.png" />

        <meta property="og:url" content="https://buzocoin.herokuapp.com/" />
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="Buzocoin Website" />
        <meta property="og:keyword" content="" />
        <meta property="og:description" content="Provide comprehensive solutions from ERP software, CRM, Website, Mobile,... to advertising strategy, promoting corporate brand" />
        <meta property="og:image" content="/index.jpg" />
        <meta property="og:image:type" content="image/jpeg/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Buzocoin Website" />
        <meta property="og:locale" content="vi" />
        <meta property="og:site_name" content="buzocoin.herokuapp.com ™" />
        {/* <meta property="fb:app_id" content="4396555210427677" /> */}
        
        {/* <meta name="google-site-verification" content="xLxzEu1KK1aMMsm1XC4JA0OtV7DxXjc-HNxRP7c_R2w" /> */}
        
        {/* <link rel="canonical" href="http://buso.asia"/> */}
        {/* <meta name="revisit-after" content="1 day"/> */}
        {/* <meta name="HandheldFriendly" content="true"/> */}
        {/* <link rel="apple-touch-icon-precomposed" href="/favicon.png" type="image/x-icon" sizes="92x92"/> */}
        {/* <meta name="robots" content="noodp,index,follow"/> */}
        {/* <meta httpEquiv="content-language" content="vi"/> */}
        {/* <meta name="p:domain_verify" content="ebd5adc71caa761c4c336ef0b5936ed1"/> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
