import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Import your layout component here
import '../styles/global.css'; // Import any global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
