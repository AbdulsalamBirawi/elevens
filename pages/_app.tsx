import Head from "next/head";
import { wrapper } from "../lib/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PageWrapper } from "../src/components/templates/PageWrapper";
import '../styles/globals.css'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <PageWrapper>
          <Component {...props.pageProps} />
        </PageWrapper>
      </Provider>
    </>
  );
}
