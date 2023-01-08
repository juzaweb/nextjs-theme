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

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [ context, setContext ] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getThemeSetting();

      setContext(response.data)
    })();
  }, []);

  if (!context) return;

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SafeHydrate>
      <Config.Provider value={context}>
            <Component {...pageProps} />
      </Config.Provider>
    </SafeHydrate>
  );
}
