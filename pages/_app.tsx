import type { AppProps } from "next/app";
import "../styles/globals.css";
import { wrapper } from "../lib/store";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...props.pageProps} />;
      </Provider>
    </>
  );
}
