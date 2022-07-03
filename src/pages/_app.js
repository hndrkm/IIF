import '../styles/globals.css'
import Layout from "../components/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Fiumsa</title>
      <link rel="shortcut icon" href="/logoiif.jpg" />
      <meta
          name="Description"
          content="Pagina del instituto de Investigaciones Fisicas UMSA."
        />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    
  );
}

export default MyApp
