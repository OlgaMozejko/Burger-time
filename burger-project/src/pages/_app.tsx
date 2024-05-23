import { AppProps } from 'next/app';
import { wrapper } from '@/store';
import "@/styles/globals.scss";
import Header from '@/layout/header/header';
import MetaData from '@/layout/metaData/metaData';

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <MetaData />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);