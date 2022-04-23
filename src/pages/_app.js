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
          content="Pagina de la carrera de fisica de la facultad de Ciencias puras y natirales de la UMSA."
        />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    
  );
}

export default MyApp
