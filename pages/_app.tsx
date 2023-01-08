import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import { getThemeSetting } from '../context/DataHelper';
import { Config } from '../context/Config';

axios.defaults.baseURL = process.env.BASE_API_URL;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [ context, setContext ] = useState(null);

  useEffect(() => {
    getThemeSetting()
      .then(function (response) {
        setContext(response.data);
      })
      .catch(function (error) {
        throw Error(error);
      });
  }, []);

  if (!context) return;

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Config.Provider value={context}><Component {...pageProps} /></Config.Provider>);
}
