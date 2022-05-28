import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>BIO-BLOG</title>
        <meta
          name="description"
          content=" Egészséges élelmiszerek és alapanyagok, táplálék kiegészítők, kozmetikumok és tisztítószerek is."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
