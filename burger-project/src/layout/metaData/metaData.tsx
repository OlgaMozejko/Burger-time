import { FC }from 'react';
import Head from 'next/head';


const MetaData: FC = () => {
  return (
    <Head>
      <title>STOP! Its burger time!</title>
      <link rel="icon" href="/burger_icon_ico.ico" type="image/x-icon" />
    </Head>
  );
};

export default MetaData;