import { AppProps } from 'next/app';
import { wrapper } from '@/store';
import "@/styles/globals.scss";
import Header from '@/layout/header/header';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import MetaData from '@/layout/metaData/metaData';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();

  useEffect(() => {
    console.log("Client-side store state:", store.getState());
  }, [store]);

  return (
    <>
      <MetaData />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);